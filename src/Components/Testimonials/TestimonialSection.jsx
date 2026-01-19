import React, { useContext } from "react";
import { Testimonials } from "./Testimonials";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const TestimonialSection = () => {
  const {isDark} = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div className="w-[90%] m-auto flex flex-col gap-2 justify-between mt-10">
        <h1 className={`text-3xl font-bold ${color.text.primary} text-center`}>Testimonials</h1>
        <p className={`text-2xl ${color.text.secondary} text-center font-semibold`}>What our <span className={`${color.primary}`}>Customer</span> are saying</p>
      <div className="flex w-full justify-between items-center mt-5">
        <Testimonials />
        <Testimonials />
        <Testimonials />
        <Testimonials />
      </div>
    </div>
  );
};

export default TestimonialSection;
