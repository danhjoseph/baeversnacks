import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Mypark() {
  // const location = useLocation();
  // console.log(location)
  // get state from navigate in index.js
  const { state } = useLocation();
  const [parkCode, setParkCode] = useState(state);
  console.log(parkCode);

  // get park data from API
  const [parkData, setParkData] = useState([]);
  const [alertData, setAlertData] = useState([]);

  useEffect(() => {
    const getParkData = async () => {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/parks?parkCode=${parkCode}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9`
      );
      const data = await response.json();
      setParkData(data.data[0]);
    };
    getParkData();
  }, [parkCode]);

  useEffect(() => {
    const getAlertData = async () => {
      const response = await fetch(
        `https://developer.nps.gov/api/v1/alerts?parkCode=${parkCode}&api_key=y02YQZIE073ut1YQNZMW5vYHnHA4oxLRoG99EIV9` 
      );
      const data = await response.json();
      setAlertData(data.data[0]);
    };
    getAlertData();
  }, [parkCode]);

  //console.log(parkData);

  return (
    <div>
    <div>
      <h1>{parkData.fullName}</h1>
      <p>{parkData.description}</p>
      <p>{parkData.directionsInfo}</p>
      <p>{parkData.directionsUrl}</p>
      <p>{parkData.latitude}</p>
      <p>{parkData.longitude}</p>
      <p>{parkData.url}</p>
      <p>{parkData.weatherInfo}</p>
    </div>
    <div>
      <h2>Alerts:</h2>
      <ul>
        <h3>{alertData.title}</h3>
        <li>{alertData.description}</li>
      </ul>
    </div>
    </div>
  );
}
