import classes from "./App.module.css";
import ProfileCard from "./component/ProfileCard";
import AddUser from "./component/AddUser";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [data, setData] = useState([]);
  const API_ENDPOINT = "https://reqres.in/api/users";
  const fetchData = async () => {
    try {
      const response = await axios.get(API_ENDPOINT);
      console.log(response.data.data);
      setData(response.data.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const sortAccordingId = () => {
    const sorted_data = [...data].sort((a, b) => {
      if (a.id < b.id) return -1;
      if (a.id > b.id) return 1;
      return 0;
    });
    setData(sorted_data);
  };

  const sortAccordingName = () => {
    const sorted_data = [...data].sort((a, b) => {
      if (a.first_name < b.first_name) return -1;
      if (a.first_name > b.first_name) return 1;
      return 0;
    });
    setData(sorted_data);
  };

  const sortAccordingEmail = () => {
    const sorted_data = [...data].sort((a, b) => {
      if (a.email < b.email) return 1;
      if (a.email > b.email) return -1;
      return 0;
    });
    setData(sorted_data);
  };

  return (
    <>
      <AddUser />
      <></>
      <div className={classes.cover}>
        <div className={classes.field}></div>
        <div className={classes.field} onClick={sortAccordingId}>
          Id
        </div>
        <div className={classes.field} onClick={sortAccordingName}>
          Name{" "}
        </div>
        <div className={classes.field} onClick={sortAccordingEmail}>
          Email
        </div>
      </div>
      {data.map((data) => (
        <ProfileCard data={data} key={data.id} />
      ))}
    </>
  );
}

export default App;
