import React from "react";

import { TextField, Autocomplete } from "@mui/material";

const options = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

function List() {
  return (
    <div>
      <div className="h-70 bg-black flex flex-col items-center md:flex-row justify-center">
        <Autocomplete
          disablePortal
          id="combo-box-demo-1"
          options={options}
          // getOptionLabel={(option) => option.title.replace("&apos;E", "'É")}
          sx={{
            width: 300,
            mb: 1,
            "@media screen and (min-width: 48em)": {
              mr: 1,
            },
          }}
          // onChange={(e, diplome) => setDiplome(diplome.id)}
          renderInput={(params) => (
            <TextField {...params} label="Diplôme" color="primary" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo-2"
          options={options}
          // getOptionLabel={(option) => option.job.replace("&apos;E", "'É")}
          sx={{
            width: 300,
            mb: 1,
            "@media screen and (min-width: 48em)": {
              mr: 1,
            },
          }}
          // onChange={(e, profession) => setProfession(profession.id)}
          renderInput={(params) => (
            <TextField {...params} label="Profession" color="primary" />
          )}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo-3"
          options={options}
          // getOptionLabel={(option) => option.year}
          sx={{
            width: 300,
            mb: 1,
            "@media screen and (min-width: 48em)": {
              mr: 1,
            },
          }}
          // onChange={(e, years) => setYears(years.id)}
          renderInput={(params) => (
            <TextField {...params} label="Année" color="primary" />
          )}
        />
      </div>
    </div>
  );
}

export default List;
