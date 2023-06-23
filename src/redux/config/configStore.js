import { createStore } from "redux";
import todolist from "../modules/todolists";

const store = createStore(todolist);

export default store;
