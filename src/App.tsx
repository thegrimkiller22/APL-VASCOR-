import React from "react";
import { Routes, Route, Outlet } from "react-router-dom"; //
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import routes from "@/routes";
import { Home } from ".";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-dvh">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
        <Routes>
          <Route path="/" element={<Home />} />
          {routes.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
