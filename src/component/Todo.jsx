import React from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import toDoList from "../redux/modules/todolists";

const TodoContainer = styled.div`
  width: 300px;
  height: 150px;
  border: 1px solid #ddd;
  margin: 10px;
  padding: 10px;
`;

const TodoTitle = styled.h3`
  font-weight: bold;
`;

const TodoContent = styled.p`
  margin-top: 10px;
`;

const TodoButton = styled.button`
  cursor: pointer;
  background-color: palevioletred;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  height: 30px;
  width: 80px;
  border: none;
  border-radius: 10px;
`;

const Todo = ({ item, completeFunction, clickRemoveButtonHandler }) => {
  const handleComplete = () => {
    completeFunction(item.id);
  };

  const handleRemove = () => {
    clickRemoveButtonHandler(item.id);
  };

  return (
    <TodoContainer>
      <TodoTitle>{item.title}</TodoTitle>
      <TodoContent>{item.content}</TodoContent>
      <TodoButton onClick={handleComplete}>{item.isDone ? "Cancel" : "Done"}</TodoButton>
      <TodoButton onClick={handleRemove}>Remove</TodoButton>
      <Link to={`/detail/${item.id}`}>상세보기</Link>
    </TodoContainer>
  );
};

export default Todo;
