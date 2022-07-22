import { React, useState, useEffect } from "react";
import axios from "axios";

import Filters from "@components/Filters";
import ListCards from "@components/ListCards";

function List() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "get",
      url: "http://hp-api.herokuapp.com/api/characters",
    }).then((response) => {
      setCharacters(response.data.slice(1, 20));
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <h1>Loading ...</h1>}
      {!loading && (
        <div>
          <Filters />
          {characters.map((character) => (
            <ListCards
              image={character.image}
              name={character.name}
              house={character.house}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default List;
