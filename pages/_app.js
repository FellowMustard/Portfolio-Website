import Header from "../components/header";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Header>
        <Component {...pageProps} />
      </Header>
    </ThemeProvider>
  );
}

export default MyApp;
