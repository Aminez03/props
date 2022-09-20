import logo from "./logo.svg";
import "./App.css";
import ProductList from "./Components/ProductList";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";

function App() {
  const data = [
    {
      id: Math.random(),
      pic: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/homepage/families-gallery/2022/04_12/family_chooser_tecnica_m.png",
      price: 1300,
      name: "Lamborghini",
    },
    {
      id: Math.random(),
      pic: "https://i.ytimg.com/vi/tArC9-RHmU4/maxresdefault.jpg",
      price: 2800,
      name: "Marceds",
    },
    {
      id: Math.random(),
      pic: "https://image.winudf.com/v2/image1/Y29tLm9semhhcy5jYXJwYXJraW5nLm11bHR5cGxheWVyX3NjcmVlbl82XzE2NTIwMTgwNTFfMDU5/screen-6.jpg?fakeurl=1&type=.webp",
      price: 1800,
      name: "BMW",
    },
  ];
  const FooterData = "this is a children props";

  const FooterData2 = "this is a children props2";
  const normalProps="this is normal"

  return (
    <div className="App">
      <ProductList list={data} />
      <Footer normal={normalProps}>
        {FooterData}
        {FooterData2}
      </Footer>
    </div>
  );
}

export default App;
