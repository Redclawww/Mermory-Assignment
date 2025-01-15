import { styled, TextField } from "@mui/material";

export const StyledTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#F8F9F9",
      borderRadius: "0.5rem",
      "& input": {
        padding: "10px 16px",
        fontSize: "0.875rem",
        fontWeight: "normal",
        fontFamily: "inherit"
      },
      "& fieldset": {
        borderWidth: "2px",
        borderColor: "#E6E8EA",
      },
      "&:hover fieldset": {
        borderColor: "#E6E8EA",
      },
    },
    marginTop: "0.5rem",
    width: "100%",
  });


  export const StyledBdayTextField = styled(TextField)({
    "& .MuiOutlinedInput-root": {
      backgroundColor: "transparent",
      borderRadius: "0.5rem",
      "& input": {
        padding: "10px 16px",
        fontSize: "0.875rem",
        fontWeight: "normal",
        fontFamily: "inherit"
      },
      "& fieldset": {
        borderWidth: "2px",
        borderColor: "#E6E8EA",
      },
      "&:hover fieldset": {
        borderColor: "#E6E8EA",
      },
    },
    marginTop: "0.5rem",
    width: "100%",
  });
  