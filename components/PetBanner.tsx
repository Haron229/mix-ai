"use client";
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { useAppDispatch } from "@/lib/redux/shared/store";

import pattern from "@/public/petcardpattern.svg";
import pet from "@/public/pet.png";
import cog from "@/public/cog.png";
import { Sections, setCurrentSection } from "@/lib/redux/models/app/app.slice";

const PetBanner = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="fixed bg-gradient-to-r from-[#424293] to-[#AA80C9] h-[100px] rounded-b-[32px]">
      <Image
        alt=""
        src={pattern}
        className="absolute h-[100px] rounded-b-[32px] object-cover object-[left_58%] mix-blend-multiply"
      />
      <div className="flex items-center gap-1 h-full px-8">
        <Image alt="" src={pet} className="absolute w-20 z-10" />
        <div className="flex flex-col bg-black/50 backdrop-blur-[2px] ml-8 pl-14 py-2 rounded-[13px]">
          <span className="text-[15px] font-semibold">Лютик</span>
          <span className="text-[10px] text-[#D6D6D6] font-medium">
            Универсальный помощник стартап компании MixAI
          </span>
        </div>
        <Button
          isIconOnly
          radius="full"
          className="bg-black/50 backdrop-blur-[2px]"
          onClick={() => dispatch(setCurrentSection(Sections.Settings))}
        >
          <Image alt="" src={cog} className="" />
        </Button>
      </div>
    </div>
  );
};

export default PetBanner;
