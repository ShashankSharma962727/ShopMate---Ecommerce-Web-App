import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const Filter = () => {
  const { isDark, searchItem, setSearchItem, products, setSelectCategory } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;
  return (
    <div
      className={`w-full max-w-100  h-40 m-auto ${color.background.secondary} ${color.text.secondary} rounded-lg shadow-lg mt-5 flex flex-col gap-2 p-5`}
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
