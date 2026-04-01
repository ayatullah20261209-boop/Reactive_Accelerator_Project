export default function Testimonial() {
  return (
    <div className="w-full border-b border-[rgba(55,50,47,0.12)] flex flex-col justify-center items-center">
      {/* Header */}
      <div className="self-stretch px-4 sm:px-6 md:px-24 py-8 sm:py-12 md:py-16 border-b border-[rgba(55,50,47,0.12)] flex justify-center items-center gap-6">
        <div className="w-full max-w-[586px] px-4 sm:px-6 py-4 sm:py-5 shadow-none overflow-hidden rounded-lg flex flex-col justify-start items-center gap-3 sm:gap-4">
          {/* Badge */}
          <div className="px-[14px] py-[6px] bg-white shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-[8px] border border-[rgba(2,6,23,0.08)] shadow-xs">
            <BuildingIcon width={12} height={10} color="#37322F" />
            <div className="text-center flex justify-center flex-col text-[#37322F] text-xs font-medium leading-3">
              Testimonials
            </div>
          </div>

          {/* Heading */}
          <div className="w-full max-w-[472.55px] text-center flex justify-center flex-col text-[#49423D] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold leading-tight md:leading-[60px] tracking-tight">
            Confidence backed by results
          </div>

          {/* Subheading */}
          <div className="self-stretch text-center text-[#605A57] text-sm sm:text-base font-normal leading-6 sm:leading-7">
            Our customers achieve more each day
            <br className="hidden sm:block" />
            because their tools are simple, powerful, and clear.
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="self-stretch px-2 overflow-hidden flex justify-start items-center bg-background border-b border-l-0 border-r-0 border-t-0">
        <div className="flex-1 py-12 md:py-16 flex flex-col md:flex-row justify-center items-end gap-6">
          <div className="self-stretch px-3 md:px-12 justify-center items-start gap-4 flex flex-col md:flex-row">
            {/* Testimonial Image */}
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20Sep%2011%2C%202025%2C%2011_35_19%20AM-z4zSRLsbOQDp7MJS1t8EXmGNB6Al9Z.png"
              alt="Jamie Marshall"
              className="w-48 h-50 rounded-lg object-cover"
            />

            {/* Testimonial Text */}
            <div className="flex-1 px-6 py-6 shadow-[0px_0px_0px_0.75px_rgba(50,45,43,0.12)] overflow-hidden flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-start flex flex-col text-[#49423D] text-2xl md:text-[32px] font-medium leading-10 md:leading-[42px] h-auto tracking-tight">
                "In just a few minutes, we transformed our data into actionable
                insights. The process was seamless and incredibly efficient!"
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-1">
                <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.90)] text-lg font-medium leading-[26px]">
                  Jamie Marshall
                </div>
                <div className="self-stretch justify-center flex flex-col text-[rgba(73,66,61,0.70)] text-lg font-medium leading-[26px]">
                  Co-founder, Exponent
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BuildingIcon({ width, height, color }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x={1} y={3} width={4} height={6} stroke={color} strokeWidth={1} />
      <rect x={7} y={1} width={4} height={8} stroke={color} strokeWidth={1} />

      <rect x={2} y={4} width={1} height={1} fill={color} />
      <rect x={3.5} y={4} width={1} height={1} fill={color} />
      <rect x={2} y={5.5} width={1} height={1} fill={color} />
      <rect x={3.5} y={5.5} width={1} height={1} fill={color} />

      <rect x={8} y={2} width={1} height={1} fill={color} />
      <rect x={9.5} y={2} width={1} height={1} fill={color} />
      <rect x={8} y={3.5} width={1} height={1} fill={color} />
      <rect x={9.5} y={3.5} width={1} height={1} fill={color} />
      <rect x={8} y={5} width={1} height={1} fill={color} />
      <rect x={9.5} y={5} width={1} height={1} fill={color} />
    </svg>
  );
}
