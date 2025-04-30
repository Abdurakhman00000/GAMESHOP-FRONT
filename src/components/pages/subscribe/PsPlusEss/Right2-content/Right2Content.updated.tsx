"use client";

import { memo, useState, useEffect } from "react";
import scss from "./Right2Content.module.scss";
import { useSubsServicesQuery, useGetTokenMutation, useInitiatePaymentMutation } from "@/redux/api/subs-data";

interface PeriodOption {
  id: number;
  months: number;
  price: string;
}

const formatPrice = (price: string): string => {
  return Math.floor(parseFloat(price)).toString();
};

const SubscriptionChoice = memo(({ 
  option, 
  isSelected, 
  onSelect 
}: { 
  option: PeriodOption; 
  isSelected: boolean; 
  onSelect: () => void;
}) => (
  <div
    className={`${scss.choice} ${isSelected ? scss.selected : ''}`}
    tabIndex={0}
    role="button"
    onClick={onSelect}
    aria-label={`Подписка на ${option.months} ${
      option.months === 1 ? "месяц" : "месяца"
    } за ${formatPrice(option.price)}₽`}
  >
    <div className={scss.boxes}>
      <div className={scss.box}>
        <p>{option.months}</p>
      </div>
      <p>{option.months} месяц</p>
    </div>
    <h6>{formatPrice(option.price)}₽</h6>
  </div>
));

SubscriptionChoice.displayName = "SubscriptionChoice";

const Right2Content = () => {
  const { data, isLoading, isError } = useSubsServicesQuery();
  const [getToken] = useGetTokenMutation();
  const [initiatePayment] = useInitiatePaymentMutation();
  const [selectedPeriodId, setSelectedPeriodId] = useState<number | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [consoleType, setConsoleType] = useState<'PS4' | 'PS5'>('PS5');

  // Listen for console selection changes from parent component
  useEffect(() => {
    // Check if there's a console selection in localStorage (set by Left2Content)
    const storedConsole = localStorage.getItem('selectedConsole');
    if (storedConsole === 'PS4' || storedConsole === 'PS5') {
      setConsoleType(storedConsole);
    }

    // Set up event listener for console changes
    const handleConsoleChange = (event: StorageEvent) => {
      if (event.key === 'selectedConsole' && (event.newValue === 'PS4' || event.newValue === 'PS5')) {
        setConsoleType(event.newValue);
      }
    };

    window.addEventListener('storage', handleConsoleChange);
    return () => window.removeEventListener('storage', handleConsoleChange);
  }, []);

  const getConsoleTypeId = (): number => {
    return consoleType === 'PS5' ? 1 : 2;
  };

  const handlePeriodSelect = (periodId: number) => {
    setSelectedPeriodId(periodId);
    setError(null);
  };

  const handlePurchase = async () => {
    if (!selectedPeriodId) {
      setError("Пожалуйста, выберите длительность подписки");
      return;
    }

    if (!data || data.length === 0) {
      setError("Данные о подписке недоступны");
      return;
    }

    try {
      setIsProcessing(true);
      setError(null);

      // Шаг 1: Получение токена авторизации
      const authResponse = await getToken({
        username: "admin",
        password: "1"
      }).unwrap();

      // Используем токен из памяти, если запрос не удался
      const token = authResponse?.token || "96e1f15b59a32e04cb66f8563807ee233fcf430";

      // Шаг 2: Инициирование платежа
      const paymentData = {
        subscription_service_id: 4, // Фиксированный ID из памяти
        subscription_period_id: selectedPeriodId,
        console_type_id: getConsoleTypeId(),
        token: token
      };

      console.log("Sending payment data:", paymentData);

      const paymentResponse = await initiatePayment(paymentData).unwrap();

      // Шаг 3: Перенаправление на страницу оплаты
      window.location.href = paymentResponse.payment_url;
    } catch (err) {
      console.error("Ошибка при инициировании платежа:", err);
      setError("Произошла ошибка при оформлении подписки. Пожалуйста, попробуйте позже.");
    } finally {
      setIsProcessing(false);
    }
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Произошла ошибка при загрузке подписок</p>;

  return (
    <div className={scss.content}>
      <h2>Длительность подписки</h2>
      <p className={scss.consoleInfo}>Выбрана консоль: {consoleType}</p>

      <div className={scss.choices}>
        {data &&
          data[0].periods.map((option) => (
            <SubscriptionChoice 
              key={option.id} 
              option={option} 
              isSelected={selectedPeriodId === option.id}
              onSelect={() => handlePeriodSelect(option.id)}
            />
          ))}
        <button 
          onClick={handlePurchase} 
          type="button"
          disabled={isProcessing || !selectedPeriodId}
          className={isProcessing ? scss.processing : ''}
        >
          {isProcessing ? 'Обработка...' : 'Купить'}
        </button>
        {error && <p className={scss.error}>{error}</p>}
      </div>
    </div>
  );
};

export default memo(Right2Content);
