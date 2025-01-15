import React, { useState } from "react";
import { StyledTextField } from "./Input";
import { Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginForm = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

      const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
      ) => {
        event.preventDefault();
      };
  return (
    <form action="" className="text-left space-y-4">
      <div>
        <label htmlFor="" className="text-xs  w-full text-[#5E7078] ">
          Email <span className="text-red-500">*</span>
        </label>
        <StyledTextField
          type="email"
          placeholder="Enter your email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="" className="text-xs  w-full text-[#5E7078] ">
          Password<span className="text-red-500">*</span>
        </label>
        <StyledTextField
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          variant="outlined"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={showPassword ? "hide password" : "show password"}
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="flex justify-center">
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#007CB5",
            color: "white",
            fontWeight: 600,
            fontSize: "1.125rem",
            fontFamily: "inherit",
            px: "4rem", 
            py: "0.5rem", 
            borderRadius: "1.5rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#006699", 
            },
          }}
        >
          Sign In
        </Button>
      </div>
      <p className="text-[14px] text-center text-[#5E7078] font-normal ">
        By continuing, you agree to our{" "}
        <a href="" className="no-underline text-[#007CB5]">
          User Agreement
        </a>{" "}
        <br /> and acknowledge our{" "}
        <a href="" className="no-underline text-[#007CB5]">
          Privacy Policy
        </a>{" "}
        .
      </p>
    </form>
  );
};

export default LoginForm;
