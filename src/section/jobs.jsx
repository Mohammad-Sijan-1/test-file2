
function Jobs() {
  const certification = [
    "Database administrator",
    "Tech support specialist",
    "IT specialist",
    "Systems analyst",
    "Network engineer",
    "Help desk technician",
    "IT support specialist",
    "IT technician",
    "Computer user specialist",
    "IT assistant",
  ];

  return (
    <div className="flex flex-col md:flex-row px-4 sm:px-6 lg:px-10 py-8 bg-[#FAFAFA] gap-6 lg:gap-10">
      {/* Left Section: Job List */}
      <div className="w-full md:w-1/2 rounded-2xl shadow-md p-4 sm:p-6 md:p-8">
        <h4 className="text-xl sm:text-2xl font-semibold border-b border-[#F9CCC7] pb-4 sm:pb-6">
          Jobs Associated with Certificate
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mt-5">
          {certification.map((skill, index) => (
            <div className="flex items-start gap-3 min-w-0" key={index}>
              <img
                className="bg-[#F9CCC7] p-1 size-7 rounded-full shrink-0"
                src="/arrow2.svg"
                alt=""
              />

              <p className="text-base sm:text-lg wrap-break-words">
                {skill}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 rounded-2xl shadow-md overflow-hidden">
        <img
          src="/bobsecimg.png"
          className="w-full h-64 sm:h-80 md:h-full min-h-0 md:min-h-100 object-cover rounded-2xl"
          alt="IT career opportunities"
        />
      </div>
    </div>
  );
}

export default Jobs;
