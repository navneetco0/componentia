import { NavbarTheme, Theme } from "@/types/Interfaces";

export const themes: Theme = {
  light: {
    "--primary-color": "#3498db",
    "--secondary-color": "#e74c3c",
    "--background-color": "#f5f5f5",
    "--text-color": "#000",
    "--ascent-color": "#f39c12",
  },
  dark: {
    "--primary-color": "#ff9800",
    "--secondary-color": "#9c27b0",
    "--background-color": "#333333",
    "--text-color": "#f5f5f5",
    "--ascent-color": "#00bcd4",
  },
};

export const navbarThemes : NavbarTheme = {
  light: {
    "--navbar-background-color": "#56CCF2",
    "--navbar-text-color": "#111111",
    "--navbar-hover-background-color": "#e7e7e7",
    "--navbar-border-color": "#e5e5e5",
    "--navbar-hover-text-color": "#fff",
  },
  dark: {
    "--navbar-background-color": "#0A1929",
    "--navbar-text-color": "#f5f5f5",
    "--navbar-border-color": "#444444",
    "--navbar-hover-background-color": "#4caf50",
    "--navbar-hover-text-color": "#fff",
  },
};
