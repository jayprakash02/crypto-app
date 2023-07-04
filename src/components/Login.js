import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
const Login = ({ styles }) => {
  return (
    <div class="h-screen md:flex">
      {/* left  */}
      <div className="md:w-2/3  ">
        <img
          className="object-cover w-full h-full "
          src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        />
      </div>
      {/* right  */}
      <div className="md:w-1/2 flex justify-center items-center bg-gray-50">
        {/* card  */}
        <div className="shadow-md max-w-[350px] py-8 px-12 rounded-lg bg-white">
          <div className="w-16 flex justify-center items-center">
            <svg class="svg-icon" viewBox="0 0 20 20">
              <path d="M9.719,17.073l-6.562-6.51c-0.27-0.268-0.504-0.567-0.696-0.888C1.385,7.89,1.67,5.613,3.155,4.14c0.864-0.856,2.012-1.329,3.233-1.329c1.924,0,3.115,1.12,3.612,1.752c0.499-0.634,1.689-1.752,3.612-1.752c1.221,0,2.369,0.472,3.233,1.329c1.484,1.473,1.771,3.75,0.693,5.537c-0.19,0.32-0.425,0.618-0.695,0.887l-6.562,6.51C10.125,17.229,9.875,17.229,9.719,17.073 M6.388,3.61C5.379,3.61,4.431,4,3.717,4.707C2.495,5.92,2.259,7.794,3.145,9.265c0.158,0.265,0.351,0.51,0.574,0.731L10,16.228l6.281-6.232c0.224-0.221,0.416-0.466,0.573-0.729c0.887-1.472,0.651-3.346-0.571-4.56C15.57,4,14.621,3.61,13.612,3.61c-1.43,0-2.639,0.786-3.268,1.863c-0.154,0.264-0.536,0.264-0.69,0C9.029,4.397,7.82,3.61,6.388,3.61"></path>
            </svg>
          </div>
          <h2 className="font-semibold text-xl">Sign in to your account</h2>

          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            // validationSchema={loginSchema}
            onSubmit={(values) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <label className={styles?.label} htmlFor="UserID">
                Email
              </label>
              <Field className={styles?.field} id="userID" name="UserID" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="userID"
              />
              <label className={styles.label} htmlFor="password">
                Password
              </label>
              <Field className={styles.field} id="password" name="password" />
              <ErrorMessage
                component="a"
                className={styles.errorMsg}
                name="password"
              />
              <div className="mt-8">
                <button type="submit" className={styles.button}>
                  Login
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
