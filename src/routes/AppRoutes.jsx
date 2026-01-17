import { Routes, Route, useLocation } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "../layouts/MainLayout";
import ErrorBoundary from "../components/ErrorBoundory";
import NotFound from "@/pages/NotFound";
import AboutUs from "@/pages/AboutUs";
import Contact from "@/pages/ContactUs";

// Lazy-loaded pages
const Home = lazy(() => import("../pages/Home"));
// const NotFound = lazy(() => import("../pages/NotFound"));

const AppRoutes = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <ErrorBoundary>
              <Home />
            </ErrorBoundary>
          }
        />


        <Route
          path="/about-us"
          element={
            <ErrorBoundary>
              <AboutUs />
            </ErrorBoundary>
          }
        />

        <Route
          path="/contact-us"
          element={
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
          }
        />



        <Route
          path="*"
          element={
            <ErrorBoundary>
              <NotFound />
            </ErrorBoundary>
          }
        />
      </Route>
    </Routes>
  );
};

export default AppRoutes;


