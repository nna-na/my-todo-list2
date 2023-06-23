import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { styled } from "styled-components";

const DetailContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

const DetailTitle = styled.h2`
  font-weight: bold;
`;

const DetailContent = styled.p`
  margin-top: 10px;
`;

const DetailButton = styled.button`
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

function Detail() {
  const { id } = useParams();
  const toDoList = useSelector((state) => state.toDoList);
  const todo = toDoList.find((item) => item.id === parseInt(id));

  return (
    <DetailContainer>
      <DetailTitle>{todo.id}</DetailTitle>
      <DetailTitle>{todo.title}</DetailTitle>
      <DetailContent>{todo.content}</DetailContent>
      <DetailButton>이전</DetailButton>
    </DetailContainer>
  );
}

export default Detail;
