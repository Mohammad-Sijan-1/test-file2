
import { Button } from "../component/button";

function Hero() {
  return (
    <section className="flex flex-col items-center gap-10 px-5 py-10 sm:px-8 md:px-10 lg:flex-row lg:justify-between lg:gap-8 lg:py-16 bg-[#FAFAFA]">

      {/* Left Content */}
      <div className="flex w-full flex-col gap-6 lg:w-1/2 lg:gap-7">

        <h3 className="text-sm font-bold sm:text-base">
          Discover{" "}
          <span className="text-[#F44335]">-</span> Interact{" "}
          <span className="text-[#F44335]">-</span> Engage
        </h3>

        {/* Heading */}
        <h1 className="flex flex-col text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          <span>Google</span>
          <span className="text-[#F44335] underline underline-offset-4 sm:underline-offset-6">
            IT Support
          </span>
          <span>Certificate</span>
        </h1>

        {/* Description */}
        <p className="w-full max-w-lg text-base leading-7 text-[#072125] sm:text-lg">
          This is your path to a career in IT. In this program, you’ll learn
          in-demand skills with no degree or experience required.
        </p>

        {/* Course Statistics */}
        <div className="grid grid-cols-3 gap-x-3 gap-y-5 sm:grid-cols-5 sm:gap-5">
{/* edll */}
          <div>
            <h4 className="text-xl font-bold text-[#00B86B] sm:text-2xl">
              438
            </h4>
            <p className="text-sm sm:text-base">Videos</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#00B86B] sm:text-2xl">
              151
            </h4>
            <p className="text-sm sm:text-base">Reading</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#00B86B] sm:text-2xl">
              108
            </h4>
            <p className="text-sm sm:text-base">Quizzes</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#00B86B] sm:text-2xl">
              24
            </h4>
            <p className="text-sm sm:text-base">Exercises</p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#00B86B] sm:text-2xl">
              4
            </h4>
            <p className="text-sm sm:text-base">Assignments</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <Button color="orange">Sign up</Button>
          <Button color="white">Learn more</Button>
        </div>

      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2">
        <img
          src="/hero.png"
          alt="Google IT Support Certificate learning illustration"
          className="mx-auto h-auto w-full max-w-xl object-contain"
        />
      </div>

    </section>
  );
}

export default Hero;
