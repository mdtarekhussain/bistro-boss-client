import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ParallaxProvider } from "react-scroll-parallax"; // ✅ ParallaxProvider ইম্পোর্ট করুন
import { AuthProvider } from "./Provider/AuthProvider.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <StrictMode>
          {/* <ParallaxProvider> */} {/* ✅ এখানে র‍্যাপ করুন */}
          <RouterProvider router={router} />
          {/* </ParallaxProvider> */}
        </StrictMode>
      </HelmetProvider>
    </QueryClientProvider>
  </AuthProvider>
);
