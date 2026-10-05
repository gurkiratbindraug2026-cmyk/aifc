import Footer from "./Footer";
import Navbar from "./Navbar";
import Reveal from "./Reveal";

type Props = {
  children: React.ReactNode;
  /** Extra classes applied to the page wrapper (what used to be the <body> classes). */
  className?: string;
  /** "mono" is the black/white home page palette; "board" tweaks the primary colour. */
  theme?: "mono" | "board";
  /** Used for page-scoped CSS hooks such as `.page-seminars`. */
  name?: string;
};

export default function PageShell({
  children,
  className = "",
  theme,
  name,
}: Props) {
  const classes = [
    "min-h-screen",
    theme ? `theme-${theme}` : "",
    name ? `page-${name}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      <Navbar />
      {children}
      <Footer />
      <Reveal />
    </div>
  );
}
