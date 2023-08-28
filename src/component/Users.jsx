import React, { useState } from "react";
import Displayuser from "./Displayuser";
import styles from './style.module.css'
import { FaSearch } from "react-icons/fa";

const Users = () => {
  const [data, setData] = useState({});
  const [username, setUsername] = useState("");
  const [searched,setSearched] = useState(false)

  const onChangeHandler = e => {
    setUsername(e.target.value);
  };

  const submitHandler = async e => {
    e.preventDefault();

    const profile = await fetch(`https://api.github.com/users/${username}`);
    const profileJson = await profile.json();
    setSearched(true)
    if (profileJson) {
      setData(profileJson);
    }
  };
  return (
    <>
      <div style={{ padding: 20 }}>
        <div className={styles.searchh}  >
          <div className={styles.input}>
            <input className={styles.input}
              placeholder="search username here..."
              type="text"
              value={username}
              onChange={onChangeHandler}
            />
          </div>

          <button
            className={styles.submit}
            type="submit"
            onClick={submitHandler}
          >
             <FaSearch id="search-icon" className={styles.icon} />
          </button>
          
        </div>
        {searched && <Displayuser data={data} />}
      </div>
    </>
  );
};
export default Users;