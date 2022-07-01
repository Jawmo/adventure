import React from "react";
import { useState } from "react";
import { useSession } from "../hooks/useSession";
import { HelloWorld } from "../components/HelloWorld/HelloWorld";

export const HomeView: React.FC = () => {
  const { data: session, isLoading, isError, error } = useSession();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <pre>{error}</pre>;
  }

  return session ? (
    <div>
      <HelloWorld name={session.username} />
    </div>
  ) : null;
};
