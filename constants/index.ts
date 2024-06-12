import { title } from "process";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaConnectdevelop } from "react-icons/fa";
import { IoCloudUploadOutline } from "react-icons/io5";
import { GrCloudComputer } from "react-icons/gr";
import { MdLooksOne } from "react-icons/md";
import { MdLooksTwo } from "react-icons/md";
import { MdLooks3 } from "react-icons/md";
import { MdLooks4 } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { GiPouringChalice } from "react-icons/gi";
import { SiRedhatopenshift } from "react-icons/si";
import { FaCloud, FaCogs, FaDigitalOcean, FaLaptopCode, FaServer, FaSyncAlt, FaTrain } from 'react-icons/fa';
import { TbTransformFilled } from "react-icons/tb";
export const NavLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/',
    link: 'about',
  },
  {
    title: 'Services',
    path: '/services',
    link: 'services',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];
export const NavLinksSide = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/',
    link: 'about',
  },
  {
    title: 'Services',
    path: '/services',
    link: 'services',
  }
];

export const ServicesData = [
  {
    title: "Information Technology",
    description:
      "Benefit from our scalable solutions and leverage the power of the cloud with dedicated support from your personal consultant.",
    icon: GrCloudComputer,
  },
  {
    title: "Cloud Services",
    description:
      "We Offer Cloud Migration, Managed Services, Cloud Computing Training for GCP, AWS, and Azure, Linux, OpenShift, Automation",
    icon: IoCloudUploadOutline,
  },
  {
    title: "AWS Bootcamp",
    description:
      "Our intensive AWS Bootcamp equips you with the skills needed to become an AWS cloud professional.",
    icon: FaChalkboardTeacher,
  },
  {
    title: "Hackathon",
    description:
      "Join our exciting Hackathon to collaborate, innovate, and solve real-world challenges. Hone your skills and network with like-minded individuals.",
    icon: GiPouringChalice,
  }
];

export const Services = [
  {
    category: "Information Technology",
    description: "Our IT consulting services help businesses optimize their technology infrastructure, improve efficiency, and ensure robust security. From system integration to IT support, we provide comprehensive solutions tailored to your needs.",
    icon: FaLaptopCode
  },
  {
    category: "Digital Transformation",
    description: "Embrace the future with our digital transformation services. We guide you through the process of integrating digital technologies into all areas of your business, fundamentally changing how you operate and deliver value to your customers.",
    icon: TbTransformFilled
  },
];

export const CloudServices = [
      {
        title: "Migration",
        description: "Seamlessly transition your business to the cloud with our expert migration services. We ensure a smooth and efficient migration process, minimizing downtime and disruption.",
        icon: FaCloud
      },
      {
        title: "Managed Services",
        description: "Our managed cloud services provide ongoing support and management of your cloud environment, allowing you to focus on your core business while we handle the technical details.",
        icon: FaServer
      },
      {
        title: "Cloud Computing Training (GCP, AWS, and Azure)",
        description: "Equip your team with the skills they need to leverage cloud technologies effectively. We offer comprehensive training programs for Google Cloud Platform, AWS, and Azure.",
        icon: FaTrain
      },
      {
        title: "Linux",
        description: "Our Linux services include installation, configuration, and maintenance of Linux-based systems, ensuring they run smoothly and securely.",
        icon: FaCogs
      },
      {
        title: "OpenShift",
        description: "Utilize OpenShift to develop, deploy, and manage containerized applications with ease. Our experts provide the guidance and support you need to get the most out of this powerful platform.",
        icon: SiRedhatopenshift
      },
      {
        title: "Automation",
        description: "Streamline your operations and increase efficiency with our automation services. From process automation to infrastructure as code, we help you automate repetitive tasks and improve productivity.",
        icon: FaSyncAlt
      }
]

export const ProcessData = [
  {
    id: 1,
    title: "Consult",
    description:
      "We start by understanding your business needs and goals, and then we develop a tailored cloud strategy that aligns with your vision.",
    icon: MdLooksOne,
  },
  {
    id: 2,
    title: "Plan",
    description:
      "Our team of experts will create a detailed plan that outlines the steps needed to achieve your cloud transformation goals.",
    icon: MdLooksTwo,
  },
  {
    id: 3,
    title: "Implement",
    description:
      "We will work with you to implement the plan, ensuring a smooth transition to the cloud with minimal disruption to your business operations.",
    icon: MdLooks3,     
  },
  {
    id: 4,
    title: "Optimize",
    description:
      "Once your cloud infrastructure is up and running, we will continue to monitor and optimize it to ensure peak performance and efficiency.",
    icon: MdLooks4,  
  },
];

export const FooterIcons = [
  {
    icon: FaLinkedin,
    path: "/",
  },
  {
    icon: FaFacebookSquare,
    path: "/",
  },
  {
    icon: FaSquareXTwitter,
    path: "/",
  },
  {
    icon: FaSquareInstagram,
    path: "/",
  },
];


export const  FooterDetails1 = [
  {
    title: "Our Services",
    items: ["Cloud Consulting", "Cloud Migration", "Cloud Training", "Cloud Optimization"]
  },
]
const FooterDetails2 = [
  {
    title: "Contact Us",
    items:[
      {
        
      }
    ]
  },
]


export const ContactPageData = [
  {
    title: "Customer Support",
    description: "Our Customer team is availabe around clock  to address any concerns or queries you may have.",
  },
  {
    title: "Feedback and Suggestion" ,
    description: "We value your feedback and suggestions. Please feel free to share your thoughts with us.",
  }
]