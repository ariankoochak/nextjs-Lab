import GeneralLayout from "@/layouts/GeneralLayout/GeneralLayout";
import UsersLayout from "@/layouts/UsersLayout/UsersLayout";
import "@/styles/globals.css";
import { usePathname } from "next/navigation";

export default function App({ Component, pageProps }) {
  const pathname = usePathname();
  const Layout = /^\/users.*?$/.test(pathname) ? UsersLayout : GeneralLayout;
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    );
}
