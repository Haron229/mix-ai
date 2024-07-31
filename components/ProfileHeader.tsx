"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

import notificationIcon from "@/public/notification.png";
import cog from "@/public/cog.png";
import { Cross1Icon } from "@radix-ui/react-icons";

const ProfileHeader = () => {
  return (
    <section className="h-[72px] sticky z-10 bg-foreground text-[#949494] drop-shadow-sm flex justify-between p-6">
      <div className="flex justify-center items-center gap-6">
			  <Image alt="" src={cog}/>
        <p>Настройки профиля</p>
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

export default ProfileHeader;
