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
    }).then((res) => {
      setCharacters(res.data.slice(1, 20));
      setLoading(false);
    });
  }, []);

  return (
    <div className="h-full w-full bg-black">
      <Filters setCharacters={setCharacters} />
      {loading && (
        <h1 className="h-[50rem] text-center text-6xl text-heading">
          Loading ...
        </h1>
      )}
      {!loading && (
        <div>
          <div className="flex flex-wrap justify-center p-2 md:px-[1rem] lg:px-[1.5rem] xl:px-[7rem]">
            {characters.map((character) => (
              <ListCards
                image={character.image}
                name={character.name}
                house={character.house}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default List;
