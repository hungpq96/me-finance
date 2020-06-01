import React from "react";

import Day from "../Day";
import ItemEditor from "../ItemEditor";

const Viewer = () => {
  return (
    <div>
      <ItemEditor />
      <Day />
      <Day />
      <Day />
      <Day />
      <Day />
    </div>
  );
};

export default Viewer;
