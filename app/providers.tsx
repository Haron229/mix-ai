"use client";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Provider } from "react-redux";
import { AppStore, store } from "@/lib/redux/shared/store";
import { useRef } from "react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();
  const storeRef = useRef<AppStore>();

  if (!storeRef.current) {
    storeRef.current = store();
  }

  return (
    <NextUIProvider navigate={router.push}>
      <Provider store={storeRef.current}>
        <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
      </Provider>
    </NextUIProvider>
  );
}
