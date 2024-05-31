////////////////////////////////////////////////////////////////////////////
//
// Copyright 2023 Realm Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
////////////////////////////////////////////////////////////////////////////

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
