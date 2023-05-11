import './App.css';
import { useEffect, useState } from "react";
import axios from "axios";

import ShowInformation from './component/ShowInformation';
import Search from './component/search';

function App() {
  const [city, setCity] = useState("");
  const [data, setData] = useState("");
  const [submit, setSubmit] = useState(false);
 const [searchTerm, setSearchTerm] =useState("")
  
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    setSubmit(true);
    setCity(searchTerm)
  };
  const cityHandler = (e) => {
    setSearchTerm(e.target.value);
  };
  const apiKey = "eb9386714624d110f9ae272c53b364fa";

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, [city,submit]);
  return (
    <div className="App">
      <Search submitHandler={submitHandler} cityHandler={cityHandler} submit={submit} searchTerm={searchTerm} data={data} city={city}  />
      <ShowInformation data={data}/>
    </div>
  );
}

export default App;
