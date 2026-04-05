import type React from "react";

interface SectionLayout {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const Section = ({ children, className, id }: SectionLayout) => {
  return (
    <section
      id={id ?? undefined}
      className={`w-screen snap-start ${className ?? ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
