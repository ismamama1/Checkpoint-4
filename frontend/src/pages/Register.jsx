import React from "react";

import Button from "@components/Button";
import { TextField } from "@mui/material";

function Register() {
  return (
    <div className="flex flex-col items-center h-full w-full bg-black">
      <h1 className="text-grey text-4xl font-heading mt-8 md:mt-14 p-5">
        Create your profile
      </h1>
      <div className="flex flex-col h-[90%] w-[80%] md:w-[22%] lg:w-[18%] xl:w-[40%] rounded-md shadow-lg bg-beige m-6 xl:m-12">
        <div className="flex flex-col items-center gap-y-4 p-8 mt-8">
          <TextField
            // {...field}
            label="Username"
            size="medium"
            variant="standard"
            sx={{
              width: 250,
              mb: 1,
              "@media screen and (min-width: 48em)": {
                width: 300,
              },
            }}
            // error={errors && errors.lastname}
            // helperText={
            //   errors.lastname?.type === "required" &&
            //   "Veuillez saisir votre email"
            // }
            // {...register("email", { required: true })}
          />
          <TextField
            // {...field}
            label="Email"
            size="medium"
            variant="standard"
            sx={{
              width: 250,
              mb: 1,
              "@media screen and (min-width: 48em)": {
                width: 300,
              },
            }}
            // error={errors && errors.lastname}
            // helperText={
            //   errors.lastname?.type === "required" &&
            //   "Veuillez saisir votre mot de passe"
            // }
            // {...register("password", { required: true })}
          />
          <TextField
            // {...field}
            label="Password"
            size="medium"
            type="password"
            variant="standard"
            sx={{
              width: 250,
              mb: 1,
              "@media screen and (min-width: 48em)": {
                width: 300,
              },
            }}
            // error={errors && errors.lastname}
            // helperText={
            //   errors.lastname?.type === "required" &&
            //   "Veuillez saisir votre mot de passe"
            // }
            // {...register("password", { required: true })}
          />
          <TextField
            // {...field}
            label="Confirm password"
            size="medium"
            type="password"
            variant="standard"
            sx={{
              width: 250,
              mb: 1,
              "@media screen and (min-width: 48em)": {
                width: 300,
              },
            }}
            // error={errors && errors.lastname}
            // helperText={
            //   errors.lastname?.type === "required" &&
            //   "Veuillez saisir votre mot de passe"
            // }
            // {...register("password", { required: true })}
          />
        </div>
        <div className="flex justify-end mt-7 mr-14 mb-7">
          <Button content="Register" link="" />
        </div>
      </div>
      <div className="flex justify-center mb-20 mt-15 md:mb-20">
        <Button content="Back to list" link="/list" />
      </div>
    </div>
  );
}

export default Register;
