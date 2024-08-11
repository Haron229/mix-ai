"use client";
import DefaultHeader from "@/components/DefaultHeader";
import MainFooter from "@/components/MainFooter";
import PetMemorySection from "@/components/PetMemorySection";

const PetMemory = () => {
  return (
    <>
      <DefaultHeader lable={"Память AI-питомца"} />
      <PetMemorySection />
      <MainFooter />
    </>
  );
};

export default PetMemory;
