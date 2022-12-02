import "../styles/globals.css";
import { ThemeProvider } from "../context/ThemeProvider";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      value={{
        defaultColor: "sky",
        defaultRadius: "none",
      }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
