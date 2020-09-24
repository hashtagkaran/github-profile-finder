import React, { useState } from "react";

function UserApi() {
  const [name, setName] = useState();
  const [profile, setProfile] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    const url = `https://api.github.com/users/${name}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProfile(data));
  };

  const imgUrl = profile.avatar_url;
  return (
    <div>
      {profile.length === 0 ? <h4>Find your Github profile</h4> : ""}
      {profile.length === 0 ? (
        ""
      ) : (
        <div>
          <img
            style={{ width: 200, height: 200 }}
            src={imgUrl}
            alt="profile"
          ></img>
          <h1>"{profile.login}"</h1>
          <h2>Follower : {profile.followers}</h2>
          <h2>Following : {profile.following}</h2>
        </div>
      )}

      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Enter your Github username"
          style={{ padding: 12, width: 300, height: 30, fontSize: 20 }}
          onChange={handleChange}
        ></input>
        <button style={{ padding: 15, fontSize: 20 }}>Submit</button>
      </form>
    </div>
  );
}

export default UserApi;
