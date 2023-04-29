import { useReducer } from "react";
import styled from "styled-components";

export const ExpensesCard = ({ el, onDelete }) => {
  function countReducer(state, action) {
    console.log(action);
    if (action.type === "PLUS") {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    if (action.type === "MINUS") {
      return {
        ...state,
        count: state.count - 1,
      };
    }
  }

  const [count, dispatchCount] = useReducer(countReducer, { count: 0 });

  function plusCount() {
    dispatchCount({ type: "PLUS" });
  }
  function minusCount() {
    if (count.count !== 0) {
      dispatchCount({ type: "MINUS" });
    }
  }
  return (
    <Container>
      <>
        <div>{el.id}</div>
        <Image src={el.image} />
        <div>{el.title}</div>
        <div>$ {el.price}</div>

        <Count>
          <CountBtn onClick={minusCount}>-</CountBtn>
          <CountText>{count.count}</CountText>
          <CountBtn2 onClick={plusCount}>+</CountBtn2>
        </Count>
        <Remove onClick={() => onDelete(el.id)}>Remove</Remove>
      </>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
`;
const Count = styled.div`
  display: flex;
`;
const CountBtn = styled.button`
  position: relative;
  right: 5px;
  width: 21px;
  height: 35px;
  background-color: #46cee9;
  color: white;
  border-radius: 5px;
  border-style: none;
`;
const CountBtn2 = styled.button`
  position: relative;
  left: 5px;
  height: 35px;
  color: white;
  background-color: #46cee9;
  border-radius: 5px;
  border-style: none;
`;
const CountText = styled.p`
  position: relative;
  bottom: 6px;
`;
const Remove = styled.button`
  border-radius: 10px;
  border-style: none;
  color: white;
  background-color: red;
`;
