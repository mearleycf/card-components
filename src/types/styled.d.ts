import "styled-components";
import { Theme } from "../styles/theme.tsx";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
