import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const AIRTABLE_KEY = process.env.REACT_APP_AIRTABLE_KEY;
const AIRTABLE_BASE = process.env.REACT_APP_AIRTABLE_BASE;

const URL = `https://api.airtable.com/v0/${AIRTABLE_BASE}/forum`;

const defaultForm = {
  name: "",
  emailAddress: "",
  comments: "",
};

export default function Forum() {
  const [getForum, setForum] = useState([]);
  const [input, setInput] = useState(defaultForm);

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchForumData = async () => {
      const res = await axios.post(URL, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      });
      console.log(res);
      setForum(res);
    };
    fetchForumData();
  }, []);
  return (
    <form>
      <input type="name" placeholder="Name" />
      <input
        type="email"
        // value={input.emailAddress}
        placeholder="Email Address"
      />
      <textarea rows="4" cols="20" />
      <button onSubmit={handleSubmit} type="submit">
        Submit
      </button>
    </form>
  );
}
