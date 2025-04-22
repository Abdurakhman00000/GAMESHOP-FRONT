"use client";

import { memo } from "react";
import scss from "./Right2Content.module.scss";
import { useSubsServicesQuery } from "@/redux/api/subs-data";

interface PeriodOption {
  months: number;
  price: string;
}

const formatPrice = (price: string): string => {
  return Math.floor(parseFloat(price)).toString();
};

const SubscriptionChoice = memo(({ option }: { option: PeriodOption }) => (
  <div
    className={scss.choice}
    tabIndex={0}
    role="button"
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

  const handlePurchase = () => {
    console.log("Покупка инициирована");
  };

  if (isLoading) return <p>Загрузка...</p>;
  if (isError) return <p>Произошла ошибка при загрузке подписок</p>;

  return (
    <div className={scss.content}>
      <h2>Длительность подписки</h2>

      <div className={scss.choices}>
        {data &&
          data[0].periods.map((option, index) => (
            <SubscriptionChoice key={index} option={option} />
          ))}
        <button onClick={handlePurchase} type="button">
          Купить
        </button>
      </div>
    </div>
  );
};

export default memo(Right2Content);
