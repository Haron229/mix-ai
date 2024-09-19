import DefaultHeader from "@/components/Home/DefaultHeader";
import MainFooter from "@/components/Home/MainFooter";
import PetMemorySection from "@/components/Memory/PetMemorySection";

const Memory = () => {
  return (
    <>
      <DefaultHeader lable={"Память AI-питомца"} />
      <PetMemorySection />
      <MainFooter />
    </>
  );
};

export default Memory;
