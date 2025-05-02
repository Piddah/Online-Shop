import React from "react";
import "../assets/css/topbar.css";
import { TfiSearch } from "react-icons/tfi";
import { VscMenu } from "react-icons/vsc";
import { VscAccount } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import { SlHandbag } from "react-icons/sl";
import { SlHeart } from "react-icons/sl";
import Logo from "../assets/images/Logo.png";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="wrapper-left">
          <div className="menu-icon-wrapper">
            <VscMenu className="menu-icon" />
          </div>
          <div className="search-wrapper">
            <TfiSearch className="search-icon" />
            <input
              type="text"
              id="search"
              autoComplete="off"
              placeholder="Search"
              className="searchInput"
            ></input>
          </div>
        </div>

        <div className="wrapper-mid">
          <img src={Logo} width="150px" alt="" z-index="-1" />
        </div>

        <div className="wrapper-right">
          <div className="nav-icons">
            <div>
              <VscAccount className="profile-icon" />
            </div>
            <div>
              <SlHandbag className="cart-icon" />
            </div>
            <div>
              <SlHeart className="heart-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
