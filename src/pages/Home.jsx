import Content from "../components/Content.jsx";
import Topbar from "../components/Topbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import React from "react";

export default function Home() {
  return (
    <div>
      <Topbar />
      <Sidebar />
      <Content />
    </div>
  );
}
