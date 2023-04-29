import styled from "styled-components";
export const Header = () => {
  return (
    <HeaderProduct>
      <HeaderId>
        <strong>ID</strong>
      </HeaderId>
      <HeaderProductImg>
        <strong>Product</strong>
      </HeaderProductImg>
      <HeaderProductName>
        <strong>ProductName</strong>
      </HeaderProductName>
      <HeaderProductPrice>
        <strong>Price</strong>
      </HeaderProductPrice>
      <HeaderProductQuantity>
        <strong>Quantity</strong>
      </HeaderProductQuantity>
      <HeaderProductRemove>
        <strong>Remove</strong>
      </HeaderProductRemove>
    </HeaderProduct>
  );
};
const HeaderProduct = styled.div`
  display: flex;
  height: 50px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  margin-top: -150px;
`;
const HeaderId = styled.div`
  position: relative;
  top: 15px;
  left: 102px;
`;
const HeaderProductImg = styled.div`
  position: relative;
  top: 15px;
  left: 298px;
`;
const HeaderProductName = styled.div`
  position: relative;
  top: 15px;
  left: 470px;
`;
const HeaderProductPrice = styled.div`
  position: relative;
  top: 15px;
  left: 630px;
`;
const HeaderProductQuantity = styled.div`
  position: relative;
  top: 15px;
  left: 815px;
`;
const HeaderProductRemove = styled.div`
  position: relative;
  top: 15px;
  left: 1015px;
`;
