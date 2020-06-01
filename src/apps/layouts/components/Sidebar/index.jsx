import React, { useState } from "react";
import { values } from "lodash";

import routes from "routes";
import { MenuWrapper, MenuDivider } from "./styles";
import AppIcon from "../AppIcon";
import Tab from "../Tab";

const SideBar = () => {
  const [tab, setTab] = useState(0);

  return (
    <MenuWrapper>
      <AppIcon />
      <MenuDivider />

      {values(routes).map(route => (
        <div key={route.id}>
          <Tab
            to={route.url}
            title={route.name}
            active={route.id === tab}
            onClick={() => setTab(route.id)}
          />
          <MenuDivider />
        </div>
      ))}
    </MenuWrapper>
  );
};

export default SideBar;
