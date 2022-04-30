import React from "react";
import { GiJewelCrown } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";
import { CgBoy, CgGirl } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";

import { List } from "./Styled";
import { NavLink } from "react-router-dom";

const Categories = () => {
  return (
    <List>
      <li>
        <NavLink to="/" activeClassName="selected">
          <AiFillHome />
        </NavLink>
      </li>
      <li>
        <NavLink to="/cuisine/electronics" activeClassName="selected">
          <FcElectronics />
          <span>Electronics</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/cuisine/jewelery" activeClassName="selected">
          <GiJewelCrown />
          <span>jewelery</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/cuisine/men's clothing" activeClassName="selected">
          <CgBoy />
          <span>men's clothing</span>
        </NavLink>
      </li>
      <li>
        <NavLink to="/cuisine/women's clothing" activeClassName="selected">
          <CgGirl />
          <span>wome's clothing</span>
        </NavLink>
      </li>
    </List>
  );
};

export default Categories;
