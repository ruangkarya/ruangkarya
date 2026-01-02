import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { ThemeProvider } from "../components/ThemeToggle";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
      {import.meta.env.MODE === "development" && <TanStackRouterDevtools />}
    </ThemeProvider>
  ),
});
