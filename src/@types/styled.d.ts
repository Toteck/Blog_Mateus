import theme from "../theme/theme";

declare module "styled-components" {
  type ThemeType = typeof theme;
  interface DefaultTheme extends ThemeType {}
}
