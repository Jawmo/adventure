import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import { useSession } from "../hooks/useSession";
import { useLogin } from "../hooks/useLogin";

export function LoginView(): JSX.Element {
  const { data: session, isLoading, isError } = useSession();
  const login = useLogin();
  const navigate = useNavigate();
  const initialValues = { email: "", password: "" };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {session ? <Navigate to="/" /> : null}

      <Formik
        initialValues={initialValues}
        onSubmit={({ email, password }) =>
          login({ email, password }).then(() => navigate("/"))
        }
      >
        <Form>
          <Field name="email" type="email" />
          <Field name="password" type="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
