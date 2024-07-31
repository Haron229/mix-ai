"use client";
import { Avatar, Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import Image from "next/image";

import verification from "@/public/verificationIcon.svg";
import profile from "@/public/profileIcon.svg";
import email from "@/public/emailIcon.svg";
import phone from "@/public/phoneIcon.svg";
import subscription from "@/public/subscriptionIcon.svg";
import language from "@/public/languageIcon.svg";

interface ProfileProps {
  name: string;
}

const ProfileSection: React.FC<ProfileProps> = ({ name }) => {
  return (
    <section className="relative w-full h-auto px-8 py-5 text-[#C0C0C0] z-10">
      <div className="flex flex-row items-center gap-3 pb-5">
        <div className="w-[46px] h-[46px] rounded-full bg-gradient-to-br from-[#DD8631] via-[#DD3CA3] to-[#3968CD] flex justify-center items-center">
          <Avatar showFallback src="https://images.unsplash.com/broken" />
        </div>
        <p className="text-[18px] font-semibold">{name}</p>
        <Image alt="" src={verification} width={23} height={23} />
      </div>
      <div className="flex flex-col gap-5">
        <Card
          classNames={{
            base: "bg-[#1C1C1C] text-[#C0C0C0] rounded-[10px] shadow-none outline-0",
            header: "text-[16px] bg-[#060606] px-5 py-4 rounded-t-[10px]",
            body: "py-4",
          }}
        >
          <CardHeader>
            <p>Учетная запись</p>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-5 px-5">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Image alt="" src={profile} />
                    <p>Имя пользователя</p>
                  </div>
                  <p className="text-[12px] text-[#949494] font-medium">
                    @maydan
                  </p>
                </div>
                <Divider className="bg-[#2F2F2F]" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between">
                  <div className="flex gap-3 items-center">
                    <Image alt="" src={email} />
                    <p>Электронная почта</p>
                  </div>
                  <p className="text-[12px] text-[#949494] font-medium max-w-28 text-right">
                    donttouchegoista@gmail.com
                  </p>
                </div>
                <Divider className="bg-[#2F2F2F]" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Image alt="" src={phone} />
                    <p>Номер телефона</p>
                  </div>
                  <p className="text-[12px] text-[#949494] font-medium">
                    +7 702 438 36 24
                  </p>
                </div>
                <Divider className="bg-[#2F2F2F]" />
              </div>
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Image alt="" src={subscription} />
                    <p>Подписка</p>
                  </div>
                  <p className="text-[12px] text-[#949494] font-medium">
                    Активировать
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card
          classNames={{
            base: "bg-[#1C1C1C] text-[#C0C0C0] rounded-[10px] shadow-none outline-0",
            header: "text-[16px] bg-[#060606] px-5 py-4 rounded-t-[10px]",
            body: "py-4",
          }}
        >
          <CardHeader>
            <p>Приложение</p>
          </CardHeader>
          <CardBody>
            <div className="flex flex-col gap-5 px-5">
              <div className="flex flex-col gap-4 w-full">
                <div className="flex justify-between">
                  <div className="flex gap-3">
                    <Image alt="" src={language} />
                    <p>Язык</p>
                  </div>
                  <p className="text-[12px] text-[#949494] font-medium">
                    Русский
                  </p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
};

export default ProfileSection;
