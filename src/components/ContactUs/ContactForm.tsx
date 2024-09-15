import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import Link from "next/link";

const ContactForm = () => {
  return (
    <div className="relative py-10">
      <div className="container px-4 z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-6 lg:p-8 gap-6 lg:gap-10">
          {/* Image Section */}
          <div className="flex flex-col gap-6 lg:space-y-9 w-full order-2 max-w-[430px] lg:max-w-max mx-auto lg:order-1">
            <Image
              src="/images/contact-img.webp" // Placeholder image path
              alt="Contact Us"
              width={500}
              height={500}
              className="rounded-lg w-full h-auto object-cover"
            />
            {/* <div className="rounded-lg overflow-hidden w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!..." // Add your Google Maps Embed link here
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div> */}
            <Image
              src="/images/contact-img.webp" // Placeholder image path
              alt="Contact Us"
              width={500}
              height={500}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>

          {/* Form Section */}
          <div className="w-full order-1 lg:order-2">
            <h2 className="text-2xl lg:text-3xl font-bold text-center lg:text-left text-gray-800 mb-4">
              Reach out to our
              <span className="text-green-600">industry experts!</span>
            </h2>
            <p className="mb-6 text-gray-600 text-sm text-center lg:text-left">
              Send us your project requirements and we'll get back to you within
              24 hrs.
            </p>

            <form className="space-y-4">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-gray-700">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  className="border p-2 rounded-md"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-gray-700">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  className="border p-2 rounded-md"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="phone" className="text-gray-700">
                  Phone Number*
                </label>
                <input
                  type="text"
                  id="phone"
                  className="border p-2 rounded-md"
                  placeholder="Your Phone Number"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="company" className="text-gray-700">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  className="border p-2 rounded-md"
                  placeholder="Your Company Name"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="website" className="text-gray-700">
                  Current Website
                </label>
                <input
                  type="text"
                  id="website"
                  className="border p-2 rounded-md"
                  placeholder="Your Website URL"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="services" className="text-gray-700">
                  What service(s) are you interested in?*
                </label>
                <select
                  id="services"
                  className="border p-3 rounded-md"
                  required
                >
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>SEO Services</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="budget" className="text-gray-700">
                  Select a budget*
                </label>
                <select id="budget" className="border p-3 rounded-md" required>
                  <option>Less than $5,000</option>
                  <option>$5,000 - $10,000</option>
                  <option>More than $10,000</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="hearAbout" className="text-gray-700">
                  How did you hear about us?
                </label>
                <input
                  type="text"
                  id="hearAbout"
                  className="border p-3 rounded-md"
                  placeholder="Source"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="details" className="text-gray-700">
                  Project Details
                </label>
                <textarea
                  id="details"
                  className="border p-3 rounded-md"
                  rows={5}
                  placeholder="Describe your project"
                ></textarea>
              </div>

              <div className="flex flex-col">
                <label htmlFor="fileUpload" className="text-gray-700">
                  Upload Files (Optional)
                </label>
                <input
                  type="file"
                  id="fileUpload"
                  className="border p-3 rounded-md"
                />
              </div>

              <div className="flex items-center">
                <input type="checkbox" id="consent" className="mr-2" required />
                <label htmlFor="consent" className="text-gray-600">
                  I consent to processing the information submitted.
                  <Link href="/privacy-policy" className="text-green-600">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button className="">Send Your Message</Button>
            </form>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full opacity-85">
        <Image
          src="/images/banner-bg-layer.svg"
          alt="banner-layer"
          height={500}
          width={500}
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default ContactForm;
