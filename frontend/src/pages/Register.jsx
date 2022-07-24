import React from "react";

import { TextField } from "@mui/material";

function Register() {
  return (
    <div className="flex flex-col items-center h-screen w-full bg-black">
      <h1 className="text-grey text-4xl font-heading mt-14">Register</h1>
      {/* Background Card */}
      <div className="flex flex-col h-[90%] w-[80%] md:w-[22%] lg:w-[18%] xl:w-[40%] rounded-md shadow-lg bg-beige m-6 xl:m-12">
        <div className="flex flex-col justify-center p-8">
          <TextField
            // {...field}
            label="Username"
            size="medium"
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
            // error={errors && errors.lastname}
            // helperText={
            //   errors.lastname?.type === "required" &&
            //   "Veuillez saisir votre mot de passe"
            // }
            // {...register("password", { required: true })}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;
