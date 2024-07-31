"use client";
import Image from "next/image";
import { Progress } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

import mix from "@/public/mix.png";
import pet from "@/public/pet.png";
import cog from "@/public/cog.png";
import pencil from "@/public/pencil.png";
import earn from "@/public/Vector.png";
import soon from "@/public/soon.png";
import Link from "next/link";

const MainPetSection = () => {
  return (
    <section className="relative w-full h-auto px-5 py-2 text-white z-10">
      {/* MIX tokens message */}
      <div className="h-20 rounded-[16px] bg-black/30 flex justify-between items-center px-5">
        <p className="w-2/3">Скоро будет возможность зарабатывать токены MIX</p>
        <div className="flex justify-center items-center gap-2">
          <Image alt="" src={mix} className="w-10 h-10" />
          <span className="text-[25px]">0</span>
        </div>
      </div>

      {/* Level */}
      <div className="my-4 px-2">
        <div className="flex justify-between items-center">
          <span>Прыщь</span>
          <span>- ур.</span>
        </div>
        <Progress
          size="sm"
          value={25}
          isIndeterminate={true}
          classNames={{
            track: "bg-white/50",
            indicator:
              "bg-gradient-to-r from-[#DD872F] via-[#D42DC0]/70 to-[#4163CC]/70",
          }}
          className="mt-2"
        />
      </div>

      {/* Pet */}
      <div className="flex flex-col justify-center items-center gap-4 my-5">
        <p>Лютик</p>
        <Image alt="" src={pet} />
        <Button
          as={Link}
          href="/petSettings"
          className="block w-[120px] h-[38px] px-0 rounded-full outline outline-1 outline-secondary bg-background self-end"
        >
          <div className="flex items-center h-full">
            <Image
              alt=""
              src={cog}
              className="w-10 p-2 rounded-full bg-secondary"
            />
            <span className="text-[10px] font-semibold leading-3 text-[#C0C0C0] px-1">
              Настройка
              <br />
              AI-питомца
            </span>
          </div>
        </Button>
      </div>

      {/* Controls group */}
      <div className="grid grid-cols-2 gap-3">
        <Link href={"/petMemory"}>
          <Button className="flex justify-between items-center text-start bg-black/70 rounded-[16px] pr-3 pl-5 py-4 h-[68px] w-full">
            <p>
              Память
              <br />
              AI-питомца
            </p>
            <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
              <Image alt="" src={pencil} />
            </div>
          </Button>
        </Link>
        <div className="flex justify-between items-center bg-black/70 rounded-[16px] max-h-[68px]">
          <p className="flex items-center px-5">To Earn</p>
          <div className="flex flex-col items-end">
            <div className="flex items-center justify-center pt-2 pb-1">
              <span className="absolute text-[10px] font-medium">Soon</span>
              <Image alt="" src={soon} />
            </div>
            <div className="px-3 pb-2">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Image alt="" src={earn} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/70 rounded-[16px] col-span-2">
          <div className="flex flex-col items-center gap-8 pt-3">
            <p className="text-[#3C3C3C]">AI-Команда</p>
            <div className="absolute flex items-center justify-center self-end">
              <span className="absolute text-[10px] font-medium">Soon</span>
              <Image alt="" src={soon} />
            </div>
            <div className="w-full bg-background rounded-[16px] flex flex-row justify-evenly pb-8">
              <div className="text-[26px] text-[#3C3C3C] font-medium w-10 h-10 rounded-full outline outline-1 outline-[#686868] flex items-center justify-center relative bottom-2 bg-background">
                <span>+</span>
              </div>
              <div className="text-[26px] text-[#3C3C3C] font-medium w-10 h-10 rounded-full outline outline-1 outline-[#686868] flex items-center justify-center relative bottom-2 bg-background">
                <span>+</span>
              </div>
              <div className="text-[26px] text-[#3C3C3C] font-medium w-10 h-10 rounded-full outline outline-1 outline-[#686868] flex items-center justify-center relative bottom-2 bg-background">
                <span>+</span>
              </div>
              <div className="text-[26px] text-[#3C3C3C] font-medium w-10 h-10 rounded-full outline outline-1 outline-[#686868] flex items-center justify-center relative bottom-2 bg-background">
                <span>+</span>
              </div>
              <div className="text-[26px] text-[#3C3C3C] font-medium w-10 h-10 rounded-full outline outline-1 outline-[#686868] flex items-center justify-center relative bottom-2 bg-background">
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPetSection;
