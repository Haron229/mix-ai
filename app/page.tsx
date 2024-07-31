
import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import MainPetSection from "@/components/MainPetSection";

import Image from "next/image";

import bg_gradient from "@/public/bg.png";
import bg from "@/public/main_bg.png";

export default function Home() {
  return (
    <>
      <div className="absolute">
        <Image alt="" src={bg_gradient} className="absolute bottom-32" />
        <Image
          alt=""
          src={bg}
          className="relative object-cover mix-blend-multiply"
        />
      </div>
      <MainHeader />
      <MainPetSection />
      <MainFooter />
    </>
  );
}
