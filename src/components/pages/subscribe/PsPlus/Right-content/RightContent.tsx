"use client";
import { memo, useState } from "react";
import scss from "./RightContent.module.scss";
import { useInitiatePaymentMutation } from "@/redux/api/subs-data";

interface Period {
  months: number;
  price: string;
}

const formatPrice = (price: string): string => {
  return Math.floor(parseFloat(price)).toString();
};

const SubscriptionChoice = memo(
  ({
    period,
    idx,
    isFading,
    onSelect,
  }: {
    period: Period;
    idx: number;
    isFading: boolean;
    onSelect: (period: Period) => void;
  }) => (
    <div
      className={scss.choice}
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
}: {
  periods: Period[];
  isFading: boolean;
}) => {
  const [selectedPeriod, setSelectedPeriod] = useState<Period | null>(null);

  const handleSelectPeriod = (period: Period) => {
    setSelectedPeriod(period);
  };

  const [initiatePayment, { isLoading, error }] = useInitiatePaymentMutation();

  const handlePurchase = async () => {
    if (!selectedPeriod) {
      alert("Выберите период подписки");
      return;
    }

    const data = {
      user_id: 1, 
      username: "admin",  
    };

    try {
      const { paymentUrl } = await initiatePayment(data).unwrap();
      window.location.href = paymentUrl; 
    } catch (err: any) {
      console.error("Ошибка платежа:", err);
    
      const errorMessage =
        err?.data?.message || err?.error || "Неизвестная ошибка";
    
      alert("Не удалось инициировать платеж: " + errorMessage);
    }
  };

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
          />
        ))}

        <button onClick={handlePurchase} type="button" disabled={isLoading}>
          {isLoading ? "Ожидайте..." : "Купить"}
        </button>
      </div>
    </div>
  );
};

export default memo(RightContent);
