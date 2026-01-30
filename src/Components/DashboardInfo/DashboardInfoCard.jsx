

const DashboardInfoCard = ({length, label, icon}) => {
  return (
    <div
      className={`bg-gray-200 flex max-w-96 w-full flex-col text-yellow-900 items-center p-2 text-lg rounded-2xl`}
    >
      <div>{icon}</div>
      <span>{length}</span>
      <span>{label}</span>
    </div>
  );
};

export default DashboardInfoCard;
