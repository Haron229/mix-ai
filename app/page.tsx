"use client";
import { useEffect, useMemo, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { ITelegramUser } from "@/lib/types";

import MainFooter from "@/components/Home/MainFooter";
import MainPetSection from "@/components/Home/MainPetSection";
import MainHeader from "@/components/Home/MainHeader";
import DefaultHeader from "@/components/Home/DefaultHeader";
import PetMemorySection from "@/components/Memory/PetMemorySection";
import MemoryRecordSection from "@/components/MemoryRecord/MemoryRecordSection";
import PetSettingsSection from "@/components/Memory/PetSettingsSection";
import Chat from "@/components/Chat/Chat";

import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import { setCurrentUser } from "@/lib/redux/models/user/user.slice";
import { appSlice, Sections } from "@/lib/redux/models/app/app.slice";
import { chatSlice } from "@/lib/redux/models/simpleChat/chat.slice";

import Image from "next/image";

import bg from "@/public/main_bg.png";
import bg_gradient from "@/public/bg.png";

export default function Home() {
  const [webApp, setWebApp] = useState<typeof WebApp | null>(null);
  const [renderSection, setRenderSection] = useState<JSX.Element>(<></>);

  const currentSection = useAppSelector(
    appSlice.selectors.selectCurrentSection
  );
  const messages = useAppSelector(chatSlice.selectors.selectMessages);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getRenderSection = (section: Sections) => {
      switch (section) {
        case Sections.Main:
          return (
            <>
              <div className="absolute">
                <Image
                  alt=""
                  src={bg_gradient}
                  className="absolute bottom-32"
                />
                <Image
                  alt=""
                  src={bg}
                  className="relative object-cover mix-blend-multiply"
                />
              </div>
              <MainHeader />
              <MainPetSection />
              <MainFooter />
            </>
          );
        case Sections.Memory:
          return (
            <>
              <DefaultHeader lable={"Память AI-питомца"} />
              <PetMemorySection />
              <MainFooter />
            </>
          );
        case Sections.NewMemoryRecord:
          return (
            <>
              <DefaultHeader lable="Без названия" />
              <MemoryRecordSection />
              <MainFooter />
            </>
          );
        case Sections.Chat:
          return <Chat />;
        // case Sections.Profile:
        //   return <></>;
        case Sections.Settings:
          return (
            <>
              <DefaultHeader lable={"Настройка AI-питомца"} />
              <PetSettingsSection />
              <MainFooter />
            </>
          );
        default:
          return (
            <>
              <div className="absolute">
                <Image
                  alt=""
                  src={bg_gradient}
                  className="absolute bottom-32"
                />
                <Image
                  alt=""
                  src={bg}
                  className="relative object-cover mix-blend-multiply"
                />
              </div>
              <MainHeader />
              <MainPetSection />
              <MainFooter />
            </>
          );
      }
    };

    setRenderSection(getRenderSection(currentSection));
  }, [currentSection]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (WebApp) {
        WebApp.ready();
        WebApp.expand();
        setWebApp(WebApp);
      }
    }
  }, []);

  const initData = useMemo(() => {
    return webApp
      ? {
          webApp,
          user: webApp.initDataUnsafe.user,
        }
      : {};
  }, [webApp]);

  useEffect(() => {
    const isUserExists = async (userData: ITelegramUser) => {
      const res = await fetch("/api/user/isUserExists", {
        method: "POST",
        body: JSON.stringify(userData),
      });

      if (!res) console.log("Something wrong with user"); // need to redirect to special rout
      dispatch(setCurrentUser(initData.user as ITelegramUser)); // should move this logic to api slice too
    };

    if (initData?.user) {
      const userData: ITelegramUser = {
        id: initData.user.id,
        first_name: initData.user.first_name,
        last_name: initData.user.last_name,
        username: initData.user.username,
        language_code: initData.user.language_code,
        is_premium: initData.user.is_premium,
        photo_url: initData.user.photo_url,
      };

      isUserExists(userData);
    }
  }, [initData]);

  return renderSection;
}
