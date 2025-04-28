"use client";
import { memo, useState, useCallback } from "react";
import scss from "./RightContent.module.scss";
import CheckoutModal from "../../CheckoutModal/CheckoutModal";

export interface Period {
  id: number;
  months: number;
  price: string;
}

const formatPrice = (price: string): string => 
  Math.floor(parseFloat(price)).toString();

const SubscriptionChoice = memo(
  ({
    period,
    idx,
    isFading,
    onSelect,
    isSelected,
  }: {
    period: Period;
    idx: number;
    isFading: boolean;
    onSelect: (period: Period) => void;
    isSelected: boolean;
  }) => (
    <div
      className={`${scss.choice} ${isSelected ? scss.selected : ""}`}
      tabIndex={0}
      role="button"
      aria-label={`Подписка на ${period.months} месяц за ${period.price}`}
      onClick={() => onSelect(period)}
    >
      <div className={scss.boxes}>
        <div className={scss.box}>
          <p>{idx + 1}</p>
        </div>
        <p>{period.months} месяц</p>
      </div>
      <h6 className={isFading ? "fading" : ""}>
        {formatPrice(period.price)}Р
      </h6>
    </div>
  )
);

SubscriptionChoice.displayName = "SubscriptionChoice";

const RightContent = ({
  periods,
  isFading,
  subscriptionLevel,
  selectedConsole,
  subscriptionServiceId,
  consoleTypeId,
}: {
  periods: Period[];
  isFading: boolean;
  subscriptionLevel: string;
  selectedConsole: string;
  subscriptionServiceId: number;
  consoleTypeId: number;
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSelectPeriod = useCallback((period: Period) => {
    setSelectedPeriod(period);
  }, []);

  const handlePurchase = useCallback(() => {
    if (!selectedPeriod) {
      alert("Выберите период подписки");
      return;
    }
    
    if (!selectedConsole) {
      alert("Выберите консоль");
      return;
    }
    
    setIsModalOpen(true);
  }, [selectedPeriod, selectedConsole]);
  
  const handleCheckoutSubmit = useCallback(async (username: string, password: string) => {
    if (!selectedPeriod) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      console.log("Attempting to authenticate with:", { username, password });
      
      const authResponse = await fetch("https://psgamezz.ru/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      
      console.log("Auth response status:", authResponse.status);
      
      if (!authResponse.ok) {
        const authErrorText = await authResponse.text();
        console.error("Auth error response:", authErrorText);
        throw new Error(`Ошибка авторизации: ${authResponse.status}`);
      }
      
      const authData = await authResponse.json();
      console.log("Auth response data:", authData);
      
      if (!authData.token) {
        throw new Error("Не удалось получить токен авторизации");
      }
      
      const token = authData.token;
      
      const requestBody = {
        subscription_service_id: subscriptionServiceId,
        subscription_period_id: selectedPeriod.id,
        console_type_id: consoleTypeId
      };
      
      console.log("Payment request body:", JSON.stringify(requestBody));
      
      const paymentResponse = await fetch("https://psgamezz.ru/api/payment/initiate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Token ${token}`
        },
        body: JSON.stringify(requestBody)
      });
      
      console.log("Payment response status:", paymentResponse.status);
      
      if (!paymentResponse.ok) {
        const errorText = await paymentResponse.text();
        console.error("Payment error response:", errorText);
        throw new Error(`Ошибка инициализации платежа: ${paymentResponse.status}`);
      }
      
      const paymentData = await paymentResponse.json();
      console.log("Payment response data:", paymentData);
      
      if (paymentData.payment_url) {
        window.location.href = paymentData.payment_url;
      } else {
        throw new Error("Не удалось получить ссылку для оплаты");
      }
    } catch (err: Error | unknown) {
      console.error("Ошибка платежа:", err);
      setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      alert("Ошибка: " + (err instanceof Error ? err.message : "Неизвестная ошибка"));
    } finally {
      setIsLoading(false);
    }
  }, [selectedPeriod, subscriptionServiceId, consoleTypeId]);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  return (
    <div className={scss.content}>
      <h2>Длительность подписки</h2>

      <div className={scss.choices}>
        {periods.map((period, index) => (
          <SubscriptionChoice
            key={index}
            period={period}
            idx={index}
            isFading={isFading}
            onSelect={handleSelectPeriod}
            isSelected={selectedPeriod?.id === period.id}
          />
        ))}

        <button 
          onClick={handlePurchase} 
          type="button" 
          disabled={isLoading || !selectedPeriod}
          className={!selectedPeriod ? scss.disabledButton : ""}
        >
          {isLoading ? "Ожидайте..." : "Купить"}
        </button>
      </div>
      
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        subscriptionData={
          selectedPeriod
            ? {
                name: "PlayStation Plus",
                level: subscriptionLevel,
                console: selectedConsole,
                period: selectedPeriod,
              }
            : null
        }
        onSubmit={handleCheckoutSubmit}
        isLoading={isLoading}
      />
    </div>
  );
};

export default memo(RightContent);
