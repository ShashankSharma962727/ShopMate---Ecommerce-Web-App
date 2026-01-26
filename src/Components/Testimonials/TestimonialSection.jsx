import React, { useContext } from "react";
import { Testimonials } from "./Testimonials";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const TestimonialSection = () => {
  const {isDark} = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  const feedbacks = [
  {
    name: "Rahul Mehta",
    occupation: "Software Engineer",
    feedback: "Products quality was better than expected and delivery was on time. Packaging was neat and secure. Definitely shopping again."
  },
  {
    name: "Ayesha Khan",
    occupation: "Fashion Boutique Owner",
    feedback: "The variety of products and pricing options are really good. Checkout process was smooth and customer support was responsive."
  },
  {
    name: "Karan Patel",
    occupation: "Digital Marketer",
    feedback: "Website is easy to navigate and product descriptions are accurate. My order arrived quickly and matched exactly what was shown online."
  },
  {
    name: "Neha Sharma",
    occupation: "College Student",
    feedback: "Affordable prices and great discounts! Loved the overall shopping experience and the return process was hassle-free."
  }
];



  return (
    <div className="w-[90%] m-auto flex flex-col gap-2 justify-between mt-10">
        <h1 className={`text-3xl font-bold ${color.text.primary} text-center`}>Testimonials</h1>
        <p className={`text-2xl ${color.text.secondary} text-center font-semibold`}>What our <span className={`${color.primary}`}>Customer</span> are saying</p>
      <div className="flex w-full justify-between items-center mt-5 flex-wrap">
        {feedbacks.map((item, index) => (
          <Testimonials key={index} feed={item}/>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
