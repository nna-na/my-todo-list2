// 액션 타입
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

// 액션 생성자
export const addToDo = (title, content) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    title,
    content,
    isDone: false,
  },
});

export const removeToDo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

export const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: {
    id,
  },
});

// 초기 상태
const initialState = {
  toDoList: [
    {
      id: 1,
      content: "리액트 기초를 공부해봅시다.",
      title: "리액트 공부하기",
      isDone: false,
    },
    {
      id: 2,
      content: "자바스크립트 기초를 공부해봅시다.",
      title: "자바스크립트 공부하기",
      isDone: true,
    },
  ],
};

// 리듀서
const todolist = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDoList: [...state.toDoList, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        toDoList: state.toDoList.filter((item) => item.id !== action.payload.id),
      };
    case TOGGLE_COMPLETE:
      return {
        ...state,
        toDoList: state.toDoList.map((item) => (item.id === action.payload.id ? { ...item, isDone: !item.isDone } : item)),
      };
    default:
      return state;
  }
};

export default todolist;
