export default function Card({ title, disc, pic }) {
  return (
    <div className="flex-1 p-6 flex flex-col gap-2 cursor-pointer">
      <div className="text-[#49423D] text-sm font-semibold leading-6">
        {title}
      </div>
      <div className="text-[#605A57] text-[13px] leading-[22px]">{disc}</div>
      <img
        src={pic}
        alt="Data visualization dashboard"
        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-md mt-3"
      />
    </div>
  );
}
