"use client";
import DefaultHeader from "@/components/DefaultHeader";
import PetSettingsSection from "@/components/PetSettingsSection";
import MainFooter from "@/components/MainFooter";

const PetSettings = () => {
  return (
    <>
      <DefaultHeader lable={"Настройка AI-питомца"} />
      <PetSettingsSection />
      <MainFooter />
    </>
  );
};

export default PetSettings;
