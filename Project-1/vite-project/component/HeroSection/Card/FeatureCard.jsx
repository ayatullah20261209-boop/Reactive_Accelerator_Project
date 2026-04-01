export default function FeatureCard({ title, disc, pic }) {
  return (
    <div className="border-b border-r-0 md:border-r border-[rgba(55,50,47,0.12)] p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start items-start gap-4 sm:gap-6">
      <div className="flex flex-col gap-2">
        <h3 className="text-[#37322F] text-lg sm:text-xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-[#605A57] text-sm md:text-base font-normal leading-relaxed">
          {disc}
        </p>
      </div>
      <div className="w-full h-[200px] sm:h-[250px] md:h-[300px] rounded-lg flex items-center justify-center overflow-hidden">
        <img
          src={pic}
          className={
            title === "Smart. Simple. Brilliant."
              ? "h-1/2 object-cover"
              : "h-9/10 object-cover"
          }
          alt="Smart Work Order"
        />
      </div>
    </div>
  );
}
