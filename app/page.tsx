"use client";
import { useEffect, useMemo, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { ITelegramUser } from "@/lib/types";

import MainFooter from "@/components/MainFooter";
import MainHeader from "@/components/MainHeader";
import MainPetSection from "@/components/MainPetSection";

import Image from "next/image";

import bg_gradient from "@/public/bg.png";
import bg from "@/public/main_bg.png";
import { useAppDispatch } from "@/lib/redux/shared/store";
import { setCurrentUser } from "@/lib/redux/models/user/user.slice";

export default function Home() {
  const [webApp, setWebApp] = useState<typeof WebApp | null>(null);

  const dispatch = useAppDispatch();

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
        body: JSON.stringify(userData),
      });

      if (!res)
        console.log("Something wrong with user"); // need to redirect to special rout
      else dispatch(setCurrentUser(initData.user as ITelegramUser)); // should move this logic to api slice too
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

  return (
    <>
      <div className="absolute">
        <Image alt="" src={bg_gradient} className="absolute bottom-32" />
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
