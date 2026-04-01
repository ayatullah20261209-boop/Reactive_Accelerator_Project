import { useReducer } from "react";
import { TasksContext, TasksDispatchContext } from "../../Context/context";
import { initialState, taskReducer } from "../../Reducer/taskReducer";
import Aside from "../Aside/Aside";
import AddTask from "../Header/AddTask/AddTask";
import Header from "../Header/Header";
import KanbanBord from "../KanbanBord/KanbanBord";

export default function TaskManager() {
  const [state, dispatch] = useReducer(taskReducer, initialState);
  const { showAddTask } = state;

  return (
    <TasksContext.Provider value={state}>
      <TasksDispatchContext.Provider value={dispatch}>
        <div className="min-h-screen flex flex-col lg:flex-row">
          <Aside />
          <div className="flex-1 flex flex-col min-h-0">
            <Header />

            {showAddTask ? (
              <AddTask editItem={state.editItem} />
            ) : (
              <KanbanBord />
            )}
          </div>
        </div>
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  );
}
