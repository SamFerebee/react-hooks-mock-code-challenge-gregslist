import React, {useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listingsToDisplay, setListingsToDisplay] = useState([])
  const [allListings, setAllListings] = useState([])
  useEffect(()=>{
    fetch("http://localhost:6001/listings")
      .then(r=>r.json())
      .then(data=> {
        setListingsToDisplay(data);
        setAllListings(data)
      })
  }, [])

  const handleDelete = e => {
    const id = parseInt(e.target.dataset.thelisting);
    const temp = listingsToDisplay.filter((listing) => !(listing.id === id));
    setListingsToDisplay(temp);
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE" 
    })
  }

  const handleSearch = query =>{
    console.log(query)
    const temp = allListings.filter((listing) => listing.description.includes(query))
    setListingsToDisplay(temp);
  }

  const alphabetize = () => {
    const temp = [...listingsToDisplay]
    temp.sort((a,b) => a.location.localeCompare(b.location))
    setListingsToDisplay(temp);
    console.log(temp)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const description = e.target.description.value;
    const image = e.target.image.value;
    const location = e.target.location.value;
    const toSend = {description, image, location}
    fetch("http://localhost:6001/listings",{
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(toSend)
    })
      .then(r=> r.json())
      .then(data => {
        const temp = [...listingsToDisplay, data];
        setListingsToDisplay(temp);
      })
  }

  const [test, setTest] = useState("test")

  const changeTest = () => {
    test === "test"? setTest("untest") : setTest("test");
  }

  return (
    <div className="app">
      <Header test={test} changeTest={changeTest} searchCallback={handleSearch} alphabetize={alphabetize}/>
      <ListingsContainer listings={listingsToDisplay} handleDelete={handleDelete} onSubmit={onSubmit} changeTest={changeTest} test={test}/>
    </div>
  );
}

export default App;
