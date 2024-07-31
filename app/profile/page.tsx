"use client";

import ProfileHeader from "@/components/ProfileHeader";
import ProfileSection from "@/components/ProfileSection";

const test = {
	name: "Maydan Naymanov",
}

const Profile = () => {
  return (
    <>
      <ProfileHeader />
      <ProfileSection name={test.name} />
    </>
  );
};

export default Profile;
