import fetcher from "@/services/fetcher";
import "@/styles/globals.css";
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }) {
    return (
        <SWRConfig value={{fetcher}}>
            <Component {...pageProps} />
        </SWRConfig>
    );
}
