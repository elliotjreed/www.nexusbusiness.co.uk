import { shallow } from "enzyme";
import * as React from "react";

import { App } from "../src/components/App";
import { Header } from "../src/components/Header";
import { HeaderTag } from "../src/components/HeaderTag";
import { About } from "../src/components/About";
import { Members } from "../src/components/Members";
import Contact from "../src/components/Contact";
import { Views } from "../src/components/Views";
import { IntegratedLearning } from "../src/components/IntegratedLearning";
import { Footer } from "../src/components/Footer";

describe("App", (): void => {
  it("should render and contain routes", (): void => {
    expect(shallow(<App />).find(Header)).toHaveLength(1);
    expect(shallow(<App />).find(HeaderTag)).toHaveLength(1);
    expect(shallow(<App />).find(About)).toHaveLength(1);
    expect(shallow(<App />).find(Members)).toHaveLength(1);
    expect(shallow(<App />).find(Contact)).toHaveLength(1);
    expect(shallow(<App />).find(Views)).toHaveLength(1);
    expect(shallow(<App />).find(IntegratedLearning)).toHaveLength(1);
    expect(shallow(<App />).find(Footer)).toHaveLength(1);
  });
});
