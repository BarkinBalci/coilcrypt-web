import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AppProvider } from "@realm/react";

import { AuthenticatedApp } from "./AuthenticatedApp";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/LoginPage";
import { VaultPage } from "./pages/VaultPage";
import config from "./atlas-app-services/config.json";
import "./styles/global.css";
import { PageLayout } from "./components/PageLayout";
import { HomePage } from "./pages/HomePage";
import { DownloadPage } from "./pages/DownloadPage";
import { AboutPage } from "./pages/AboutPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import HelpPage from "./pages/HelpPage";
import { CryptographyPage } from "./pages/CryptographyPage";
import { ChecksumPage } from "./pages/ChecksumPage";
import { SettingsPage } from "./pages/SettingsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/signin",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/download",
    element: <DownloadPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/terms",
    element: <TermsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/help",
    element: <HelpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/cryptography",
    element: <CryptographyPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/checksum",
    element: <ChecksumPage />,
    errorElement: <ErrorPage />,
  },

  {
    element: <AuthenticatedApp />,
    children: [
      {
        path: "vault",
        element: <VaultPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
    ],
  },
]);

/**
 * The root React component which renders `@realm/react`'s `AppProvider`
 * for instantiation an Atlas App Services App.
 */
function App() {
  return (
    <div>
      <AppProvider id={config.ATLAS_APP_ID}>
        <PageLayout>
          <RouterProvider router={router} />
        </PageLayout>
      </AppProvider>
    </div>
  );
}

export default App;
