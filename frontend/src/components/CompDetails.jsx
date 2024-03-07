import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const CompDetails = () => {
  const params = useParams();
  const { name } = params;
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const data = [
    {
      url: "https://www.glassdoor.co.in/Reviews/Accenture-Reviews-E4138.htm",
      image:
        "https://media.glassdoor.com/sql/4138/accenture-squareLogo-1709650590794.png",
      location: "Mumbai",
      name: "Accenture",
      description:
        "Accenture is a global professional services company that helps businesses, governments, and other organizations. They offer a variety of services and solutions in strategy, consulting, digital, technology, and operations.",
      website: "https://www.accenture.com/in-en/careers",
      Year: 2020,
      industry: "Application Dev",
      Date: "5th June 2024",
      "Technologies ": "MERN Stack , Web 3 ,Web RTC , Data Science",
    },

    {
      url: "https://www.glassdoor.co.in/Overview/Working-at-Masabi-EI_IE1145386.11,17.htm",
      image: "https://media.glassdoor.com/sql/11455434386/masabi.png",
      location: "London, United Kingdom",
      name: "Masabi",
      description:
        "At Masabi, we are helping to make cities better places to live, work and visit.",
      website: "https://www.masabi.com/",
      year: 2001,
      industry: "Internet & Web Services",
      Date: "5th June 2024",
      Technologies: "Web Based Product",
    },

    {
      url: "https://www.glassdoor.co.in/Overview/Working-at-Google-EI_IE9079.11,17.htm",
      image:
        "https://media.glassdoor.com/sql/9079/google-squarelogo-1441130773284.png",
      location: "Bangalore, India",
      name: "Google",
      description:
        "Google is a multinational technology company known for its search engine, advertising services, cloud computing, productivity tools, and hardware products. year in 1998, Google's mission is to organize the world's information and make it accessible and useful. With a focus on innovation and sustainability, Google continues to be a leader in the tech industry, headquartered in Mountain View, California.",
      website: "https://www.google.com/about/careers/applications/jobs/results",
      year: 1998,
      industry: "Product Based",
      Date: "6th June 2024",
      Technologies: "Product Based",
    },

    {
      url: "https://www.glassdoo.co.in/Reviews/Meta-Reviews-E40772.htm",
      image:
        "https://media.glassdoor.com/sql/40772/meta-squareLogo-1636117276319.png",
      location: "Hyderabada, India",
      name: "Meta",
      description:
        "Meta is a technology company that focuses on social networking services and products. Formerly known as Facebook, the company was year by Mark Zuckerberg and his college roommates in 2004. Meta's platforms, including Facebook, Instagram, WhatsApp, and Messenger, connect billions of people worldwide. The company's mission is to give people the power to build community and bring the world closer together through meaningful interactions. Headquarters are located in Menlo Park, California.",
      website: "",
      year: 2004,
      industry: "Product Based",
      Date: "9th June 2024",
      Technologies: "Product Based",
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Jio-Reviews-E694833.htm",
      image:
        "https://media.glassdoor.com/sql/694833/jio-squarelogo-1554224362714.png",
      location: "Mumbai, India",
      name: "Reliance Jio",
      description:
        "Reliance Jio Infocomm Limited, commonly known as Jio, is an Indian telecommunications company and a subsidiary of Reliance Industries. It offers 4G and 5G services, including voice over LTE (VoLTE), high-speed internet, digital services, and more. Jio has played a significant role in revolutionizing the Indian telecom sector by offering affordable data plans and widespread connectivity.",
      website: "https://www.jio.com/",
      year: 2016,
      industry: "Telecommunications",
      Date: "11th June 2024",
      Technologies: ["4G", "5G", "VoLTE", "Fiber Optics", "IoT"],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Infosys-Reviews-E7927.htm",
      image:
        "https://media.glassdoor.com/sql/7927/infosys-squareLogo-1620208556721.png",
      location: "Bangalore, India",
      name: "Infosys",
      description:
        "Infosys is a global leader in consulting, technology, and outsourcing solutions. Headquartered in Bangalore, India, it provides a wide range of services including application development, maintenance, and system integration. Infosys is known for its innovative use of technologies such as artificial intelligence, machine learning, blockchain, and cloud computing to help clients navigate their digital transformation journeys.",
      website: "https://www.infosys.com/careers.html",
      year: 1981,
      industry: "Information Technology and Services",
      Date: "12th June 2024",
      Technologies: [
        "Artificial Intelligence",
        "Machine Learning",
        "Blockchain",
        "Cloud Computing",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Overview/Working-at-Tata-Technologies-EI_IE327596.11,28.htm",
      image:
        "https://media.glassdoor.com/sql/327596/tata-technologies-squareLogo-1679998005346.png",
      location: "Pune, India",
      name: "Tata Technologies",
      description:
        "Tata Motors Limited is a leading global automobile manufacturer headquartered in Mumbai, India. The company produces a wide range of vehicles, including cars, utility vehicles, trucks, buses, and electric vehicles. Known for its innovation and commitment to sustainability, Tata Motors has a strong presence in both domestic and international markets. Some of its popular models include the Tata Nano, Tata Nexon, and Tata Harrier.",
      website: "https://www.tata.com/careers",
      year: 1989,
      industry: "Automotive",
      Date: "15th June 2024",
      Technologies: "Tech Based",
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Cognizant-Technology-Solutions-Reviews-E8014.htm",
      image:
        "https://media.glassdoor.com/sql/8014/cognizant-technology-solutions-squareLogo-1651131366751.png",
      location: "Chennai, India",
      name: "Cognizant Teachnologies",
      description:
        "Cognizant is a multinational corporation providing information technology, consulting, and business process outsourcing services. Headquartered in Teaneck, New Jersey, USA, the company operates in various industries such as banking, healthcare, manufacturing, and more. Cognizant is known for its expertise in digital transformation, helping clients navigate the digital age through innovative solutions and services.",
      website: "https://careers.cognizant.com/in/en",
      year: 1992,
      industry: "Information Technology and Services",
      Date: "15th June 2024",
      Technologies: [
        "Consulting",
        "Digital Transformation",
        "IT Services",
        "Outsourcing",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Tata-Consultancy-Services-Reviews-E13461.htm",
      image:
        "https://media.glassdoor.com/sql/13461/tata-consultancy-services-squareLogo-1634801936555.png",
      location: "Mumbai, India",
      name: "Tata Consultancy Services (TCS)",
      description:
        "Tata Consultancy Services (TCS) is a leading global IT services, consulting, and business solutions organization. Headquartered in Mumbai, India, TCS operates in 46 countries and serves clients across various industries including banking, finance, healthcare, retail, and more. The company is known for its expertise in digital technologies, cloud computing, analytics, and AI. TCS helps businesses navigate their digital transformation journeys with innovative solutions and services.",
      website: "https://www.tcs.com/careers",
      year: 1968,
      industry: "Information Technology and Services",
      Date: "17th June 2024",
      Technologies: [
        "Consulting",
        "Digital Transformation",
        "IT Services",
        "Business Solutions",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Larsen-and-Toubro-Reviews-E41782.htm",
      image:
        "https://media.glassdoor.com/sql/41782/larsen-and-toubro-squarelogo.png",
      location: "Mumbai, India",
      name: "Larsen & Toubro (L&T)",
      description:
        "Larsen & Toubro (L&T) is a multinational conglomerate headquartered in Mumbai, India. The company operates in engineering, construction, manufacturing, and financial services sectors. L&T is known for its expertise in heavy equipment and construction machinery, offering a wide range of products and services. With a history dating back to 1938, L&T has played a significant role in India's infrastructure development.",
      website: "https://www.larsentoubro.com/corporate/careers/",
      year: 1938,
      industry: "Engineering and Construction",
      Date: "20th June 2024",
      Technologies: [
        "5G, Artificial Intelligence, Collaborative Robots, Digital Factory, and Autonomous Transport",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Cisco-Systems-Bangalore-Reviews-EI_IE1425.0,13_IL.14,23_IM1091.htm?filter.iso3Language=eng",
      image:
        "https://media.glassdoor.com/sql/1425/cisco-systems-squareLogo-1702924319691.png",
      location: "Bangalore, India",
      name: "Cisco",
      description:
        "Cisco is a global leader in networking technology and IT infrastructure solutions. Headquartered in San Jose, California, USA, Cisco designs, manufactures, and sells networking equipment and provides a range of related services. The company's products include routers, switches, security solutions, and collaboration tools used by businesses and organizations worldwide. Cisco is also known for its expertise in networking, cybersecurity, cloud services, and Internet of Things (IoT) technologies.",
      website: "https://www.cisco.com/c/en/us/about/careers.html",
      year: 1984,
      industry: "Information Technology and Networking",
      Date: "22rd June 2024",
      Technologies: [
        "Networking",
        "Cybersecurity",
        "Cloud Services",
        "Internet of Things (IoT)",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Axis-Bank-Reviews-E226240.htm",
      image:
        "https://media.glassdoor.com/sql/226240/axis-bank-squareLogo-1631015171227.png",
      location: "Bangalore, India",
      name: "Axis Bank",
      description:
        "Axis Bank is one of the leading private sector banks in India, offering a wide range of financial products and services. Headquartered in Mumbai, Axis Bank serves both retail and corporate customers with services including retail banking, corporate banking, wealth management, and digital banking solutions. With a strong focus on innovation and customer service, Axis Bank has established itself as a trusted financial institution in India.",
      website: "https://www.axisbank.com/careers",
      year: 1993,
      industry: "Banking and Financial Services",
      Date: "24th June 2024",
      Technologies: ["HTML5 , jQuery , Google Analytics "],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Wipro-Reviews-E9936.htm",
      image:
        "https://media.glassdoor.com/sql/9936/wipro-squareLogo-1670620181456.png",
      location: "Bangalore, India",
      name: "Wipro Ltd",
      description:
        "Wipro Limited is a leading global information technology, consulting, and business process services company. Headquartered in Bangalore, India, Wipro provides a wide range of services including IT consulting, business process outsourcing, digital transformation, and cloud services to clients across various industries. With a history dating back to 1945, Wipro has established itself as a trusted partner for businesses worldwide, helping them navigate the digital age with innovative solutions.",
      website: "https://careers.wipro.com/",
      year: 1945,
      industry: "Information Technology and Services",
      Date: "24th June 2024",
      Technologies: [
        "IT Consulting",
        "Business Process Outsourcing",
        "Digital Transformation",
        "Cloud Services",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Overview/Working-at-IKS-Health-EI_IE512663.11,21.htm",
      image:
        "https://media.glassdoor.com/sql/512663/inventurus-squarelogo-1398180625831.png",
      location: "Bangalore, India",
      name: "IKS Health",
      description:
        "IKS Health is a leading healthcare services and technology company based in Burr Ridge, Illinois, USA. The company specializes in providing revenue cycle management, practice management, healthcare IT solutions, and telemedicine services to healthcare providers. With a focus on improving operational efficiency and patient care, IKS Health offers innovative solutions tailored to the needs of medical practices and healthcare organizations.",
      website: "https://www.ikshealth.com/careers/",
      year: 2007,
      industry: "Healthcare Services and Technology",
      Date: "26th June 2024",
      Technologies: [
        "Revenue Cycle Management",
        "Practice Management",
        "Healthcare IT Solutions",
        "Telemedicine",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Media-net-Reviews-E1042683.htm",
      image:
        "https://media.glassdoor.com/sql/1042683/media-net-squarelogo-1472553208576.png",
      location: "Mumbai, India",
      name: "Media.net",
      description:
        "Media.net is a leading global advertising technology company with headquarters in Dubai, UAE, and New York City, USA. The company specializes in providing contextual advertising solutions, including native ads, display ads, and mobile ads. Media.net's technology helps publishers maximize their revenue by delivering targeted and relevant ads to their audiences. With a focus on innovation and customer satisfaction, Media.net has established itself as a trusted partner for publishers worldwide.",
      website: "https://careers.media.net/",
      year: 2010,
      industry: "Advertising Technology",
      Date: "30th June 2024",
      Technologies: [
        "Contextual Advertising",
        "Native Ads",
        "Display Ads",
        "Mobile Ads",
      ],
    },

    {
      url: "https://www.glassdoor.co.in/Reviews/Snowflake-Pune-Reviews-EI_IE1264905.0,9_IL.10,14_IM1072.htm",
      image:
        "https://media.glassdoor.com/sql/1264905/snowflake-squarelogo-1496388083859.png",
      location: "Pune, India",
      name: "Snowflake",
      description:
        "Snowflake is a cloud data platform company headquartered in San Mateo, California, USA. The company provides a data warehouse as a service, enabling organizations to store and analyze large amounts of data in the cloud. Snowflake's platform offers features such as data lakes, data engineering, and data sharing, allowing businesses to derive insights and make data-driven decisions. Known for its scalability, performance, and ease of use, Snowflake has become a popular choice for modern data analytics and processing.",
      website: "https://careers.snowflake.com/us/en",
      year: 2012,
      industry: "Cloud Data Platform",
      Date: "31st June 2024",
      Technologies: [
        "Data Warehousing",
        "Data Lakes",
        "Data Engineering",
        "Data Sharing",
      ],
    },
  ];

  const company = data.find((company) => company.name === name);

  return (
    <div className="container">
      <div className="bg-[#001e2b] shadow-md rounded px-8 py-6 h-[90vh] w-auto">
        <h2 className="text-3xl font-semibold mb-7 ml-28 text-white">{name}</h2>
        <div className="flex items-center mb-4">
          <img
            src={company.image}
            alt={company.name}
            className="rounded-full w-[300px] h-[300px] mr-36 ml-7"
          />
          <p className="text-[#858f93] ml-7">{company.description}</p>
        </div>

        <div className="justify-between flex mt-24 text-white">
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-white">{company.location}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Website</h3>
            <a
              href={company.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {company.name}
            </a>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">URL</h3>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Glassdoor
            </a>
          </div>
          <h3 className="text-xl font-semibold mb-4">
            Since Year: <b>{company.year}</b>
          </h3>
          <h3 className="text-xl font-semibold mb-4">
            Industry: {company.industry}
          </h3>
          <h3 className="text-xl font-semibold mb-4">
            Date of Arrival: <b>{company.Date}</b>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CompDetails;
