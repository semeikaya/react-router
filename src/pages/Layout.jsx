import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  const [classLink, setClassLink] = useState("default-link");

  return (
    <>
      <Header
        classLink={classLink}
        setClassLink={setClassLink}
      />
      <main className="main-body">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
