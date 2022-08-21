import React from "react";
import Button from '@mui/material/Button';
function AppButton(props) {
  const { type = "submit", text = "Submit", onClick, disabled = false } = props;
  console.log(type);
  return (
    <Button type={type} onClick={onClick} disabled={disabled} variant="contained">
      {text}
    </Button>
  );
}

export default AppButton;
