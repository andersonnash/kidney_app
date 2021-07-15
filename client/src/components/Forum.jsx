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

export default function Forum(props) {
  const [getForum, setForum] = useState([]);
  const [input, setInput] = useState(defaultForm);
  const [getForumData, setForumData] = useState([]);
  const [name, setName] = useState({});
  const [email, setEmail] = useState({});
  const [comments, setComments] = useState({});

  useEffect(() => {
    const getForumData = async () => {
      // setToggle((prevToggle) => !prevToggle);
      const res = await axios.get(URL, {
        headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
      });
      console.log(res);
      setForumData(res.data.records);
    };
    getForumData();
  }, [props.toggle]);

  // create useeffect that does an axios.get request for the forum data. dependecy array will need toggleFetch as a dependency
  // in the parent component/app.js create a usestate for togglefetcha nd settogglefetch initialize to false pass down togglefeth and settogglefetch to forum
  //in the handle submit after the succefsul post set togglefetch to the opposite to what it was
  // make usestae for all form data
  //. in the return map through forum data for each post render

  // useEffect(() => {}, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("handleSubmit");
    const fetchForumData = async () => {
      const res = await axios.post(
        URL,
        { fields: input },
        {
          headers: { Authorization: `Bearer ${AIRTABLE_KEY}` },
        }
      );
      console.log(res);
      setForum(res);
    };
    fetchForumData();
    props.setToggle((prevToggle) => !prevToggle);
  };
  return (
    <div>
      {getForumData.map((info) => {
        return (
          <div>
            <h2>{info.fields.name}</h2>
            <p>{info.fields.emailAddress}</p>
            <p>{info.fields.comments}</p>
          </div>
        );
      })}
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          name="name"
          placeholder="Name"
          value={input.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="emailAddress"
          value={input.emailAddress}
          // value={input.emailAddress}
          placeholder="Email Address"
          onChange={handleChange}
        />
        <textarea
          rows="4"
          cols="20"
          name="comments"
          value={input.comments}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
