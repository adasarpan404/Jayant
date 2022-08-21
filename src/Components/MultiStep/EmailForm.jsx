import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import AppInput from "../Input/Input";
import AppButton from "../Button/Button";
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});
function EmailForm({ handleNameForm }) {
  const initialValues = {
    email: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleNameForm();
        console.log(values);
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <AppInput
            placeholder="Enter your mail"
            values={values.email}
            touched={touched.email}
            errors={errors.email}
            onChange={handleChange}
            // label="enter your email"
            name="email"
            type="email"
            containerProps={{
                colon: false
              }}
            containerClassname="mb-0"
            

          />
          <br />
          <AppButton type="submit" text="next" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  );
}

export default EmailForm;
