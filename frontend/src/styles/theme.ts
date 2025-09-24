import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#9560be",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f5f5f5",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
      marginBottom: "1rem",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
            cursor: "pointer",
          },
          maxWidth: "357px",
          width: "100%",
        },
      },
    },
    // Настройка для иконок в карточках
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          "&.card-icon": {
            color: "#9560be",
            fontSize: "35px",
          },
        },
      },
    },
  },
});
