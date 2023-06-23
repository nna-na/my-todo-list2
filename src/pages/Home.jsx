import React, { useState } from "react";
import Todo from "../component/Todo";
import { styled } from "styled-components";
import { useSelector, useDispatch } from "react-redux";

// 액션 타입
const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const TOGGLE_COMPLETE = "TOGGLE_COMPLETE";

// 액션 생성자
const addToDo = (title, content) => ({
  type: ADD_TODO,
  payload: {
    id: Date.now(),
    title,
    content,
    isDone: false,
  },
});

const removeToDo = (id) => ({
  type: REMOVE_TODO,
  payload: {
    id,
  },
});

const toggleComplete = (id) => ({
  type: TOGGLE_COMPLETE,
  payload: {
    id,
  },
});

const Layout = styled.div`
  font-family: "GoWun Dodum";
  margin: 0 auto;
  max-width: 1200px;
  min-width: 800px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  border: 1px solid #ddd;
  padding: 0 20px;
`;

const AddForm = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: pink;
  margin: 0 auto;
  padding: 30px;
`;

const FormLabel = styled.label`
  font-size: 20px;
  font-weight: bold;
`;

const AddInput = styled.input`
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
`;

const AddButton = styled.button`
  cursor: pointer;
  background-color: palevioletred;
  color: #fff;
  font-size: 17px;
  font-weight: bold;
  height: 40px;
  width: 140px;
  border: none;
  border-radius: 10px;
`;

const ListTitle = styled.h2`
  display: block;
  font-weight: bold;
`;

const ListWorking = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Home = () => {
  const toDoList = useSelector((state) => state.toDoList); // 리덕스 상태 가져오기
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  };

  const handleClickAddButton = () => {
    if (title.trim() === "" || content.trim() === "") return;
    dispatch(addToDo(title, content)); // addToDo 액션 디스패치
    setTitle("");
    setContent("");
  };

  const handleClickRemoveButton = (id) => {
    dispatch(removeToDo(id)); // removeToDo 액션 디스패치
  };

  const handleComplete = (id) => {
    dispatch(toggleComplete(id)); // toggleComplete 액션 디스패치
  };

  const handleCancel = (id) => {
    dispatch(toggleComplete(id)); // toggleComplete 액션 디스패치
  };

  return (
    <Layout>
      <Container>
        <div>My Todo List</div>
        <div>React</div>
      </Container>
      <AddForm>
        <FormLabel>Title:</FormLabel>
        <AddInput type="text" name="title" value={title} onChange={handleChange} />
        <FormLabel>Content:</FormLabel>
        <AddInput type="text" name="content" value={content} onChange={handleChange} />
        <AddButton onClick={handleClickAddButton}>Add</AddButton>
      </AddForm>
      <ListTitle>Working 🔥</ListTitle>
      <ListWorking>
        {toDoList
          .filter((item) => !item.isDone)
          .map((item) => (
            <Todo key={item.id} item={item} completeFunction={handleComplete} clickRemoveButtonHandler={handleClickRemoveButton} />
          ))}
      </ListWorking>
      <ListTitle>Done 🎉</ListTitle>
      <ListWorking>
        {toDoList
          .filter((item) => item.isDone)
          .map((item) => (
            <Todo key={item.id} item={item} completeFunction={handleCancel} clickRemoveButtonHandler={handleClickRemoveButton} />
          ))}
      </ListWorking>
    </Layout>
  );
};

export default Home;
