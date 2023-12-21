import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
interface Tasks {
  id: string;
  category: string;
  title: string;
}
const TaskDetails = () => {
  const { id } = useParams<Tasks>();
  const [tasks, setTasks] = useState<Tasks>();
  useEffect(() => {
    let url = `https://65842a564d1ee97c6bcf225e.mockapi.io/api/v1/todo`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        console.log("hi");
        return res.json();
      })
      .then((data) => {
        console.log("yes");
        console.log(data);

        data.map(() => {
          const foundTask = data.find((task: any) => task.id.toString() == id);
          if (foundTask) {
            setTasks(foundTask);
          } else {
            `not found`;
          }
        });
      })
      .catch(() => {
        alert(`Error fetching data for taks ${id}`);
      });
  }, [id]);
  return (
    <div>
      TaskDetails:{id}
      {tasks ? <div>{tasks.title}</div> : <p>Error</p>}
    </div>
  );
};

export default TaskDetails;
