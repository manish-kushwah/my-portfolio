import { ThemeProvider } from "./providers/theme-provider";
import { MainLayout } from "./layouts/main-layout";
import HomePage from "../pages/home";
import { MantineProvider, createTheme } from "@mantine/core";
import { HygraphProvider } from "./providers/hygraph-provider";

const theme = createTheme({
  primaryColor: "indigo", // Adjusting indigo to match the accent #6d70ff
  fontFamily: "Geist Sans, sans-serif",
});

export const App = () => {
  return (
    <ThemeProvider>
      <HygraphProvider>
        <MantineProvider theme={theme} defaultColorScheme="dark">
          <MainLayout>
            <HomePage />
          </MainLayout>
        </MantineProvider>
      </HygraphProvider>
    </ThemeProvider>
  );
};
