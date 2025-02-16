"use client";

import React, { useState } from "react";
import scss from "./LeftContent.module.scss";
import Image from "next/image";

const LeftContent = () => {
  const [selectedConsoles, setSelectedConsoles] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const toggleSelection = (item: string, setSelected: React.Dispatch<React.SetStateAction<string[]>>) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className={scss.content}>
      <h2>Playstation Plus Essential</h2>

      <div className={scss.subGame}>
        <Image src="/images/ps-plus/cool_img.svg" alt="Игры по подписке" width={20} height={20} />
        <p>Игры по подписке</p>
      </div>

      <div className={scss.console}>
        <h4>Консоль</h4>
        <div className={scss.console_btn}>
          {["PS4", "PS5"].map((console) => (
            <button
              key={console}
              className={selectedConsoles.includes(console) ? scss.active : ""}
              onClick={() => toggleSelection(console, setSelectedConsoles)}
            >
              {console}
            </button>
          ))}
        </div>
      </div>

      <div className={scss.level_subs}>
        <h4>Уровень подписки</h4>
        <div className={scss.levelSub_btn}>
          {["Essential", "Extra", "Deluxe"].map((level) => (
            <button
              key={level}
              className={selectedLevels.includes(level) ? scss.active : ""}
              onClick={() => toggleSelection(level, setSelectedLevels)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
