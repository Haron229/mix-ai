"use client";
import { useEffect, useMemo, useState } from "react";
import WebApp from "@twa-dev/sdk";
import { ITelegramUser } from "@/lib/types";

import Main from "@/components/Home/Main";
import Memory from "@/components/Memory/Memory";
import MemoryRecord from "@/components/MemoryRecord/MemoryRecord";
import Chat from "@/components/Chat/Chat";
import Settings from "@/components/Settings/Settings";

import { useAppDispatch, useAppSelector } from "@/lib/redux/shared/store";
import { setCurrentUser } from "@/lib/redux/models/user/user.slice";
import {
  appSlice,
  Sections,
  setPlatform,
} from "@/lib/redux/models/app/app.slice";
import Profile from "@/components/Profile/Profile";

export default function Home() {
  const [webApp, setWebApp] = useState<typeof WebApp | null>(null);
  const [renderSection, setRenderSection] = useState<JSX.Element>(<></>);

  const currentSection = useAppSelector(
    appSlice.selectors.selectCurrentSection
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getRenderSection = (section: Sections) => {
      switch (section) {
        case Sections.Main:
          return <Main />;
        case Sections.Memory:
          return <Memory />;
        case Sections.MemoryRecord:
          return <MemoryRecord />;
        case Sections.Chat:
          return <Chat />;
        case Sections.Profile:
          return <Profile />;
        case Sections.Settings:
          return <Settings />;
        default:
          return <Main />;
      }
    };

    setRenderSection(getRenderSection(currentSection));
  }, [currentSection]);

  useEffect(() => {
    const getOS = (userAgent: string) => {
      if (userAgent.includes("Windows")) return "Windows";
      if (userAgent.includes("iPhone")) return "iOS";
      if (userAgent.includes("Android")) return "Android";

      return "Unknown";
    };

    if (typeof window !== "undefined") {
      if (WebApp) {
        WebApp.ready();
        WebApp.expand();
        setWebApp(WebApp);
      }

      const userAgent = navigator.userAgent;
      
      dispatch(setPlatform(getOS(userAgent)));
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
