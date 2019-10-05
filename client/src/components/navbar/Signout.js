import React from "react";
import { Redirect } from "react-router-dom";

export default function Signout() {
  return (
    <>
      {localStorage.removeItem("token")}
      <Redirect to="/landing" />
    </>
  );
}
