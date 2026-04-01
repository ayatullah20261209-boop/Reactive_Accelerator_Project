import FeatureCard from "../HeroSection/Card/FeatureCard";
import features from "../HeroSection/Card/features.json";

export default function Features() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-8 lg:px-0 lg:max-w-[1060px] lg:w-[1060px] py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[616px] lg:w-[616px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <GridIcon width={12} height={12} />
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
              Services
            </div>
          </div>

          <div className="w-full max-w-[598px] lg:w-[598px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            Built for absolute clarity and focused work
          </div>

          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            Stay focused with tools that organize, connect
            <br />
            and turn information into confident decisions.
          </div>
        </div>
      </div>

      {/* Features Content */}
      <div className="self-stretch flex justify-center items-start">
        {/* Left Pattern */}
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
          </div>
        </div>

        {/* Grid Content */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-0 border-l border-r border-[rgba(55,50,47,0.12)]">
          {features.map((data) => {
            return (
              <FeatureCard
                key={data.id}
                title={data.title}
                disc={data.disc}
                pic={data.pic}
              />
            );
          })}
        </div>

        {/* Right Pattern */}
        <div className="w-12 self-stretch relative overflow-hidden hidden md:block">
          <div className="w-[162px] left-[-58px] top-[-120px] absolute flex flex-col justify-start items-start">
            <div className="self-stretch h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

function GridIcon({ width, height }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={1} y={1} width={4} height={4} stroke="#37322F" strokeWidth={1} />
      <rect x={7} y={1} width={4} height={4} stroke="#37322F" strokeWidth={1} />
      <rect x={1} y={7} width={4} height={4} stroke="#37322F" strokeWidth={1} />
      <rect x={7} y={7} width={4} height={4} stroke="#37322F" strokeWidth={1} />
    </svg>
  );
}
