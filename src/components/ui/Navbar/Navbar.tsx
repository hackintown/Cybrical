"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationItems } from "./constant";
import { ChevronDownIcon, ChevronUpIcon, XIcon } from "lucide-react";
import {
  FaPhp,
  FaReact,
  FaNodeJs,
  FaPython,
  FaMagento,
  FaApple,
  FaWordpress,
} from "react-icons/fa";
import {
  SiShopify,
  SiAndroid,
  SiMongodb,
  SiExpress,
  SiAngular,
  SiNextdotjs,
  SiVuedotjs,
} from "react-icons/si";
import { FaFaceLaughSquint } from "react-icons/fa6";

const servicesData = [
  {
    title: "Web Development",
    href: "/web-development",
    description:
      "With impeccable precision through our web development services; marked by technical supremacy to create a robust two-way handshake.",
  },
  {
    title: "Agile Development",
    href: "/agile-development",
    description:
      "We are a leading web application development company that offers a fully functional…",
  },
  {
    title: "Cloud & DevOps",
    href: "/cloud-devops",
    description:
      "Transform how you use technology to achieve your business objectives…",
  },
  {
    title: "Application Development",
    href: "/app-development",
    description:
      "We are a leading web application development company that offers a fully functional…",
  },
  {
    title: "Mobile App Development",
    href: "/mbl-app-development",
    description:
      "Transform how you use technology to achieve your business objectives…",
  },
  {
    title: "Digital Marketing",
    href: "/digital-marketing",
    description:
      "With impeccable precision through our web development services; marked by technical supremacy to create a robust two-way handshake.",
  },
  {
    title: "Website Suport & Maintenance",
    href: "/website-maintenance",
    description:
      "We are a leading web application development company that offers a fully functional…",
  },
  {
    title: "Technology Audit And Consultancy",
    href: "/audit-consultancy",
    description:
      "Transform how you use technology to achieve your business objectives…",
  },
  {
    title: "Quality Assurance",
    href: "/quality-assurance",
    description:
      "Transform how you use technology to achieve your business objectives…",
  },
  {
    title: "About Us",
    href: "/about-us",
    description:
      "Transform how you use technology to achieve your business objectives…",
  },
  {
    title: "Careers",
    href: "/careers",
    description:
      "Transform how you use technology to achieve your business objectives…",
  },
  {
    title: "Hire Developer",
    href: "/hire-developers",
    description:
      "Transform how you use technology to achieve your business objectives…",
  },
];

const technologiesData = [
  {
    title: "PHP",
    name: "PHP Development",
    href: "/contact-us",
    icon: <FaPhp className="inline-block mr-2 size-5 text-indigo-500" />,
    description: "Server-side scripting for web development.",
  },
  {
    title: "React JS",
    name: "React JS",
    href: "/technologies/react",
    icon: <FaReact className="inline-block mr-2 size-5 text-blue-500" />,
    description: "Build dynamic and interactive user interfaces.",
  },
  {
    title: "Shopify",
    name: "Shopify Development",
    href: "/technologies/shopify",
    icon: <SiShopify className="inline-block mr-2 size-5 text-green-500" />,
    description: "E-commerce platform for online stores.",
  },
  {
    title: "Android",
    name: "Android Development",
    href: "/technologies/android",
    icon: <SiAndroid className="inline-block mr-2 size-5 text-green-700 " />,
    description: "Mobile app development for Android devices.",
  },
  {
    title: "Python",
    name: "Python Development",
    href: "/technologies/python",
    icon: <FaPython className="inline-block mr-2 size-5 text-yellow-500" />,
    description: "Versatile programming language for various applications.",
  },
  {
    title: "Magento",
    name: "Magento Development",
    href: "/technologies/magento",
    icon: <FaMagento className="inline-block mr-2 size-5 text-red-600" />,
    description: "E-commerce platform for building online stores.",
  },
  {
    title: "iOS",
    name: "iOS Development",
    href: "/technologies/ios",
    icon: <FaApple className="inline-block mr-2 size-5 text-black" />,
    description: "Mobile app development for iOS devices.",
  },
  {
    title: "MERN Stack",
    name: "MERN Stack",
    href: "/technologies/mern",
    icon: (
      <>
        <FaNodeJs className="inline-block mr-2 size-5 text-green-500" />
        <SiMongodb className="inline-block mr-2 size-5 text-green-400" />
        <SiExpress className="inline-block mr-2 size-5 text-gray-500" />
        <SiNextdotjs className="inline-block mr-2 size-5 text-black" />
      </>
    ),
    description:
      "Full-stack JavaScript development using MongoDB, Express, React, and Node.js.",
  },
  {
    title: "Flutter",
    name: "Flutter Development",
    href: "/technologies/flutter",
    icon: (
      <FaFaceLaughSquint className="inline-block mr-2 size-5 text-blue-500" />
    ),
    description: "UI toolkit for building natively compiled applications.",
  },
  {
    title: "Vue JS",
    name: "Vue JS",
    href: "/technologies/vue",
    icon: <SiVuedotjs className="inline-block mr-2 size-5 text-green-600" />,
    description: "Progressive JavaScript framework for building UIs.",
  },
  {
    title: "Node.js",
    name: "Node.js Development",
    href: "/technologies/nodejs",
    icon: <FaNodeJs className="inline-block mr-2 size-5 text-green-500" />,
    description: "JavaScript runtime built on Chrome's V8 engine.",
  },
  {
    title: "React Native",
    name: "React Native",
    href: "/technologies/react-native",
    icon: <FaReact className="inline-block mr-2 size-5 text-blue-500" />,
    description: "Build native mobile apps using React.",
  },
  {
    title: "WordPress",
    name: "WordPress Development",
    href: "/technologies/wordpress",
    icon: <FaWordpress className="inline-block mr-2 size-5 text-blue-900" />,
    description: "Content management system for building websites.",
  },
  {
    title: "Angular",
    name: "Angular Development",
    href: "/technologies/angular",
    icon: <SiAngular className="inline-block mr-2 size-5 text-red-600" />,
    description: "Platform for building single-page client applications.",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // For tracking active submenus

  const toggleMenu = (menu: string) => {
    if (activeMenu === menu) {
      setActiveMenu(null); // Close the menu if already open
    } else {
      setActiveMenu(menu); // Open the selected menu
    }
  };
  const handleCloseSidebar = () => {
    setIsOpen(false); // Close sidebar when a link is clicked
  };
  return (
    <nav className="bg-white border-b-gray-200 shadow-md relative">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            height={100}
            width={120}
            alt="Logo"
            className="h-9 mr-3"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:block">
          <NavigationMenu
            style={{
              zIndex: 1000,
            }}
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent className="flex flex-row">
                  <div className="w-min">
                    <NavigationMenuLink asChild>
                      <Link
                        className="flex h-full w-full select-none flex-col justify-start rounded-md rounded-r-none border-r border-r-gray-200 p-6 no-underline outline-none focus:shadow-md"
                        href="/"
                      >
                        <div className="text-[#13182C] text-[25px] font-bold mb-4">
                          Custom software development services
                        </div>
                        <Button className="h-10 rounded-lg">
                          Start a Project
                        </Button>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                  <ul className="grid w-[400px] gap-2 p-1 md:w-[500px] md:grid-cols-3 lg:w-[600px] xl:w-[700px]">
                    {servicesData.map((service) => (
                      <ListItem
                        key={service.title}
                        title={service.title}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Technologies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[800px]">
                    {technologiesData.map((tech, index) => (
                      <ListItem
                        key={index}
                        title={tech.title}
                        name={tech.name}
                        href={tech.href}
                        icon={tech.icon}
                      >
                        {tech.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/our-work" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base",
                      "hover:text-black"
                    )}
                  >
                    Work
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Company
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {NavigationItems.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/hire-developers" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={cn(
                      navigationMenuTriggerStyle(),
                      "text-base",
                      "hover:text-black"
                    )}
                  >
                    Hire Developer
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link href="/contact-us" passHref>
            <Button>Start a Project</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-green-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-white z-50 flex flex-col px-4 py-6"
          >
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-bold">Menu</span>
              <button onClick={() => setIsOpen(false)}>
                <XIcon className="w-6 h-6 text-green-600" />
              </button>
            </div>

            {/* Services Menu */}
            <div>
              <button
                className="w-full flex items-center justify-between text-left text-foreground py-2"
                onClick={() => toggleMenu("services")}
              >
                <span>Services</span>
                <motion.div
                  animate={{
                    rotate: activeMenu === "services" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-green-600" />
                </motion.div>
              </button>
              {activeMenu === "services" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4"
                >
                  <Link
                    href="/web-development"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/agile-development"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Agile Development
                  </Link>
                  <Link
                    href="/cloud-devops"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Cloud & DevOps
                  </Link>
                  <Link
                    href="/app-development"
                    onClick={handleCloseSidebar}
                    className="block py-2"
                  >
                    Application Development
                  </Link>
                </motion.div>
              )}
            </div>

            {/* Technologies Menu */}
            <div>
              <button
                className="w-full flex items-center justify-between text-left text-foreground py-2"
                onClick={() => toggleMenu("technologies")}
              >
                <span>Technologies</span>
                <motion.div
                  animate={{
                    rotate: activeMenu === "technologies" ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDownIcon className="h-6 w-6 text-green-600" />
                </motion.div>
              </button>
              {activeMenu === "technologies" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4"
                >
                  {NavigationItems.map((item) => (
                    <Link
                      key={item.title}
                      href={item.href}
                      className="block py-2"
                      onClick={handleCloseSidebar}
                    >
                      {item.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Static Links */}
            <Link
              href="/work"
              onClick={handleCloseSidebar}
              className="block py-2 text-foreground"
            >
              Work
            </Link>
            <Link
              href="/company"
              onClick={handleCloseSidebar}
              className="block py-2 text-foreground"
            >
              Company
            </Link>
            <Link
              href="/hire-developer"
              onClick={handleCloseSidebar}
              className="block py-2 text-foreground"
            >
              Hire Developer
            </Link>

            {/* Mobile Button */}
            <div className="mt-4">
              <Button>Start a Project</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

interface ListItemProps extends React.ComponentPropsWithoutRef<"a"> {
  title: string;
  name: string;
  href: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, name, children, icon, href, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            ref={ref}
            href="href"
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors  hover:text-primary",
              className
            )}
            {...props}
          >
            <div className="text-normal font-medium leading-none">{title}</div>
            <div className="text-sm text-muted-foreground">
              <span>{icon} </span> {name}
            </div>

            <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          </Link>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = "ListItem";
