import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Link, RouterProvider } from "@tanstack/react-router";
import "@/index.css";
import { routeTree } from "@/routeTree.gen";
import { createRouter } from "@tanstack/react-router";
import { Home } from "lucide-react";

const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return (
      <div className="space-y-4 pt-16 text-center">
        <h1 className="text-4xl font-bold text-primary">Not Found</h1>
        <p>
          <Link
            to="/"
            className="inline-flex flex-row items-center gap-1 rounded-md bg-primary/90 p-2 text-xl text-primary-foreground transition-colors hover:bg-primary"
          >
            <Home />
            Go to Main Page
          </Link>
        </p>
      </div>
    );
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
