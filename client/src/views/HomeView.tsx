import React from "react";
import { useState } from "react";
import { Input } from "../core-ui/components/input";
import { Layout } from "../core-ui/components/layout";
import { HelloWorld } from "../components/HelloWorld/HelloWorld";

export const HomeView: React.FC = () => {
  const [name, setName] = useState<string | undefined>(undefined);

  return (
    <Layout>
      <HelloWorld name={name} />

      <input type="textarea" />
      <label>
        Your name:\
        <Input
          type="text"
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
      </label>
    </Layout>
  );
};
