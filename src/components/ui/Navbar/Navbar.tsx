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
  FaReact,
  FaPhp,
  FaWordpress,
  FaNodeJs,
  FaDatabase,
  FaPython,
  FaMagento,
  FaApple,
} from "react-icons/fa"; // Example icons for React, PHP, WordPress, Node.js
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiGraphql,
  SiAngular,
  SiShopify,
  SiAndroid,
  SiVuedotjs,
} from "react-icons/si";
import { FaFaceLaughSquint } from "react-icons/fa6";

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
                    <ListItem href="/web-development" title="Web Development">
                      With impeccable precision through our web development
                      services; marked by technical supremacy to create a robust
                      two-way handshake.
                    </ListItem>
                    <ListItem
                      href="/agile-development"
                      title="Agile Development"
                    >
                      We are a leading web application development company that
                      offers a fully functional…
                    </ListItem>
                    <ListItem href="/cloud-devops" title="Cloud & DevOps">
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem
                      href="/app-development"
                      title="Application Development"
                    >
                      We are a leading web application development company that
                      offers a fully functional…
                    </ListItem>
                    <ListItem
                      href="/mbl-app-development"
                      title="Mobile App Development"
                    >
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem
                      href="/digital-marketing"
                      title="Digital Marketing"
                    >
                      With impeccable precision through our web development
                      services; marked by technical supremacy to create a robust
                      two-way handshake.
                    </ListItem>
                    <ListItem
                      href="/website-maintenance"
                      title="Website Suport & Maintenance"
                    >
                      We are a leading web application development company that
                      offers a fully functional…
                    </ListItem>
                    <ListItem
                      href="/audit-consultancy"
                      title="Technology Audit And Consultancy"
                    >
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem
                      href="/quality-assurance"
                      title="Quality Assurance"
                    >
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem href="/about-us" title="About Us">
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem href="/careers" title="Careers">
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                    <ListItem href="/hire-developers" title="Hire Developer">
                      Transform how you use technology to achieve your business
                      objectives…
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-base">
                  Technologies
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:grid-cols-3 lg:w-[800px]">
                    <ListItem href="/technologies/php" title="PHP">
                      <FaPhp className="inline-block mr-2 text-indigo-500" />
                      PHP Development
                      <p className="text-sm text-gray-600">
                        Server-side scripting for web development.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/react" title="React JS">
                      <FaReact className="inline-block mr-2 text-blue-500" />
                      React JS
                      <p className="text-sm text-gray-600">
                        Build dynamic and interactive user interfaces.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/shopify" title="Shopify">
                      <SiShopify className="inline-block mr-2 text-green-500" />
                      Shopify Development
                      <p className="text-sm text-gray-600">
                        E-commerce platform for online stores.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/android" title="Android">
                      <SiAndroid className="inline-block mr-2 text-green-700" />
                      Android Development
                      <p className="text-sm text-gray-600">
                        Mobile app development for Android devices.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/mean" title="MEAN Stack">
                      <FaNodeJs className="inline-block mr-2 text-green-500" />
                      Node.js
                      <SiMongodb className="inline-block mr-2 text-green-400" />
                      MongoDB
                      <SiExpress className="inline-block mr-2 text-gray-500" />
                      Express
                      <SiAngular className="inline-block mr-2 text-red-600" />
                      Angular
                      <p className="text-sm text-gray-600">
                        Full-stack JavaScript development using MongoDB,
                        Express, Angular, and Node.js.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/python" title="Python">
                      <FaPython className="inline-block mr-2 text-yellow-500" />
                      Python Development
                      <p className="text-sm text-gray-600">
                        Versatile programming language for various applications.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/magento" title="Magento">
                      <FaMagento className="inline-block mr-2 text-red-600" />
                      Magento Development
                      <p className="text-sm text-gray-600">
                        E-commerce platform for building online stores.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/ios" title="iOS">
                      <FaApple className="inline-block mr-2 text-black" />
                      iOS Development
                      <p className="text-sm text-gray-600">
                        Mobile app development for iOS devices.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/mern" title="MERN Stack">
                      <FaNodeJs className="inline-block mr-2 text-green-500" />
                      Node.js
                      <SiMongodb className="inline-block mr-2 text-green-400" />
                      MongoDB
                      <SiExpress className="inline-block mr-2 text-gray-500" />
                      Express
                      <SiNextdotjs className="inline-block mr-2 text-black" />
                      Next.js
                      <p className="text-sm text-gray-600">
                        Full-stack JavaScript development using MongoDB,
                        Express, React, and Node.js.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/flutter" title="Flutter">
                      <FaFaceLaughSquint className="inline-block mr-2 text-blue-500" />
                      Flutter Development
                      <p className="text-sm text-gray-600">
                        UI toolkit for building natively compiled applications.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/vue" title="Vue JS">
                      <SiVuedotjs className="inline-block mr-2 text-green-600" />
                      Vue JS
                      <p className="text-sm text-gray-600">
                        Progressive JavaScript framework for building UIs.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/nodejs" title="Node.js">
                      <FaNodeJs className="inline-block mr-2 text-green-500" />
                      Node.js Development
                      <p className="text-sm text-gray-600">
                        JavaScript runtime built on Chrome's V8 engine.
                      </p>
                    </ListItem>
                    <ListItem
                      href="/technologies/react-native"
                      title="React Native"
                    >
                      <FaReact className="inline-block mr-2 text-blue-500" />
                      React Native
                      <p className="text-sm text-gray-600">
                        Build native mobile apps using React.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/wordpress" title="WordPress">
                      <FaWordpress className="inline-block mr-2 text-blue-900" />
                      WordPress Development
                      <p className="text-sm text-gray-600">
                        Content management system for building websites.
                      </p>
                    </ListItem>
                    <ListItem href="/technologies/angular" title="Angular">
                      <SiAngular className="inline-block mr-2 text-red-600" />
                      Angular Development
                      <p className="text-sm text-gray-600">
                        Platform for building single-page client applications.
                      </p>
                    </ListItem>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
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
          <p className="line-clamp-3 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
