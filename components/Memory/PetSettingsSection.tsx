import { Tabs, Tab, Input, Textarea, Badge } from "@nextui-org/react";
import Image from "next/image";

import soon from "../public/soon.png";
import petCard from "../public/PetSettingsImage.png";

const PetSettingsSection = () => {
  return (
    <section className="relative w-full h-auto px-5 py-4 pt-[88px] text-white z-10">
      <div className="flex flex-col justify-center">
        <Tabs
          disabledKeys={["identity", "skills"]}
          aria-label="Options"
          classNames={{
            tabList: "w-[315px] h-10 p-0 gap-0 bg-black/60",
            tab: "w-[105px] data-[disabled=true]:text-[#949494] data-[disabled=true]:opacity-100",
            tabContent:
              "text-[10px] font-semibold group-data-[selected=false]:text-[#949494] w-full",
            cursor: "dark:bg-transparent shadow-none",
          }}
          className="self-center"
        >
          <Tab key="profile" title="Профиль" className="pr-0">
            <div className="text-[#949494] text-[13px] font-medium">
              <Input
                label="Имя AI-питомца"
                labelPlacement="outside"
                classNames={{
                  label: "!text-[#949494] text-[13px] font-medium pl-3 ",
                  base: "pb-1",
                  inputWrapper:
                    "data-[hover=true]:bg-[#D9D9D9]/10 group-data-[focus=true]:bg-[#D9D9D9]/10 bg-[#D9D9D9]/10",
                  input: "bg-transparent",
                }}
              />
              <div className="pb-1">
                <p className="pt-5 pb-1 pl-3">Внешний вид AI-питомца</p>
                <Image alt="" src={petCard} />
              </div>
              <div className="">
                <p className="pt-5 pb-1 pl-3">
                  Краткое описание AI-питомца (необязательно)
                </p>
                <Textarea
                  placeholder="Опишите своего питомца"
                  classNames={{
                    inputWrapper:
                      "data-[hover=true]:bg-[#D9D9D9]/10 group-data-[focus=true]:bg-[#D9D9D9]/10 bg-[#D9D9D9]/10",
                    input: "bg-transparent",
                  }}
                />
              </div>
            </div>
          </Tab>
          <Tab
            key="identity"
            title={
              <Badge
                placement="top-right"
                classNames={{
                  badge: "bg-transparent border-none p-0 !text-[6px]",
                }}
                content={
                  <div className="relative flex items-center justify-center bottom-1 left-2">
                    <span className="absolute text-[6px] font-medium">
                      Soon
                    </span>
                    <Image alt="" src={soon} width={40} height={12} />
                  </div>
                }
              >
                <span>Личность</span>
              </Badge>
            }
            className="px-0 before:relative before:h-7 before:w-[2px] before:bg-gradient-to-b before:from-black before:via-[#89739A] before:to-black after:relative after:h-7 after:w-[2px] after:bg-gradient-to-b after:from-black after:via-[#89739A] after:to-black"
          >
            <div>Личность</div>
          </Tab>
          <Tab
            key="skills"
            title={
              <Badge
                placement="top-right"
                classNames={{
                  base: "w-full",
                  badge: "bg-transparent border-none p-0 !text-[6px]",
                }}
                content={
                  <div className="relative flex items-center justify-center bottom-1 right-1">
                    <span className="absolute text-[6px] font-medium">
                      Soon
                    </span>
                    <Image alt="" src={soon} width={40} height={12} />
                  </div>
                }
              >
                <span className="w-full">Навыки</span>
              </Badge>
            }
            className="pl-0"
          >
            <div>Навыки</div>
          </Tab>
        </Tabs>
      </div>
    </section>
  );
};

export default PetSettingsSection;
