import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/transplant`;

export default function Transplant() {
  const [getTransplantInfo, setTransplantInfo] = useState([]);

  useEffect(() => {
    const fetchIgaData = async () => {
      const res = await axios.get(URL, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      });
      console.log(res);
      setTransplantInfo(res.data.records);
    };
    fetchIgaData();
  }, []);

  return (
    <div className="TransplantContainer">
      {getTransplantInfo.map((info) => {
        return (
          <div>
            <h2>{info.fields.questions}</h2>
            <p>{info.fields.explanation}</p>
          </div>
        );
      })}
    </div>
  );
}
