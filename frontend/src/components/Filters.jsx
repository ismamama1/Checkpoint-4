import React from "react";

import {
  TextField,
  Autocomplete,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";

const options = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
];

function Filters() {
  return (
    <div className="h-70 p-5 bg-grey">
      <div className="flex flex-col md:flex-row gap-x-3 items-center md:flex-row justify-center">
        <FormControl>
          <FormLabel id="Media">Media</FormLabel>
          <RadioGroup row aria-labelledby="Media" name="Media">
            <FormControlLabel
              value="vinyl"
              control={<Radio color="secondary" />}
              label="Vinyl"
            />
            <FormControlLabel
              value="cd"
              control={<Radio color="secondary" />}
              label="CD"
            />
          </RadioGroup>
        </FormControl>
        <Autocomplete
          disablePortal
          id="combo-box-demo-1"
          options={options}
          // getOptionLabel={(option) => option.title.replace("&apos;E", "'É")}
          sx={{
            width: 300,
            mb: 1,
            "@media screen and (min-width: 48em)": {
              width: 200,
              mr: 1,
            },
          }}
          // onChange={(e, diplome) => setDiplome(diplome.id)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Genre"
              color="primary"
              variant="standard"
            />
          )}
        />
        <div className="flex justify-center m-2">
          <TextField
            id="artist"
            label="Search by artist"
            variant="standard"
            sx={{
              width: 300,
              mb: 1,
              "@media screen and (min-width: 48em)": {
                width: 200,
              },
            }}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex justify-center m-2">
          <TextField
            id="artist"
            label="Search by year"
            variant="standard"
            sx={{
              width: 300,
              mb: 1,
              "@media screen and (min-width: 48em)": {
                width: 200,
              },
            }}
            // onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default Filters;
