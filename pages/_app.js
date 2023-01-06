import { Header, Footer } from "../components/";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="mx-auto max-w-screen-2xl h-screen">
      <Header />
      <div className="h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
