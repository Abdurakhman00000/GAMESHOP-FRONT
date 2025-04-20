// in this code ChatGPT don's use
"use client";
import React, { FC, useState } from "react";
import scss from "./LeftContent.module.scss";
import Image from "next/image";

interface IProps {
  name: string;
  consoles: number[];
  choices_level: string;
}

const LeftContent: FC<IProps> = ({ name, consoles, choices_level }) => {
  const [selectedConsole, setSelectedConsole] = useState<number | null>(null); // choice only one level
  const [selectedLevel, setSelectedLevel] = useState<string | null>(null); // choice only one level

  return (
    <>
      <div className={scss.content}>
        <h2>{name}</h2>
        <div className={scss.subGame}>
          <Image
            src="/images/ps-plus/cool_img.svg"
            alt="Игры по подписке"
            width={20}
            height={20}
          />
          <p>Игры по подписке</p>
        </div>

        {/* Select console */}
        <div className={scss.console}>
          <h4>Консоль</h4>
          <div className={scss.console_btn}>
            {consoles.map((console) => (
              <button
                key={console}
                className={selectedConsole === console ? scss.active : ""}
                onClick={() => setSelectedConsole(console)}
              >
                {console}
              </button>
            ))}
          </div>
        </div>

        {/* Select level */}
        <div className={scss.level_subs}>
          <h4>Уровень подписки</h4>
          <div className={scss.levelSub_btn}>
            <button
              className={selectedLevel === choices_level ? scss.active : ""}
              onClick={() => setSelectedLevel(choices_level)}
            >
              {choices_level}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
// in this code ChatGPT don's use
