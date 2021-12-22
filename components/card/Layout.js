import Header from "../header/Header";
import Router, { useRouter } from "next/router";
import FooterSticky from "../footer/FooterSticky";
import { createContext, useState, useEffect } from "react";
export const UserContext = createContext();

function Layout({ children, navigation, category }) {
  const router = useRouter();


  useEffect(()=>{setSmallMenu(false)},[router.route])

  const [smallMenu, setSmallMenu] = useState(false);

  return (
    <div className="max-w-6xl mx-auto relative flex flex-col min-h-screen">
      <UserContext.Provider value={{ smallMenu, setSmallMenu }}>
        {router.route == "/products/[product]" ? null : <Header />}
        {/* {router.route == "/products/[product]" ? null : <Header />} */}
        <div className="relative min-h-screen">
          {children}
          <FooterSticky />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default Layout;
