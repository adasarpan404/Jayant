import React from 'react'
import { Formik } from "formik";
import * as Yup from "yup";
import AppInput from '../Input/Input';
import AppButton from '../Button/Button';
import { useNavigate } from 'react-router-dom'

const validationSchema = Yup.object().shape({
    phonenumber: Yup.string()
        .length(10, "phone number must 10")
        .matches('[0-9]{10}', "Invalid Phone number")
        .required("phone is required"),
  });
function PhoneNumber() {
    const History = useNavigate();
    const initialValues = {
        phonenumber: ""
    }
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        History('/phoneVerification')
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
            placeholder="Enter your phone number"
            values={values.phonenumber}
            touched={touched.phonenumber}
            errors={errors.phonenumber}
            onChange={handleChange}
            // label="enter your email"
            name="phonenumber"
            type="tel"
          />
          <br />
          <AppButton type="submit" text="next" disabled={isSubmitting} />
        </form>
      )}
    </Formik>
  )
}

export default PhoneNumber