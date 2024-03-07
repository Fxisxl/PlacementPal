import React from "react";
import CompCard from "./CompCard";

const companies = [
  {
    image:
      "https://media.glassdoor.com/sql/4138/accenture-squareLogo-1709650590794.png",
    name: "Accenture",
    website: "https://www.accenture.com/in-en/careers",
  },

  {
    image: "https://media.glassdoor.com/sql/11455434386/masabi.png",
    name: "Masabi",
    website: "https://www.masabi.com/",
  },

  {
    image:
      "https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png",
    name: "Google",
    website: "https://www.google.com/about/careers/applications/jobs/results",
  },

  {
    image:
      "https://media.glassdoor.com/sql/40772/meta-squareLogo-1636117276319.png",
    name: "Meta",
    website: "www.facebook.com",
  },

  {
    image:
      "https://media.glassdoor.com/sql/694833/jio-squarelogo-1554224362714.png",
    name: "Reliance Jio",
    website: "https://www.jio.com/",
  },

  {
    image:
      "https://media.glassdoor.com/sql/7927/infosys-squareLogo-1620208556721.png",

    name: "Infosys",
    website: "https://www.infosys.com/careers.html",
  },

  {
    image:
      "https://media.glassdoor.com/sql/327596/tata-technologies-squareLogo-1679998005346.png",

    name: "Tata Technologies",
    website: "https://www.tata.com/careers",
  },

  {
    image:
      "https://media.glassdoor.com/sql/8014/cognizant-technology-solutions-squareLogo-1651131366751.png",

    name: "Cognizant Teachnologies",
    website: "https://careers.cognizant.com/in/en",
  },

  {
    image:
      "https://media.glassdoor.com/sql/13461/tata-consultancy-services-squareLogo-1634801936555.png",

    name: "Tata Consultancy Services (TCS)",
    website: "https://www.tcs.com/careers",
  },

  {
    image:
      "https://media.glassdoor.com/sql/41782/larsen-and-toubro-squarelogo.png",

    name: "Larsen & Toubro (L&T)",
    website: "https://www.larsentoubro.com/corporate/careers/",
  },

  {
    image:
      "https://media.glassdoor.com/sql/1425/cisco-systems-squareLogo-1702924319691.png",

    name: "Cisco",
    website: "https://www.cisco.com/c/en/us/about/careers.html",
  },

  {
    image:
      "https://media.glassdoor.com/sql/226240/axis-bank-squareLogo-1631015171227.png",

    name: "Axis Bank",
    website: "https://www.axisbank.com/careers",
  },

  {
    image:
      "https://media.glassdoor.com/sql/9936/wipro-squareLogo-1670620181456.png",

    name: "Wipro Ltd",
    website: "https://careers.wipro.com/",
  },

  {
    image:
      "https://media.glassdoor.com/sql/512663/inventurus-squarelogo-1398180625831.png",

    name: "IKS Health",
    website: "https://www.ikshealth.com/careers/",
  },

  {
    image:
      "https://media.glassdoor.com/sql/1042683/media-net-squarelogo-1472553208576.png",

    name: "Media.net",
    website: "https://careers.media.net/",
  },

  {
    image:
      "https://media.glassdoor.com/sql/1264905/snowflake-squarelogo-1496388083859.png",

    name: "Snowflake",
    website: "https://careers.snowflake.com/us/en",
  },
];

function Companies() {
  return (
    <>
      <div className=" w-full h-fit bg-[#001e2b] border-b">
        <div className=" h-14 w-full bg-white flex justify-start items-center">
          <h1 className=" font-serif text-3xl ml-10">Companies : </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-14 mx-10">
          {companies.map((org, index) => (
            <CompCard key={index} company={org} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Companies;
