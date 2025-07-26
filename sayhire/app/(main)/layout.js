import React from "react";
import DashboardProvider from "./provider";

function DashboardLayout({ children }) {
  return (
<<<<<<< HEAD
    <div>
      <DashboardProvider>{children}</DashboardProvider>
=======
    <div className="bg-secondary">
      <DashboardProvider>
        <div className="p-1"> 
          {children}
        </div>
      </DashboardProvider>
>>>>>>> 5bf1f5b (second)
    </div>
  );
}

export default DashboardLayout;
