import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <h1>Living with IgA</h1>
      <div className="iga">
        <h2>{getIga[6]?.fields?.question}</h2>
        <p>{getIga[6]?.fields?.explanation}</p>
        <h2>{getIga[0]?.fields?.question}</h2>
        <p>{getIga[0]?.fields?.explanation}</p>
        <h2>{getIga[2]?.fields?.question}</h2>
        <p>{getIga[2]?.fields?.explanation}</p>
        <h2>{getIga[1]?.fields?.question}</h2>
        <p>{getIga[1]?.fields?.explanation}</p>
        <h2>{getIga[3]?.fields?.question}</h2>
        <p>{getIga[3]?.fields?.explanation}</p>
        <h2>{getIga[4]?.fields?.question}</h2>
        <p>{getIga[4]?.fields?.explanation}</p>
        <h2>{getIga[5]?.fields?.question}</h2>
        <p>{getIga[5]?.fields?.explanation}</p>
      </div>
    </div>
  );
}
