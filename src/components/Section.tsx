import type React from "react";

interface SectionLayout {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionLayout) => {
  return (
    <section
      className={`w-screen snap-start ${className ?? ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
