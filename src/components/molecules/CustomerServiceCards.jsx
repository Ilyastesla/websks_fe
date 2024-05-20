import React from "react";
import CustomerServiceCard from "../atoms/CustomerServiceCard";

export default function CustomerServiceCards() {
  const customerServices = [
    {
      title: "Homeschooling Kak Seto Pusat",
      avatarUrl: "/images/linktree/cs-1.png",
      redirectUrl:
        "https://api.whatsapp.com/send/?phone=%2B628119511845&text&type=phone_number&app_absent=0",
    },
    {
      title: "Kak Seto School",
      avatarUrl: "/images/linktree/cs-1.png",
      redirectUrl:
        "https://api.whatsapp.com/send/?phone=%2B628119511845&text&type=phone_number&app_absent=0",
    },
    {
      title: "Sekolah Khusus Kak Seto",
      avatarUrl: "/images/linktree/cs-1.png",
      redirectUrl:
        "https://api.whatsapp.com/send/?phone=%2B628119511845&text&type=phone_number&app_absent=0",
    },
    {
      title: "Kak Seto Learning Center",
      avatarUrl: "/images/linktree/cs-1.png",
      redirectUrl:
        "https://api.whatsapp.com/send/?phone=%2B628119511845&text&type=phone_number&app_absent=0",
    },
    {
      title: "Homeschooling Kak Seto Depok",
      avatarUrl: "/images/linktree/cs-2.png",
      redirectUrl:
        "https://api.whatsapp.com/send/?phone=%2B6281234514662&text&type=phone_number&app_absent=0",
    },
    {
      title: "Homeschooling Kak Seto Bekasi",
      avatarUrl: "/images/linktree/cs-3.png",
      redirectUrl:
        "https://api.whatsapp.com/send/?phone=%2B6281371122010&text&type=phone_number&app_absent=0",
    },
    {
      title: "Homeschooling Kak Seto Pekanbaru",
      avatarUrl: "/images/linktree/cs-4.png",
      redirectUrl:
        "https://api.whatsapp.com/send/?phone=%2B6282382386827&text&type=phone_number&app_absent=0",
    },
  ];
  console.log(customerServices);
  return (
    <div className="grid grid-cols-1 justify-center md:grid-cols-2 gap-10 mt-10">
      {customerServices.map((item, index) => {
        return (
          <CustomerServiceCard
            key={index}
            title={item?.title}
            avatarUrl={item?.avatarUrl}
            redirectUrl={item?.redirectUrl}
          />
        );
      })}
    </div>
  );
}
