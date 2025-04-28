"use client";
import { FC, memo, useState, useCallback, useMemo } from "react";
import Image from "next/image";
import scss from "./PsPlusPage.module.scss";
import psImage from "../../../../../public/images/ps-plus/cool_img.svg";
import LeftContent from "./Left-content/LeftContent";
import RightContent from "./Right-content/RightContent";
import BottomContent from "./Bottom-content/BottomContent";
import { useSubsServicesQuery } from "@/redux/api/subs-data";
import { SUBS } from "@/redux/api/subs-data/types";

interface Period {
  id: number;
  months: number;
  price: string;
}

interface ITypesBlocks {
  data: SUBS.GetSubsServicesResponse | null;
  change_level: (level: string) => void;
  change_console: (console: string) => void;
  subs_level: string;
  selected_console: string;
  isFading: boolean;
}

const transformPeriods = (periods: any[]): Period[] => 
  periods.map((period, index) => ({
    id: period.id || index + 1,
    months: period.months,
    price: period.price
  }));

const getConsoleTypeId = (consoleName: string): number => {
  switch (consoleName) {
    case "PS5": return 1;
    case "PS4": return 2;
    case "PS3": return 3;
    default: return 1;
  }
};

const LeftBlock: FC<ITypesBlocks> = memo(({ data }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    {data?.map((el) => (
      <div key={el.id} className={scss.left_content}>
        <Image
          src={psImage}
          alt="PlayStation Plus логотип"
          height={300}
          width={800}
          priority={true}
          sizes="(max-width: 1220px) 100vw, 257px"  
        />
        <p>{el.choices_level}</p>
      </div>
    ))}
  </div>
));

LeftBlock.displayName = "LeftBlock";

const RightBlock: FC<ITypesBlocks> = memo(
  ({ data, change_level, change_console, subs_level, selected_console, isFading }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {data?.map((el) => (
        <div key={el.id} className={scss.right_content}>
          <div className={scss.block_content}>
            <LeftContent
              name={el.name}
              consoles={el.consoles}
              choices_level={["Essential", "Extra", "Deluxe"]}
              change_level={change_level}
              change_console={change_console}
              subs_level={subs_level}
              isFading={isFading}
            />
            <RightContent 
              periods={transformPeriods(el.periods)} 
              isFading={isFading} 
              subscriptionLevel={subs_level}
              selectedConsole={selected_console}
              subscriptionServiceId={el.id}
              consoleTypeId={getConsoleTypeId(selected_console)}
            />
          </div>
          <BottomContent contents={el.contents} isFading={isFading} />
        </div>
      ))}
    </div>
  )
);

RightBlock.displayName = "RightBlock";

const PsPlusPage = () => {
  const [subs_level, setSubsLevel] = useState<string>("Essential");
  const [selected_console, setSelectedConsole] = useState<string>("PS5");
  const [isFading, setIsFading] = useState<boolean>(false);

  const { data, isLoading } = useSubsServicesQuery();

  const handleChangeLevel = useCallback((level: string) => {
    if (level === subs_level) return;

    setIsFading(true);
    setTimeout(() => {
      setSubsLevel(level);
      setIsFading(false);
    }, 400); 
  }, [subs_level]);
  
  const handleChangeConsole = useCallback((console: string) => {
    setSelectedConsole(console);
  }, []);

  const filteredData = useMemo(() => 
    data?.filter((el) => el.choices_level === subs_level) || [],
  [data, subs_level]);

  if (isLoading || !data) {
    return <div>Загрузка...</div>;
  }

  return (
    <section className={scss.Main}>
      <div className="container">
        <div className={scss.content}>
          <h1>PlayStation Plus</h1>
          <h3>Выберите подходящую подписку</h3>

          <div className={scss.ps_block}>
            <div className={`${scss.left} ${isFading ? "fading" : ""}`}>
              <LeftBlock
                data={filteredData}
                change_level={handleChangeLevel}
                change_console={handleChangeConsole}
                subs_level={subs_level}
                selected_console={selected_console}
                isFading={isFading}
              />
            </div>
            <div>  
              <RightBlock
                data={filteredData}
                change_level={handleChangeLevel}
                change_console={handleChangeConsole}
                subs_level={subs_level}
                selected_console={selected_console}
                isFading={isFading}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PsPlusPage);
