import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress"; //nprogress module
import "nprogress/nprogress.css"; //styles of nprogress
import Header from "../components/header/Header";
import Layout from "../components/card/Layout"
//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  console.log(router.route);
  return (
    <div className="max-w-6xl mx-auto">
      <Layout>
      {/* {router.route == "/products/[product]" ? null : <Header />} */}
      <Component {...pageProps} />;
      </Layout>
    </div>
  );
}

export default MyApp;
