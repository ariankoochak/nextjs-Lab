import GeneralLayout from "@/layouts/GeneralLayout/GeneralLayout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <GeneralLayout>
      <Component {...pageProps} />
    </GeneralLayout>
    );
}
