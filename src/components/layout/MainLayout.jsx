import PageWrapper from "./PageWrapper";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <PageWrapper>
      <Navbar />
      <main className="pt-(--header-offset)">
        <Outlet />
      </main>

      <Footer />
    </PageWrapper>
  );
};

export default MainLayout;
