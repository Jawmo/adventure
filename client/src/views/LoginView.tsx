import React from "react";
import { Navigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";

import { useSession } from "../hooks/useSession";
import { useLogin } from "../hooks/useLogin";

export function LoginView(): JSX.Element {
  const { data: session, isLoading } = useSession();
  const login = useLogin();
  const initialValues = { email: "", password: "" };

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {session ? <Navigate to="/" /> : null}

      <Formik initialValues={initialValues} onSubmit={login}>
        <Form>
          <Field name="email" type="email" />
          <Field name="password" type="password" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}
