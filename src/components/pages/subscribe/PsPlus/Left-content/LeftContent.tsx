"use client";

import React, { useState, useEffect } from "react";
import scss from "./LeftContent.module.scss";
import Image from "next/image";
import { useSubsServicesQuery } from "@/redux/api/subs-data";

const LeftContent = () => {
  const { data, error, isLoading } = useSubsServicesQuery();
  const [selectedService, setSelectedService] = useState<SUBS.GetSubsServicesResponse[number] | null>(null);

  useEffect(() => {
    if (data) {
      setSelectedService(data.find(service => service.name === "PlayStation Plus Essential") || null);
    }
  }, [data]);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Произошла ошибка при загрузке данных!</div>;
  }

  if (!selectedService) {
    return <div>Сервис не найден.</div>;
  }

  return (
    <div className={scss.content}>
      <h2>{selectedService.name}</h2>

      <div className={scss.subGame}>
        <Image src="/images/ps-plus/cool_img.svg" alt="Игры по подписке" width={20} height={20} />
        <p>Игры по подписке</p>
      </div>

      <div className={scss.console}>
        <h4>Консоль</h4>
        <div className={scss.console_btn}>
          {selectedService.consoles.includes(1) && <button>PS4</button>}
          {selectedService.consoles.includes(2) && <button>PS5</button>}
        </div>
      </div>

      <div className={scss.level_subs}>
        <h4>Уровень подписки</h4>

        <div className={scss.levelSub_btn}>
          <button>Essential</button>
          <button>Extra</button>
          <button>Deluxe</button>
        </div>
      </div>
      
    </div>
  );
};

export default LeftContent;