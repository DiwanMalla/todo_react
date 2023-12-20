const HeaderToDo = () => {
  const date = new Date();
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div
      className="text-white pt-14 pl-2 pb-2 bg-gradient-to-l from-blue-800 to-purple-400"
      style={{}}
    >
      <h2 className="text-3xl">My Day</h2>
      <p className="text-sm">
        {daysOfWeek[date.getDay()]}, {monthNames[date.getMonth()]}{" "}
        {date.getDate()}
      </p>
    </div>
  );
};

export default HeaderToDo;
