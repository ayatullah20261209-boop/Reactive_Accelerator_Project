import { useState } from "react";
import "./App.css";
import Footer from "./Component/Footer/Footer";
import Form from "./Component/Form/Form";
import Header from "./Component/Header/Header";
import MainContent from "./Component/MainContent/MainContent";

function App() {
  const [data, setData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [value, setValue] = useState({
    id: crypto.randomUUID(),
    name: "",
    url: "",
    color: "#3b82f6",
    category: "",
    userName: "",
    password: "",
    isFav: false,
    createdAt: new Date().toISOString(),
  });

  const handleAddBookmark = (evt) => {
    evt.preventDefault();
    const { url, color, category, userName, password } = value;

    const newValue = {
      id: crypto.randomUUID(),
      name: url.slice(8, url.length - 4),
      url: url.slice(8, url.length),
      color,
      category,
      userName,
      password,
      isFav: false,
      createdAt: new Date().toISOString(),
    };

    const updatedData = [...data, newValue];
    // console.log(updatedData);
    setData(updatedData);
    setAllData(updatedData);
  };

  const handleClearButton = (evt) => {
    evt.preventDefault();
    setValue({
      id: crypto.randomUUID(),
      name: "",
      url: "",
      color: "",
      category: "",
      userName: "",
      password: "",
      isFav: false,
      createdAt: new Date().toISOString(),
    });
  };

  const handleShow = (id) => {
    const itemIndex = data.findIndex((d) => d.id === id);
    const newData = [...data];
    newData[itemIndex].isFav = !newData[itemIndex].isFav;
    setData(newData);
  };

  const handleOnSearch = (search) => {
    if (!search) {
      // console.log("search: ", search);
      setData([...allData]);
      return;
    }

    const filtered = allData.filter(
      (d) =>
        d.userName.toLowerCase().includes(search.toLowerCase()) ||
        d.url.toLowerCase().includes(search.toLowerCase()),
    );
    // console.log("filtered: ", filtered);
    setData(filtered);
  };

  return (
    <div className="bg-neutral-900 text-white min-h-screen">
      <Header />
      <Form
        value={value}
        setValue={setValue}
        handleAddBookmark={handleAddBookmark}
        handleClearButton={handleClearButton}
      />
      <MainContent
        value={data}
        handleShow={handleShow}
        onSearch={handleOnSearch}
      />
      <Footer />
    </div>
  );
}

export default App;
