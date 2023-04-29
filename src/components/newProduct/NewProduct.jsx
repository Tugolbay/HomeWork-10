import { useState } from "react";
import styled from "styled-components";
export const NewProduct = ({ onSubmit }) => {
  const [inputId, setInputId] = useState();
  const [inputImage, setInputImage] = useState();
  const [inputText, setInputText] = useState("");
  const [inputPrice, setInputPricr] = useState();

  function getInputIdValue(e) {
    setInputId(e.target.value);
  }
  function getInputImgValue(e) {
    setInputImage(e.target.value);
  }
  function getInputTextValue(e) {
    setInputText(e.target.value);
  }
  function getInputPriceValue(e) {
    setInputPricr(e.target.value);
  }

  function submitHandler() {
    const data = {
      id: inputId,
      image: inputImage,
      title: inputText,
      price: inputPrice,
    };
    onSubmit(data);
    console.log(data);
    setInputId("");
    setInputImage("");
    setInputText("");
    setInputPricr("");
  }

  return (
    <InputForm>
      <Input1
        onChange={getInputIdValue}
        value={inputId}
        placeholder="id"
        type="text"
      />
      <Input2
        onChange={getInputImgValue}
        value={inputImage}
        placeholder="Product Image"
        type="text"
      />
      <Input3
        onChange={getInputTextValue}
        value={inputText}
        placeholder="Product Name"
        type="text"
      />
      <Input4
        onChange={getInputPriceValue}
        value={inputPrice}
        placeholder="Product Price"
        type="text"
      />
      <Add onClick={submitHandler}>ADD</Add>
    </InputForm>
  );
};

const InputForm = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 200px;
  background-color: #00ccff;
  margin-bottom: 150px;
`;
const Input1 = styled.input`
  position: relative;
  top: 20px;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border-style: none;
`;
const Input2 = styled.input`
  position: relative;
  top: 20px;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border-style: none;
`;
const Input3 = styled.input`
  position: relative;
  top: 20px;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border-style: none;
`;
const Input4 = styled.input`
  position: relative;
  top: 20px;
  width: 300px;
  height: 30px;
  border-radius: 10px;
  border-style: none;
`;
const Add = styled.button`
  position: absolute;
  top: 100px;
  width: 100px;
  height: 50px;
  border-radius: 15px;
  border-style: none;
  color: #ff7300;
  background-color: #00ffa6;
`;
