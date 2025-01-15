import { Button, styled } from "@mui/material";

export const LoginButton = styled(Button)({
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    color: '#001F2E',
    fontFamily: 'inherit',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    fontWeight: 'normal',
    border: '2px solid #E6E8EA',
    borderRadius: '8px',
    padding: '0.25rem 0',
    width: '100%',
    textTransform: 'none', 
    '&:hover': {
      backgroundColor: '#F0F0F0',
      border: '2px solid #E6E8EA',
    }
});



  