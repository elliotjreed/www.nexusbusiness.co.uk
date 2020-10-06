import * as React from "react";
import { HeaderTag } from "./HeaderTag";
import { Header } from "./Header";
import { About } from "./About";
import { Members } from "./Members";
import Contact from "./Contact";
import { Views } from "./Views";
import { IntegratedLearning } from "./IntegratedLearning";
import { Footer } from "./Footer";

export const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <main className="section main">
        <HeaderTag />
        <About />
        <Members />
        <Contact />
        <Views />
        <IntegratedLearning />
      </main>
      <Footer />
    </>
  );
};
