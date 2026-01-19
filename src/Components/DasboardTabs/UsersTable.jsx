import { useContext } from "react";
import { context } from "../../Context/ContextProvider";
import { darkTheme, lightTheme } from "../../Styles/Colors";

const UsersTable = () => {
  const { isDark } = useContext(context);
  const color = isDark ? darkTheme : lightTheme;

  return (
    <div>
        <h1 className={`${color.text.primary} text-center font-bold text-4xl mb-4`}>Users</h1>
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">S No.</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Pincode</th>
            <th className="border p-2">Phone Number</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Date</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="border p-2 text-center">1</td>
            <td className="border p-2 text-center">Shashank sharma</td>
            <td className="border p-2">Agra</td>
            <td className="border p-2">282010</td>
            <td className="border p-2">+91 0000000000</td>
            <td className="border p-2">shashanksharma123@gmail.com</td>
            <td className="border p-2">12/12/25</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
