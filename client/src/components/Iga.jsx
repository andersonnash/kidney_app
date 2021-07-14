import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/iga/rechvnhSuwGqo91h1`;

export default function Iga() {
  const [getIga, setIga] = useState({});

  useEffect(() => {
    const fetchIgaData = async () => {
      const res = await axios.get(URL, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      });
      console.log(res);
      setIga(res.data.fields);
    };
    fetchIgaData();
  }, []);

  return (
    <div>
      <h1>Living with IgA</h1>
      <section>
        <h2>{getIga.causes}</h2>
      </section>
    </div>
  );
}
