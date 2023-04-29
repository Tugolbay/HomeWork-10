import { useEffect, useState } from "react";
import "./App.css";
import { Expenses } from "./components/expeneses/Expenses";
import { Header } from "./components/header/Header";
import { NewProduct } from "./components/newProduct/NewProduct";
const newProduct = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/184276818/photo/red-apple.jpg?s=612x612&w=0&k=20&c=NvO-bLsG0DJ_7Ii8SSVoKLurzjmV0Qi4eGfn6nW3l5w=",
    title: "apple",
    price: 4,
    inCart: false,
  },
  {
    id: 2,
    image:
      "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/produce_bananas/d6b28f69c0414ca28c61935a591654d4_large.png&width=512&type=webp&quality=90",
    title: "banana",
    price: 6,
    inCart: false,
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0038/4902/7653/products/Strawberry-Hydrosol-Fragaria-ananassa-Hydrolat-ProductPic.jpg?v=1630835304",
    title: "strawberry",
    price: 8,
    inCart: false,
  },
];
function App() {
  const [product, setProduct] = useState(newProduct);

  function addNewProductHandler(data) {
    const arr = [...product, data];
    setProduct(arr);
    localStorage.setItem("Product", JSON.stringify(product));
  }
  // useEffect(() => {
  //   const localStorageProduct = JSON.parse(localStorage.getItem("Product"));
  //   setProduct(localStorageProduct);
  // }, []);

  function deleteExpenses(id) {
    const NewData = product.filter((el) => el.id !== id);
    setProduct(NewData);
  }

  return (
    <div className="App">
      <NewProduct onSubmit={addNewProductHandler} />
      <Header />

      <Expenses
        onDelete={deleteExpenses}
        dataProduct={product}
        data={newProduct}
      />
    </div>
  );
}

export default App;
