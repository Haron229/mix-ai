"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useAppDispatch } from "@/lib/redux/shared/store";
import { Sections } from "@/lib/redux/models/app/app.slice";
import { changeSection } from "@/lib/redux/models/app/changeSection";

import notificationIcon from "@/public/notification.svg";
import cog from "@/public/cogIcon.svg";
import { Cross1Icon } from "@radix-ui/react-icons";

const ProfileHeader = () => {
  const dispatch = useAppDispatch();

  return (
    <section className="h-[72px] w-full fixed z-20 bg-foreground text-[#949494] drop-shadow-sm flex justify-between p-6">
      <div className="flex justify-center items-center gap-6">
        <Image alt="" src={cog} />
        <p>Настройки профиля</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image alt="notification icon" src={notificationIcon} />
        <Link href="/">
          <Button
            isIconOnly
            radius="full"
            size="md"
            className="bg-[#232323]"
            onClick={() => dispatch(changeSection(Sections.Main))}
          >
            <Cross1Icon />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default ProfileHeader;
