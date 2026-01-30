import { useContext } from "react";
import { context } from "../../Context/ContextProvider";

const Filter = () => {
  const { searchItem, setSearchItem, products, setSelectCategory } = useContext(context);
  return (
    <div
      className={`w-full xl:max-w-100 m-auto rounded-lg bg-gray-200 text-[#020101] mt-5 flex flex-col gap-2 p-5`}
    >
      <input
        type="text"
        className="w-full bg-white p-2 rounded-lg"
        placeholder="Search here"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold">Filter</h2>
        <div className="flex items-center gap-2">
          <select onChange={(e) => setSelectCategory(e.target.value)} className="bg-white p-1 rounded-lg flex-1">
            <option value="All">All Categories</option>
            {
              products.map((item, index) => (
                <option key={index} value={item.category}>{item?.category}</option>
              ))
            }
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
