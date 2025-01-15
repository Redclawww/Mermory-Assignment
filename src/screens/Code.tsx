import { Box, Button } from "@mui/material";
import { OTP } from "../components/OTP";
import React from "react";
import ScrollAnimation from "../components/scrollAnimation";

const Code = () => {
  const [otp, setOtp] = React.useState("");

  return (
    <div className="relative w-full h-full font-normal">
      <section className="bg-white flex flex-col items-center rounded-[24px] fixed left-[100px] top-[122px] p-10 font-semibold gap-4 w-full max-w-[556px]">
      <h1 className="text-4xl">We emailed you a code</h1>
      <p className="font-normal text-[16px]">
        Enter the verification code sent to: <strong>johndoe@gmail.com</strong>
      </p>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <OTP
          separator={<span></span>}
          value={otp}
          onChange={setOtp}
          length={6}
        />
      </Box>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#F0F0F0",
          color: "black",
          fontWeight: 600,
          fontSize: "0.875rem", 
          fontFamily: "inherit",
          px: "6rem", 
          py: "0.75rem", 
          borderRadius: "1.5rem",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#E0E0E0",
          },
          boxShadow: "none"
        }}
      >
        Verify
      </Button>
      <p className="text-[14px] text-center text-[#5E7078] font-normal mt-2">
        Didn’t get your code?{" "}
        <a href="" className="no-underline text-[#007CB5] font-semibold">
          Send a new code
        </a>
        .
      </p>
    </section>

    </div>
  );
};

export default Code;
