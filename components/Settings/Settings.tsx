import DefaultHeader from "@/components/Home/DefaultHeader";
import MainFooter from "@/components/Home/MainFooter";
import PetSettingsSection from "@/components/Settings/PetSettingsSection";

const Settings = () => {
  return (
    <>
      <DefaultHeader lable={"Настройка AI-питомца"} />
      <PetSettingsSection />
      <MainFooter />
    </>
  );
};

export default Settings;
