import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import AppInput from "../Input/Input";
import AppButton from "../Button/Button";
const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    gender: Yup.string().required("Gender is required"),
    age: Yup.number().required("age is required"),
});


function NameForm({ handlePhoneNumberForm }) {
    const initialValues = {
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
                handlePhoneNumberForm();
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
                        placeholder="Enter your firstName"
                        values={values.firstName}
                        touched={touched.firstName}
                        errors={errors.firstName}
                        onChange={handleChange}
                        // label="enter your emai\l"
                        name="firstName"
                        type="text"
                    />
                    <br />
                    <AppInput
                        placeholder="Enter your lastName"
                        values={values.lastName}
                        touched={touched.lastName}
                        errors={errors.lastName}
                        onChange={handleChange}
                        // label="enter your emai\l"
                        name="lastName"
                        type="text"
                    />
                    <br/>
                    <AppInput
                        placeholder="Enter your gender"
                        values={values.gender}
                        touched={touched.gender}
                        errors={errors.gender}
                        onChange={handleChange}
                        // label="enter your emai\l"
                        name="gender"
                        type="text"
                    />
                    <br />
                    <AppInput
                        placeholder="Enter your age"
                        values={values.age}
                        touched={touched.age}
                        errors={errors.age}
                        onChange={handleChange}
                        // label="enter your emai\l"
                        name="age"
                        type="text"
                    />
                    <br />
                    <AppButton type="submit" text="next" disabled={isSubmitting} />
                </form>
            )}
        </Formik>
    );
}

export default NameForm;
