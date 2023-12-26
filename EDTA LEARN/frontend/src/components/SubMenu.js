import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
  list-style: none;
  heigth: 70px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 700;

  &:hover {
    border-left: 5px solid #99b898;
    background-color: #ffffff20;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #99b89895;
  height: 70px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.2rem;
  font-weight: 700;

  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)
  return (
    <>
      <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav && item.subNav.map((item, index) => {
        return (
            <DropdownLink to={item.path} key={index}>
                {item.icon}
                <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
        )
      })}
    </>
  );
};

export default SubMenu;
