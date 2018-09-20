import React from "react";
import AccountGrid from "./AccountGrid";
import AccountUpdateForm from "./AccountUpdateForm";

const AccountPage = () => {
  return (
    <section className="my-account">
      <AccountGrid />
      <AccountUpdateForm />
    </section>
  );
};

export default AccountPage;
