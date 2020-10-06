import * as React from "react";

export const About = (): JSX.Element => {
  return (
    <section className="about-us bg-purple">
      <div className="container">
        <div className="content">
          <h2>About Us</h2>
        </div>
        <div className="content">
          <p>
            Based in the East Midlands, Nexus is for business leaders and owners of SMEs who want to grow their
            organisation whilst maintaining a balanced, fulfilling lifestyle.
          </p>
          <p>
            Under the guidance of the experienced Chair, John Williams, at our monthly meetings we support and challenge
            one another to get the most from life and business within a confidential and collaborative environment. We
            benefit from the experience and broad skill sets of our established group and welcome fresh perspective from
            new members and through sessions delivered by leading subject matter experts.
          </p>
        </div>
        <div className="content">
          <p className="has-text-weight-bold">Our cost-effective membership includes:</p>
        </div>
        <div className="content">
          <ul>
            <li>Monthly group meetings (full day)</li>
            <li>Monthly one-to-one coaching sessions (2 hours)</li>
            <li>Regular speaker sessions (alternate monthly meetings)</li>
            <li>Annual retreat (2-3 days)</li>
            <li>Access to a confidential member portal (for sharing and practical resources)</li>
            <li>Integrated learning opportunities for member direct reports and managers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
