import { FaUserCircle } from "react-icons/fa";

export const Testimonials = ({ feed }) => {
  return (
    <div
      className={`bg-gray-200 flex flex-col items-center text-center w-full max-w-80  rounded-lg py-5 px-4 text-[#020101]`}
    >
      <div className={` text-4xl lg:text-5xl`}>
        <FaUserCircle />
      </div>
      <p className={`text-sm lg:text-base`}>{feed.feedback}</p>
      <div className="w-20 h-0.5 bg-yellow-400 mt-5"></div>
      <p className={`text-sm lg:text-base font-semibold`}>
        {feed.name}
      </p>
      <p>{feed.occupation}</p>
    </div>
  );
};
