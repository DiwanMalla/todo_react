import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HeaderToDo from "./HeaderToDo";
import TaskList from "./TaskList";
import TaskDetails from "./TaskDetails";

const App = () => {
  return (
    <Router>
      <div>
        <HeaderToDo />
        <div>
          <Switch>
            <Route exact path="/">
              <TaskList />
            </Route>
            <Route path="/tasks/:id">
              <TaskDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
