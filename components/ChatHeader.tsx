"use client";
import { Button, Divider, Input, Avatar } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";

import notificationIcon from "@/public/notification.png";
import burger from "@/public/allchatsbtn.svg";
import newchat from "@/public/newchaticon.svg";
import {
  Cross1Icon,
  DotsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";

const ChatHeader = () => {
  return (
    <section className="fixed top-0 w-full h-[72px] z-20 bg-foreground text-[#949494] drop-shadow-sm flex justify-between p-6">
      <div className="flex justify-center items-center gap-6">
        <Sheet>
          <SheetTrigger className="w-8 h-8 bg-[#232323] rounded-full flex justify-center items-center">
            <Image alt="" src={burger} />
          </SheetTrigger>
          <SheetContent side={"left"} className="w-[354px]">
            <SheetHeader className="w-full h-[85px] p-6 bg-[#0D0D0D]">
              <Input
                placeholder="Поиск"
                startContent={<MagnifyingGlassIcon className="scale-150" />}
                classNames={{
                  base: "h-8",
                  input: "text-[15px] font-semibold",
                  inputWrapper:
                    "min-h-8 h-8 rounded-[5px] bg-[#1C1C1C] text-[#C0C0C0]",
                }}
              />
              <Button isIconOnly radius="full" className="bg-transparent">
                <Image
                  alt=""
                  src={newchat}
                  className="mt-1"
                  onClick={() => {}}
                />
              </Button>
            </SheetHeader>
            <div className="px-6 py-7">
              {/* Make it through map */}
              <section className="flex flex-col gap-3">
                <p className="text-[13px] text-[#949494] font-medium">
                  Сегодня
                </p>
                <div className="flex flex-col gap-4 text-[15px] text-white font-semibold">
                  <p>Напиши идеи для видео</p>
                  <p>Отчет по работе</p>
                </div>
                <Divider />
              </section>
            </div>
            <SheetFooter className="w-full h-[98px] p-6 bg-[#0D0D0D]">
              <div className="flex justify-start items-center gap-3">
                <Avatar
                  showFallback
                  src="https://images.unsplash.com/broken"
                  className="w-12 h-12"
                />
                <p className="text-[17px] font-semibold">Maydan Naymanov</p>
              </div>
              <Button isIconOnly radius="full" className="bg-transparent">
                <DotsHorizontalIcon className="scale-150 text-[#878787]" />
              </Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
        <p>Чат с AI-питомцем</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image alt="notification icon" src={notificationIcon} />
        <Link href="/">
          <Button isIconOnly radius="full" size="md" className="bg-[#232323]">
            <Cross1Icon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ChatHeader;
