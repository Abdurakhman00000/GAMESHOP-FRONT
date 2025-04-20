"use client";
import { FC, memo } from "react";
import Image from "next/image";
import scss from "./PsPlusPage.module.scss";
import psImage from "../../../../../public/images/ps-plus/cool_img.svg";
import LeftContent from "./Left-content/LeftContent";
import RightContent from "./Right-content/RightContent";
import BottomContent from "./Bottom-content/BottomContent";
import { useSubsServicesQuery } from "@/redux/api/subs-data";
import { SUBS } from "@/redux/api/subs-data/types";

interface ITypesBlocks {
  data: SUBS.GetSubsServicesResponse;
}

const LeftBlock: FC<ITypesBlocks> = memo(({ data }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >
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
        <p>{el.name}</p>
      </div>
    ))}
  </div>
));

LeftBlock.displayName = "LeftBlock";

const RightBlock: FC<ITypesBlocks> = memo(({ data }) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
    }}
  >
    {data.map((el) => (
      <div key={el.id} className={scss.right_content}>
        <div className={scss.block_content}>
          <LeftContent
            name={el.name}
            consoles={el.consoles}
            choices_level={el.choices_level}
          />
          <RightContent periods={el.periods} />
        </div>
        <BottomContent contents={el.contents} />
      </div>
    ))}
  </div>
));

RightBlock.displayName = "RightBlock";

const PsPlusPage = () => {
  const { data, isLoading } = useSubsServicesQuery();

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
            <LeftBlock data={data} />
            <RightBlock data={data} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(PsPlusPage);
