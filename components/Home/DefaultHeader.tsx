"use client";
import { Avatar, Button } from "@nextui-org/react";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import { userSlice } from "@/lib/redux/models/user/user.slice";
import {
  reducePreviousSection,
  Sections,
  setCurrentSection,
} from "@/lib/redux/models/app/app.slice";

import { ChevronLeftIcon } from "@radix-ui/react-icons";
import notificationIcon from "@/public/notification.svg";

const DefaultHeader = ({ lable }: { lable: string }) => {
  const user = useAppSelector(userSlice.selectors.selectCurrentUser);
  const dispatch = useAppDispatch();

  return (
    <section className="h-[72px] w-full fixed z-20 bg-foreground text-[#949494] drop-shadow-sm flex justify-between p-6">
      <div className="flex justify-center items-center gap-6">
        <Button
          isIconOnly
          radius="full"
          size="sm"
          className="bg-[#232323]"
          onClick={() => dispatch(reducePreviousSection())}
        >
          <ChevronLeftIcon className="scale-150" />
        </Button>
        <p>{lable}</p>
      </div>
      <div className="flex justify-center items-center gap-3">
        <Image alt="notification icon" src={notificationIcon} />
        <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#DD8631] via-[#DD3CA3] to-[#3968CD] flex justify-center items-center">
          <Button
            isIconOnly
            radius="full"
            onClick={() => dispatch(setCurrentSection(Sections.Profile))}
          >
            <Avatar
              src={user?.photo_url ?? "/profile.svg"}
              classNames={{ img: "object-none", base: "w-[44px] h-[44px]" }}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DefaultHeader;
