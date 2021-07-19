import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import { Route } from "react-router-dom";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/iga`;

export default function Iga() {
  const [getIga, setIga] = useState([]);

  useEffect(() => {
    const fetchIgaData = async () => {
      const res = await axios.get(URL, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      });
      console.log(res);
      setIga(res.data.records);
    };
    fetchIgaData();
  }, []);

  return (
    <div className="igaInfoContainer">
      <Route path="/transplant">
        <Navbar />
      </Route>
      {getIga.map((info, index) => {
        return (
          <div key={index}>
            <h2>{info.fields.question}</h2>
            <p>{info.fields.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}
