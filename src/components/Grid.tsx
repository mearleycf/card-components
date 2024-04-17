import styled from "styled-components";

export enum Display {
  Block = "block",
  Inline = "inline",
  InlineBlock = "inline-block",
  None = "none",
  Grid = "grid",
  Flex = "flex",
  InlineFlex = "inline-flex",
  InlineGrid = "inline-grid",
  FlowRoot = "flow-root",
  Contents = "contents",
  BlockAndFlex = "block flex",
  BlockAndFlow = "block flow",
  BlockAndFlowRoot = "block flow-root",
  BlockAndGrid = "block grid",
  InlineAndFlex = "inline flex",
  InlineAndFlow = "inline flow",
  InlineAndFlowRoot = "inline flow-root",
  InlineAndGrid = "inline grid",
}

export enum GridJustifyItems {
  Start = "start",
  End = "end",
  Center = "center",
  Stretch = "stretch",
  Baseline = "baseline",
}

export enum GridAlignItems {
  Start = "start",
  End = "end",
  Center = "center",
  Stretch = "stretch",
  Baseline = "baseline",
}

export interface GridLayoutConfig {
  extraSmall?: string;
  small?: string;
  medium?: string;
  large?: string;
  extraLarge?: string;
  default?: string;
}

interface GridProps {
  display?: Display;
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  gridGap?: string;
  justifyContent?: GridJustifyItems;
  alignItems?: GridAlignItems;
  children?: React.ReactNode;
  gridLayoutConfig?: GridLayoutConfig;
}

const Grid = styled.div.withConfig({
  shouldForwardProp: (propName) =>
    ![
      "display",
      "gridLayoutConfig",
      "gridGap",
      "justifyContent",
      "alignItems",
    ].includes(propName),
})<GridProps>`
  display: ${({ display }) => display || "grid"};
  grid-template-columns: ${({ gridLayoutConfig }) =>
    gridLayoutConfig?.default || "repeat(3, 1fr)"};
  gap: ${({ gridGap, theme }) => gridGap || theme.spacing?.m};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};

  @media ${({ theme }) => theme.mediaQueries?.extraSmall} {
    grid-template-columns: ${({ gridLayoutConfig }) =>
      gridLayoutConfig?.extraSmall || "1fr"};
  }

  @media ${({ theme }) => theme.mediaQueries?.medium} {
    grid-template-columns: ${({ gridLayoutConfig }) =>
      gridLayoutConfig?.medium || "repeat(2, 1fr)"};
  }

  @media ${({ theme }) => theme.mediaQueries?.large} {
    grid-template-columns: ${({ gridLayoutConfig }) =>
      gridLayoutConfig?.large || "repeat(3, 1fr)"};
  }
`;

const GridComponent: React.FC<GridProps> = ({
  display,
  gridLayoutConfig,
  gridGap,
  justifyContent,
  alignItems,
  children,
}) => {
  return (
    <Grid
      display={display}
      gridLayoutConfig={
        gridLayoutConfig || {
          extraSmall: "1fr",
          medium: "repeat(2, 1fr)",
          large: "repeat(3, 1fr)",
          default: "repeat(3, 1fr)",
        }
      }
      gridGap={gridGap}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Grid>
  );
};

export default GridComponent;
