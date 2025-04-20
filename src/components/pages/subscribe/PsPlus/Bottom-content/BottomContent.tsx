// BottomContent.tsx
"use client";
import { memo } from "react";
import Image from "next/image";
import scss from "./BottomContent.module.scss";

interface ContentItem {
  icon: string;
  title: string;
}

interface BottomContentProps {
  contents: ContentItem[];
}

const FeatureButton = memo(({ feature }: { feature: ContentItem }) => (
  <button type="button">
    <Image
      src={feature.icon}
      alt={feature.title}
      width={17}
      height={17}
      loading="lazy"
    />
    {feature.title}
  </button>
));

FeatureButton.displayName = "FeatureButton";

const BottomContent = ({ contents }: BottomContentProps) => {
  return (
    <div className={scss.content}>
      <h2>Что входит в подписку?</h2>
      <div className={scss.boxes}>
        {contents.map((feature, index) => (
          <FeatureButton key={index} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default memo(BottomContent);
