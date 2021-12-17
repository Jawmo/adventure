import React from "react";
import { useState } from "react";
import { Input } from "../core-ui/components/input";
import { Layout } from "../core-ui/components/layout";
import { HelloWorld } from "../components/HelloWorld/HelloWorld";
import { Textarea } from "../core-ui/components/text-area";
import { Color } from "../core-ui/properties/color";

export const HomeView: React.FC = () => {
  const [name, setName] = useState<string | undefined>(undefined);

  return (
    <Layout display="flex" flexDirection="column" width="100%">
      <Layout
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100rem"
        backgroundColor={Color.Green}
      >
        <Layout>
          <HelloWorld name={name} />
        </Layout>

        <Textarea
          name="name"
          onChange={(event) => setName(event.target.value)}
        />
        <label>
          Your name:
          <Input
            type="text"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
        </label>
      </Layout>
    </Layout>
  );
};
