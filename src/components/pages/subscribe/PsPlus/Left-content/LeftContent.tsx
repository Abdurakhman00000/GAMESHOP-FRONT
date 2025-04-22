// in this code ChatGPT don's use
"use client";
import React, { FC, useState } from "react";
import scss from "./LeftContent.module.scss";
import Image from "next/image";

interface IProps {
  name: string;
  consoles: number[];
  choices_level: string[];
  change_level: Function;
  subs_level: string;
  isFading: boolean;
}

const LeftContent: FC<IProps> = ({
  name,
  consoles,
  choices_level,
  change_level,
  subs_level,
  isFading,
}) => {
  const [selectedConsole, setSelectedConsole] = useState<string | null>(null);

  return (
    <>
      <div className={scss.content}>
        <h2 className={isFading ? "fading" : ""}>{name}</h2>
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
            {/* {consoles.map((console) => (
              <button
                key={console}
                className={selectedConsole === console ? scss.active : ""}
                onClick={() => setSelectedConsole(console)}
              >
                {console}
              </button>
            ))} */}
            <button
              className={selectedConsole === "PS4" ? scss.active : ""}
              onClick={() => setSelectedConsole("PS4")}
            >
              PS4
            </button>{" "}
            <button
              className={selectedConsole === "PS5" ? scss.active : ""}
              onClick={() => setSelectedConsole("PS5")}
            >
              PS5
            </button>
          </div>
        </div>

        {/* Select level */}
        <div className={scss.level_subs}>
          <h4>Уровень подписки</h4>
          <div className={scss.levelSub_btn}>
            {choices_level.map((level, idx) => (
              <button
                key={idx}
                className={subs_level === level ? scss.active : ""}
                onClick={() => {
                  change_level(level);
                }}
              >
                {level}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftContent;
// in this code ChatGPT doesn't use
