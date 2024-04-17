import React from "react";
import { IconBaseProps } from "react-icons";
import * as AllIcons from "react-icons/fa6";
import { IconContext } from "react-icons";

interface IconProps extends IconBaseProps {
  name: string;
  size?: string;
  color?: string;
  padding?: string;
  margin?: string;
}

const iconComponents: { [key: string]: React.FC<IconBaseProps> } = {
  ...AllIcons,
};

const Icon: React.FC<IconProps> = ({ name, size, color, padding, margin }) => {
  const IconComponent = iconComponents[name] || null;

  return IconComponent ? (
    <IconContext.Provider
      value={{ color, size: size || "1em", style: { padding, margin } }}
    >
      <IconComponent />
    </IconContext.Provider>
  ) : null;
};

export default Icon;
