import React from "react";
import { Input } from "@mui/material";
import { Form } from "antd";


function AppInput(props) {
  const {
    placeholder = "Enter",
    type = "text",
    size = "large",
    onChange,
    name,
    errors,
    touched,
    required = false,
    label,
    containerProps,
    containerClassname,
  } = props;
  
  return (
    <Form.Item
      validateStatus={errors && touched ? "error" : ""}
      help={touched && errors ? errors : ""}
      label={label}
      className={`${containerClassname}`}
      {...containerProps}
    >
      <Input
        placeholder={placeholder}
        type={type}
        size={size}
        onChange={onChange}
        validateStatus={errors && touched ? "error" : ""}
        help={touched && errors ? errors : ""}
        name={name}
        required={required}
      />
    </Form.Item>
  );
}

export default AppInput;
