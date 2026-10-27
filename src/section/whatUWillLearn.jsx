
import React from "react";

const learningPoints = [
  "Gain skills required to succeed in an entry-level IT job",
  "Learn how to provide effective customer support",
  "Understand computer networking and operating systems",
  "Learn system administration and security fundamentals",
  "Develop practical troubleshooting skills",
];

const skills = [
  "Debugging",
  "Customer Support",
  "Networking",
  "Operating Systems",
  "System Administration",
  "Technical Support",
  "Linux",
  "Windows",
  "Security",
  "Troubleshooting",
  "IT Infrastructure",
  "Problem Solving",
];

function WhatYouWillLearn() {
  return (
    <section className="bg-[#FAFAFA] px-4 py-10 sm:px-6 sm:py-12 lg:px-10 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:gap-8 lg:flex-row lg:gap-10">

        {/* Left section */}
        <div className="flex min-w-0 w-full flex-col gap-6 rounded-2xl bg-white p-5 shadow-md sm:gap-8 sm:rounded-3xl sm:p-7 lg:w-1/2 lg:p-8">

          <h2 className="border-b border-[#F9CCC7] pb-5 text-xl font-semibold sm:pb-8 sm:text-2xl">
            What you will learn
          </h2>

          <div className="flex flex-col gap-6">
            {learningPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-3 sm:gap-4"
              >
                <img
                  src="/CheckIcon.svg"
                  alt=""
                  aria-hidden="true"
                  className="mt-0.5 h-9 w-9 shrink-0 rounded-full bg-[#F9CCC7] p-2 sm:h-11 sm:w-11 sm:p-3"
                />

                <p className="min-w-0 text-base font-medium leading-7 text-gray-800 sm:text-lg">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right section */}
        <div className="flex min-w-0 w-full flex-col rounded-2xl bg-white p-5 shadow-md sm:rounded-3xl sm:p-7 lg:w-1/2 lg:p-8">

          <img
            src="/ITsocial1.png"
            alt="IT support and technical skills"
            className="h-auto w-full rounded-xl object-contain"
          />

          <h2 className="border-b-2 border-[#F9CCC7] py-5 text-xl font-semibold sm:py-6 sm:text-2xl">
            Skills you will gain
          </h2>

          <div className="flex flex-wrap gap-2.5  py-6 sm:gap-3 sm:py-7">
            {skills.map((skill) => (
              <span
                key={skill}
                className="max-w-full rounded-full border border-[#F44335] px-3 py-1.5 text-sm font-normal leading-6 text-gray-800 sm:text-base"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhatYouWillLearn;
