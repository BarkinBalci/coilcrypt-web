import { NavBar } from "./NavBar";
import { Footer } from "./footer";

type PageLayoutProps = {
  children: React.ReactNode;
};

/**
 * Wrapper around the `Outlet` for providing a consistent layout.
 */
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div>
      <main>
        <NavBar />
        {children}
        <Footer />
      </main>
    </div>
  );
}
