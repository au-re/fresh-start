import Button from "antd/lib/button";
import ButtonStyle from "./Button.style";
import React from "react";

/**
 * A custom Button
 *
 */
const MyButton = ({ children, primary, ...rest }) =>
  (<Button {...rest}>{children}</Button>);

export default ButtonStyle(MyButton);
