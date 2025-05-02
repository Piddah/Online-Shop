import React from "react";
import "../assets/css/sidebar.css";
import { useState } from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="top">
          <h1>Sidebar</h1>
        </div>
        <div className="center"></div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}
