import React, {useState} from "react";
import Data from "./data.json";
import "../src/App.css";

function App() {
  const [query, setQuery] = React.useState("");
  const filtered = query.length === 0;

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <input placeholder="Pesquise o produto" value={query} onChange={handleSearchChange} />

      {filtered ? (
        <div className="containernull">
          <p>Pesquise</p>
        </div>
      ) : (
        Data.filter((post) => {
          if (post.modelo.toLowerCase().includes(query.toLowerCase())) {
            return post;
          } else if (post.manual_url.toLowerCase().includes(query.toLowerCase())) {
            return post;
          } else if (post.setor.toLowerCase().includes(query.toLowerCase())) {
            return post;
          }
        }).map((post, index) => (
          <div className="box" key={index}>
            <div className="boxContent">
              <p>{post.modelo}</p>
              <p>{post.setor}</p>
              <p>{post.manual_url}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}

export default App;
