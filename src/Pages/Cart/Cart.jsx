import Layout from "../../Components/Layout/Layout";
import BillCard from "./BillCard";
import { CartCard } from "./CartCard";

const Cart = () => {
  return (
    <Layout>
      <div className="w-[90%] m-auto flex justify-center gap-10 mt-20">
        <div className="flex flex-col gap-5">
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
        <div>
          <BillCard />
        </div>
      </div>
    </Layout>
  );
};

export default Cart;