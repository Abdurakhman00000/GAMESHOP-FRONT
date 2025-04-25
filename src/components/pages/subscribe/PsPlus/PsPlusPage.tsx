"use client";
import { FC, memo, useState } from "react";
import Image from "next/image";
import scss from "./PsPlusPage.module.scss";
import psImage from "../../../../../public/images/ps-plus/cool_img.svg";
import LeftContent from "./Left-content/LeftContent";
import RightContent from "./Right-content/RightContent";
import BottomContent from "./Bottom-content/BottomContent";
import { useSubsServicesQuery } from "@/redux/api/subs-data";
import { SUBS } from "@/redux/api/subs-data/types";

interface ITypesBlocks {
  data: SUBS.GetSubsServicesResponse | null;
  change_level: (level: string) => void;
  subs_level: string;
  isFading: boolean;
}

const LeftBlock: FC<ITypesBlocks> = memo(({ data }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    {data?.map((el) => (
      <div key={el.id} className={scss.left_content}>
        <Image
          src={psImage}
          alt="PlayStation Plus Essential логотип"
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
  ({ data, change_level, subs_level, isFading }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {data?.map((el) => (
        <div key={el.id} className={scss.right_content}>
          <div className={scss.block_content}>
            <LeftContent
              name={el.name}
              consoles={el.consoles}
              choices_level={["Essential", "Extra", "Deluxe"]}
              change_level={change_level}
              subs_level={subs_level}
              isFading={isFading}
            />
            <RightContent periods={el.periods} isFading={isFading} />
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
  const [isFading, setIsFading] = useState<boolean>(false);

  const { data, isLoading } = useSubsServicesQuery();

  if (isLoading || !data) {
    return <div>Загрузка...</div>;
  }

  const handleChangeLevel = (level: string) => {
    if (level === subs_level) return;

    setIsFading(true);

    setTimeout(() => {
      setSubsLevel(level);
      setIsFading(false);
    }, 400); 
  };

  const filteredData = data.filter((el) => el.choices_level === subs_level);

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
                subs_level={subs_level}
                isFading={isFading}
              />
            </div>
            <div>
              <RightBlock
                data={filteredData}
                change_level={handleChangeLevel}
                subs_level={subs_level}
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
