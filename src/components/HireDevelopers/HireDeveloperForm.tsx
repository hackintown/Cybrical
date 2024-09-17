"use client";
import {
  useForm,
  SubmitHandler,
  useForm as useFormHook,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Define the form schema using Yup
const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    projectType: yup.string().required("Please select a project type"),
    budget: yup.string().required("Please enter your budget"),
    deadline: yup.string().required("Please select a deadline"),
    details: yup
      .string()
      .min(10, "Project details should be at least 10 characters long")
      .required("Project details are required"),
    contactMethod: yup
      .mixed<"email" | "phone">()
      .oneOf(["email", "phone"], "Please select a valid contact method")
      .required("Contact method is required"),
  })
  .required();

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  deadline: string;
  details: string;
  contactMethod: "email" | "phone";
}

const HireDeveloperForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema), // Ensure the yupResolver matches the FormData interface
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Hire a Developer
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label className="block text-gray-700">Full Name</label>
          <input
            {...register("name")}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-gray-700">Email Address</label>
          <input
            {...register("email")}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Project Type Field */}
        <div>
          <label className="block text-gray-700">Project Type</label>
          <select
            {...register("projectType")}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
          >
            <option value="">Select Project Type</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">
              Mobile App Development
            </option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other</option>
          </select>
          {errors.projectType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectType.message}
            </p>
          )}
        </div>

        {/* Budget Field */}
        <div>
          <label className="block text-gray-700">Budget (USD)</label>
          <input
            {...register("budget")}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            placeholder="Your project budget"
          />
          {errors.budget && (
            <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
          )}
        </div>

        {/* Deadline Field */}
        <div>
          <label className="block text-gray-700">Project Deadline</label>
          <input
            {...register("deadline")}
            type="date"
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
          />
          {errors.deadline && (
            <p className="text-red-500 text-sm mt-1">
              {errors.deadline.message}
            </p>
          )}
        </div>

        {/* Details Field */}
        <div>
          <label className="block text-gray-700">Project Details</label>
          <textarea
            {...register("details")}
            className="w-full p-3 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            placeholder="Describe your project in detail"
            rows={5}
          />
          {errors.details && (
            <p className="text-red-500 text-sm mt-1">
              {errors.details.message}
            </p>
          )}
        </div>

        {/* Contact Method */}
        <div>
          <label className="block text-gray-700">
            Preferred Contact Method
          </label>
          <div className="flex space-x-6">
            <label className="flex items-center">
              <input
                type="radio"
                value="email"
                {...register("contactMethod")}
                className="mr-2"
              />
              Email
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="phone"
                {...register("contactMethod")}
                className="mr-2"
              />
              Phone
            </label>
          </div>
          {errors.contactMethod && (
            <p className="text-red-500 text-sm mt-1">
              {errors.contactMethod.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:ring focus:ring-indigo-500 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HireDeveloperForm;
