"use client";
import { Avatar, Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import notificationIcon from "@/public/notification.png";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

const DefaultHeader = ({ lable }: { lable: string }) => {
  return (
    <section className="h-[72px] sticky z-10 bg-foreground text-[#949494] drop-shadow-sm flex justify-between p-6">
      <div className="flex justify-center items-center gap-6">
        <Link href="/">
          <Button isIconOnly radius="full" size="sm" className="bg-[#232323]">
            <ChevronLeftIcon />
          </Button>
        </Link>
        <p>{lable}</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image alt="notification icon" src={notificationIcon} />
        <Link href="/profile">
          <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#DD8631] via-[#DD3CA3] to-[#3968CD] flex justify-center items-center">
            <Avatar showFallback src="https://images.unsplash.com/broken" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default DefaultHeader;
