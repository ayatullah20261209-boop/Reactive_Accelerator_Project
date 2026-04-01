import Footer from "../Footer/Footer";
import data from "../HeroSection/Card/data.json";
import CTABtn from "../Other/CTABtn";
import Features from "../Other/Features";
import MainHeading from "../Other/MainHeading";
import Pricing from "../Other/Pricing";
import Subheading from "../Other/Subheading";
import Testimonial from "../Other/Testimonial";
import Card from "./Card/Card";

export default function HeroSection() {
  return (
    <div className="relative pt-16 sm:pt-20 md:pt-24 lg:pt-[216px] pb-8 sm:pb-12 md:pb-16 flex flex-col justify-start items-center w-full px-4 sm:px-6 md:px-8 lg:px-0">
      {/* Main Heading */}
      <div className="w-full max-w-[937px] flex flex-col justify-center items-center gap-4 sm:gap-5 md:gap-6 lg:gap-8">
        <MainHeading />
        <Subheading />
      </div>

      {/* CTA Button */}
      <div className="mt-6">
        <CTABtn />
      </div>

      {/* Background Pattern */}
      <div className="absolute top-[232px] sm:top-[248px] md:top-[264px] lg:top-[320px] left-1/2 transform -translate-x-1/2 z-0 pointer-events-none">
        <svg
          className="w-full max-w-[2808px] h-auto opacity-30 sm:opacity-40 md:opacity-50 mix-blend-multiply"
          style={{
            filter: "hue-rotate(15deg) saturate(0.7) brightness(1.2)",
          }}
          viewBox="0 0 2808 1200"
          preserveAspectRatio="xMidYMid slice"
        >
          <rect width="100%" height="100%" fill="none" />
        </svg>
      </div>

      {/* Feature Cards Section */}
      <div className="self-stretch mt-24 border-t border-b border-gray-300 flex justify-center items-start relative">
        {/* Left Pattern */}
        <div className="w-6 md:w-8 lg:w-12 relative overflow-hidden">
          <div className="absolute left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] w-[140px] sm:w-[160px] md:w-[180px] flex flex-col">
            <div id="pattern-template">
              <div className="h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch flex-1 divide-y md:divide-y-0 md:divide-x divide-gray-300">
          {data.map((d) => {
            return (
              <Card key={d.id} title={d.title} disc={d.disc} pic={d.pic} />
            );
          })}
        </div>

        {/* Right Pattern */}
        <div className="w-6 md:w-8 lg:w-12 relative overflow-hidden">
          <div className="absolute left-[-40px] sm:left-[-50px] md:left-[-58px] top-[-120px] w-[140px] sm:w-[160px] md:w-[180px] flex flex-col">
            <div id="pattern-template-2">
              <div className="h-3 sm:h-4 rotate-[-45deg] origin-top-left outline outline-[0.5px] outline-[rgba(3,7,18,0.08)] outline-offset-[-0.25px]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mt-12 w-full max-w-[937px]">
        <Testimonial />
      </div>

      {/* Features Section */}
      <div className="mt-12 w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
        <Features />
      </div>

      {/* Pricing Section */}
      <div className="mt-12 w-full max-w-[1200px] px-4 sm:px-6 md:px-8">
        <Pricing />
      </div>

      {/* Footer */}
      <div className="mt-12 w-full">
        <Footer />
      </div>
    </div>
  );
}
