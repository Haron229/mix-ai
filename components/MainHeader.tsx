"use client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@nextui-org/react";
import { useAppSelector } from "@/lib/redux/shared/store";
import { userSlice } from "@/lib/redux/models/user/user.slice";

import petIcon from "@/public/AI-pet-icon.png";
import notificationIcon from "@/public/notification.png";

const MainHeader = () => {
  const user = useAppSelector(userSlice.selectors.selectCurrentUser);

  return (
    <section className="h-[72px] w-full fixed z-20 bg-foreground text-[#949494] drop-shadow-sm flex justify-between p-6">
      <div className="flex justify-center items-center gap-6">
        <Image alt="" src={petIcon} />
        <p>Мой AI-питомец</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image alt="notification icon" src={notificationIcon} />
        <Link href="/profile">
          <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#DD8631] via-[#DD3CA3] to-[#3968CD] flex justify-center items-center">
            <Avatar
              showFallback
              src={user?.photo_url ?? "https://images.unsplash.com/broken"}
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default MainHeader;
