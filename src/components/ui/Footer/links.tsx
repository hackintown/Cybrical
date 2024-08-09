import React from "react";

const links = [
  {
    title: "Services",
    items: [
      "Web Application Development",
      "Mobile Application Development",
      "Digital Marketing Solution",
      "Technology Audit & Consultancy",
      "Website Support & Maintenance",
      "Quality Assurance As A Service",
      "Agile Development Teams",
      "Cloud Adoption & Engineering",
      "Resilient Software Architecture",
    ],
  },
  {
    title: "Technologies",
    items: [
      "Laravel",
      "Vue.js",
      "Node.js",
      "Woocommerce",
      "Angular JS",
      "Magento",
      "React",
      "Cloud & DevOps",
      "WordPress",
    ],
  },
  {
    title: "Company",
    items: [
      "Services",
      "Careers",
      "Blog",
      "About Us",
      "Faq",
      "Our Team",
      "Our Work",
      "Contact Us",
      "Hire Developer",
    ],
  },
];

const FooterLinks: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
      {links.map((linkGroup, index) => (
        <div key={index}>
          <h4 className="text-xl text-white text-center font-bold mb-4">
            {linkGroup.title}
          </h4>
          <ul className="space-y-2">
            {linkGroup.items.map((item, index) => (
              <li
                key={index}
                className="hover:text-green-400 text-[#BFBFBF] text-center cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
