
import { Testimonials } from "./Testimonials";

const TestimonialSection = () => {

  const feedbacks = [
    {
      name: "Rahul Mehta",
      occupation: "Software Engineer",
      feedback:
        "Products quality was better than expected and delivery was on time. Packaging was neat and secure. Definitely shopping again.",
    },
    {
      name: "Ayesha Khan",
      occupation: "Fashion Boutique Owner",
      feedback:
        "The variety of products and pricing options are really good. Checkout process was smooth and customer support was responsive.",
    },
    {
      name: "Karan Patel",
      occupation: "Digital Marketer",
      feedback:
        "Website is easy to navigate and product descriptions are accurate. My order arrived quickly and matched exactly what was shown online.",
    },
    {
      name: "Neha Sharma",
      occupation: "College Student",
      feedback:
        "Affordable prices and great discounts! Loved the overall shopping experience and the return process was hassle-free.",
    },
  ];

  return (
    <div className="w-[90%] m-auto flex flex-col gap-2 justify-between items-center mt-10">
      <p
        className={`text-2xl text-center font-semibold text-[#020101]`}
      >
        What our <span>Customers</span> are saying
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full justify-items-center mt-5 gap-5">
        {feedbacks.map((item, index) => (
          <Testimonials key={index} feed={item} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
