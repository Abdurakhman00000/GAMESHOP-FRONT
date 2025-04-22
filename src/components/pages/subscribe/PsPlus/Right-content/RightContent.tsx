"use client";
import { memo } from "react";
import scss from "./RightContent.module.scss";

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
  }: {
    period: Period;
    idx: number;
    isFading: boolean;
  }) => (
    <div
      className={scss.choice}
      tabIndex={0}
      role="button"
      aria-label={`Подписка на ${period.months} месяц за ${period.price}`}
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
  const handlePurchase = () => {
    console.log("Покупка инициирована");
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
          />
        ))}

        <button onClick={handlePurchase} type="button">
          Купить
        </button>
      </div>
    </div>
  );
};

export default memo(RightContent);
