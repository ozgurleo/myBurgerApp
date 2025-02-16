import React from "react";
import Aux from "../../hoc/Auxiliary";

const layout = props => (
  <Aux>
    <div>Toolbar, SidedDrawer, Backdrop</div>
    <main>{props.children}</main>
  </Aux>
);
export default layout;