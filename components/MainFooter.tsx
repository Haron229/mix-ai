"use client";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Badge,
  RadioGroup,
  Radio,
} from "@nextui-org/react";
import { ChevronUpIcon } from "@radix-ui/react-icons";
import Image from "next/image";

import mid from "@/public/mid_btn.png";
import burger from "@/public/burger.png";
import house from "@/public/house.png";
import soon from "../public/soon.png";
import InputBar from "./InputBar";

const MainFooter = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <section className="fixed bottom-0 w-full p-5 bg-background z-10">
      <div className="flex flex-col gap-5">
        <InputBar />
        <div className="flex justify-center items-center">
          <div className="absolute w-[220px] h-16 mr-1 mb-1 bg-black rounded-full" />
          <div className="absolute w-[220px] h-16 ml-1 mt-1 bg-[#BABABA]/25 rounded-full" />
          <Button
            isIconOnly
            radius="full"
            className="absolute h-[74px] w-[74px] z-10 bg-transparent"
          >
            <Image alt="" src={mid} />
          </Button>
          <ButtonGroup size="lg" className="bg-[#1A1A1A] rounded-full gap-7">
            <Button
              radius="full"
              className="bg-[#1A1A1A] h-16"
              onPress={onOpen}
            >
              <Image alt="" src={burger} />
            </Button>
            <Button radius="full" className="bg-[#1A1A1A] h-16">
              <Image alt="" src={house} />
            </Button>
          </ButtonGroup>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        backdrop="blur"
        classNames={{
          closeButton: "hidden",
          base: "rounded-b-none rounded-t-[40px] m-0 items-center bg-[#292929]",
          header: "py-8",
          body: "py-0 gap-5",
          footer: "py-8",
        }}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader>
                <ChevronUpIcon className="scale-[2]" />
              </ModalHeader>
              <ModalBody>
                <Badge
                  placement="top-right"
                  classNames={{ badge: "bg-transparent border-none p-0" }}
                  content={
                    <div className="flex items-center justify-center mt-5 mr-10">
                      <span className="absolute font-medium">Soon</span>
                      <Image alt="" src={soon} className="rounded-tr-full" />
                    </div>
                  }
                >
                  <Button
                    isDisabled
                    className="w-80 h-16 rounded-[40px] bg-[#1C1C1C] text-[18px] text-[#3C3C3C] font-semibold opacity-100"
                  >
                    Мои данные
                  </Button>
                </Badge>
                <Badge
                  placement="top-right"
                  classNames={{ badge: "bg-transparent border-none p-0" }}
                  content={
                    <div className="flex items-center justify-center mt-5 mr-10">
                      <span className="absolute font-medium">Soon</span>
                      <Image alt="" src={soon} className="rounded-tr-full" />
                    </div>
                  }
                >
                  <Button
                    isDisabled
                    className="w-80 h-16 rounded-[40px] bg-[#1C1C1C] text-[18px] text-[#3C3C3C] font-semibold opacity-100"
                  >
                    Моя аудитория
                  </Button>
                </Badge>
                <Badge
                  placement="top-right"
                  classNames={{ badge: "bg-transparent border-none p-0" }}
                  content={
                    <div className="flex items-center justify-center mt-5 mr-10">
                      <span className="absolute font-medium">Soon</span>
                      <Image alt="" src={soon} className="rounded-tr-full" />
                    </div>
                  }
                >
                  <Button
                    isDisabled
                    className="w-80 h-16 rounded-[40px] bg-[#1C1C1C] text-[18px] text-[#3C3C3C] font-semibold opacity-100"
                  >
                    Моя аналитика
                  </Button>
                </Badge>
              </ModalBody>
              <ModalFooter>
                <RadioGroup defaultValue="ru" orientation="horizontal">
                  <Radio
                    isDisabled
                    value="en"
                    classNames={{
                      wrapper: "hidden",
                      control: "hidden",
                      label:
                        "group-data-[selected=true]:underline text-[#CECECE]",
                    }}
                  >
                    En
                  </Radio>
                  <Radio
                    value="ru"
                    classNames={{
                      wrapper: "hidden",
                      control: "hidden",
                      label:
                        "group-data-[selected=true]:underline text-[#CECECE]",
                    }}
                  >
                    Ru
                  </Radio>
                </RadioGroup>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default MainFooter;
