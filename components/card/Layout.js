import Header from "../header/Header";
import Router, { useRouter } from "next/router";
import FooterSticky from "../footer/FooterSticky";
function Layout({ children, navigation, category }) {
  const router = useRouter();
  console.log(router.route);

  return (
    <div className="max-w-6xl mx-auto relative flex flex-col min-h-screen">
      {router.route == "/products/[product]" ? null : <Header />}
      {/* {router.route == "/products/[product]" ? null : <Header />} */}
        <div className="relative min-h-screen">
        {children}
       
        <FooterSticky />
        
       
        </div>
     
 
    </div>
  );
}

export default Layout;
