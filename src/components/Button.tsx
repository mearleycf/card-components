import styled, { useTheme } from "styled-components";
import Icon from "./Icon";

export enum BorderStyle {
  None = "none",
  Dotted = "dotted",
  Dashed = "dashed",
  Solid = "solid",
  Double = "double",
  Groove = "groove",
  Ridge = "ridge",
  Inset = "inset",
  Outset = "outset",
}

interface ButtonProps {
  onClick: () => void;
  actionText?: string;
  disabled?: boolean;
  backgroundColor?: string;
  color?: string;
  borderColor?: string;
  borderSize?: string;
  borderStyle?: BorderStyle | BorderStyle[];
  borderRadius?: string;
  padding?: string;
  margin?: string;
  cursor?: string;
  hoverBackgroundColor?: string;
  hoverColor?: string;
  actionIconLeft?: string;
  actionIconRight?: string;
  actionIconCenter?: string;
  buttonType?: "button" | "submit" | "reset";
}

const ActionButton = styled.button.withConfig({
  shouldForwardProp: (prop) =>
    ![
      "hoverBackgroundColor",
      "hoverColor",
      "color",
      "backgroundColor",
      "borderColor",
      "borderRadius",
      "padding",
      "margin",
      "cursor",
      "actionIconLeft",
      "actionIconRight",
      "actionIconCenter",
      "borderSize",
      "borderStyle",
    ].includes(prop),
})<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor, theme }) =>
    backgroundColor || theme.colors.primaryMain || "#000000"};
  color: ${({ color, theme }) =>
    color || theme.colors.primaryContrast || "#ffffff"};
  border: ${({ borderColor, borderSize, borderStyle, theme }) => {
    const size = borderSize || "1px";
    const style = Array.isArray(borderStyle)
      ? borderStyle.join(" ")
      : borderStyle || BorderStyle.Solid;
    const color = borderColor || theme.colors.primaryMain || "#cccccc";
    return `${size} ${style} ${color}`;
  }};
  border-radius: ${({ borderRadius, theme }) =>
    borderRadius || theme.spacing?.xs || "1px"};
  padding: ${({ padding, theme }) =>
    padding || theme.spacing?.sm || "8px 16px"};
  margin: ${({ margin, theme }) => margin || theme.spacing?.m || "8px"};
  cursor: ${({ cursor }) => cursor || "pointer"};
  &:hover {
    background-color: ${({ hoverBackgroundColor, theme }) =>
      hoverBackgroundColor || theme.colors.secondaryDark || "#000000"};
    color: ${({ hoverColor, theme }) =>
      hoverColor || theme.colors.secondaryContrast || "#ffffff"};
  }
`;

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  buttonType = "button",
  onClick,
  actionIconCenter,
  actionIconLeft,
  actionIconRight,
  actionText,
  ...props
}) => {
  const theme = useTheme();
  const iconMargin = `0 ${theme.spacing?.sm || "8px"}`;

  return (
    <ActionButton
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
      aria-label={actionText}
      {...props}
    >
      {actionIconLeft && !actionIconCenter && (
        <Icon name={actionIconLeft} size="1.25em" margin={iconMargin} />
      )}
      {actionIconCenter && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {<Icon name={actionIconCenter} size="1.5em" margin="8px" />}
        </div>
      )}
      <>
        {actionText && <span>{actionText}</span>}
        {actionIconRight && (
          <Icon name={actionIconRight} size="1.25em" margin="0 8px" />
        )}
      </>
    </ActionButton>
  );
};

export default Button;
