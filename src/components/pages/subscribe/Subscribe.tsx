import React from "react";
import SubHeroPage from "./Sub-hero/SubHeroPage";
import PsPlusPage from "./PsPlus/PsPlusPage";
import HowToUsePage from "./HowToUse/HowToUsePage";
import PsPlusEssPage from "./PsPlusEss/PsPlusEssPage";
import SubFAQPage from "./Sub-FAQ/SubFAQPage";

const Subscribe = () => {
  return (
    <>
      <SubHeroPage />
      <HowToUsePage />
      <PsPlusEssPage/>
      <SubFAQPage/>
    </>
  );
};

export default Subscribe;
