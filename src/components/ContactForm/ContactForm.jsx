import { Field, Form, Formik } from "formik";
import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { ErrorMessage } from "formik";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ onAddUser }) => {
  const handleSubmit = (values, actions) => {
    onAddUser(values);
    actions.resetForm();
    console.log(values);
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.form}>
          <label className={css.label}>
            <span>Name</span>
            <Field className={css.input} type="text" name="name" />
            <ErrorMessage name="name" component="span" className={css.error} />
          </label>
          <label className={css.label}>
            <span>Number</span>
            <Field className={css.input} type="text" name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={css.error}
            />
          </label>
          <button className={css.button} type="submit">
            Add contacts
          </button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
