import { useState, useEffect } from "react";
import "./App.css";
// import axios from "axios";
import axios from "./Axios";

// const API = "https://jsonplaceholder.typicode.com";

function App() {
  // const [myData, setMyData] = useState([]);
  // const [isError, setError] = useState("");

  // Note: using Promises

  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))

  //     .catch((error) => setError(error.message));

  // }, []);

  // Note : async await

  // const getAPiData = async () => {
  // try {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
  //   setMyData(res.data)
  // } catch (error) {
  //   setError(error.message)
  // }

  // }

  // useEffect(() => {
  //   getAPiData()
  // }, [])

  // store APi url 

  // const getAPiData = async (url) => {
  //   try {
  //     const res = await axios.get(url);
  //     setMyData(res.data);
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

  // useEffect(() => {
  //   getAPiData(`${API}/posts`);
  // }, []);

  // fetch APi from the Axios file

  const getAPiData = async () => {
    try {
      const res = await axios.get("/posts");
      setMyData(res.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAPiData();
  }, []);

  return (
    <>
      <h1>AXios tutorial</h1>
      {isError === "" || <h2>{isError}</h2>}
      <div className="grid">
        {myData?.slice(0, 12)?.map((post) => {
          const { id, title, body } = post;
          return (
            <div className="card" key={id}>
              <h2>{title.slice(0, 14).toUpperCase()}</h2>
              <p>{body.slice(0, 100)}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
