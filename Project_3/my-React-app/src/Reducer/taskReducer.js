// initial state
export const initialState = {
  data: [],
  allData: [],
  editItem: null,
  showAddTask: false,
};

// reducer
export function taskReducer(state, action) {
  if (action.type === "TOGGLE_TASK") {
    return {
      ...state,
      showAddTask: action.payload,
    };
  } else if (action.type === "ADD_TASK") {
    return {
      ...state,
      data: [...state.data, action.payload],
      allData: [...state.allData, action.payload],
      showAddTask: false,
    };
  } else if (action.type === "UPDATE_TASK") {
    return {
      ...state,
      data: state.data.map((d) =>
        d.id === action.payload.id ? action.payload : d,
      ),
      allData: state.allData.map((d) =>
        d.id === action.payload.id ? action.payload : d,
      ),
      editItem: null,
      showAddTask: false,
    };
  } else if (action.type === "UPDATE_STATUS") {
    return {
      ...state,
      data: state.data.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, status: action.payload.status };
        } else {
          return task;
        }
      }),
      allData: state.allData.map((task) => {
        if (task.id === action.payload.id) {
          return { ...task, status: action.payload.status };
        } else {
          return task;
        }
      }),
    };
  } else if (action.type === "DELETE_TASK") {
    if (!action.payload?.id) {
      return state;
    }

    return {
      ...state,
      data: state.data.filter((d) => d.id !== action.payload.id),
      allData: state.allData.filter((d) => d.id !== action.payload.id),
    };
  } else if (action.type === "EDIT_ITEM") {
    return {
      ...state,
      editItem: action.payload,
      showAddTask: true,
    };
  } else if (action.type === "SEARCH") {
    const query = action.payload?.trim().toLowerCase();

    if (query) {
      return {
        ...state,
        data: state.allData.filter((d) =>
          d.title?.toLowerCase().includes(query),
        ),
      };
    } else {
      return {
        ...state,
        data: state.allData,
      };
    }
  } else {
    return state;
  }
}
