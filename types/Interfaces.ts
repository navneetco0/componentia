export interface ThemeVariables {
  "--primary-color": string;
  "--secondary-color": string;
  "--background-color": string;
  "--text-color": string;
  "--ascent-color": string;
}

export interface NavbarThemeVariables {
  "--navbar-background-color": string;
  "--navbar-text-color": string;
  "--navbar-border-color": string;
  "--navbar-hover-background-color": string;
  "--navbar-hover-text-color": string;
}

export interface Theme {
  light: ThemeVariables;
  dark: ThemeVariables;
}

export interface NavbarTheme {
    light: NavbarThemeVariables;
    dark: NavbarThemeVariables;
}
