import * as React from "react";

export const IntegratedLearning = (): JSX.Element => {
  return (
    <section className="nexus-group bg-purple">
      <div className="container">
        <div className="content">
          <h2>Integrated Learning</h2>
        </div>
        <article className="aspire-group">
          <div className="container">
            <div className="content">
              <h3>Aspire Group</h3>
            </div>
            <div className="content">
              <p>
                Open to high performing direct reports of Nexus members, the Aspire group meets bi-monthly as a separate
                group, also under the Chairmanship of John Williams.
              </p>
              <p>
                The full day meetings include morning sessions from leading subject matter experts and the opportunity
                to discuss issues and challenges. Members also receive monthly one to one sessions and coaching, and
                work closely with the Chair and Nexus members to embed the learning.
              </p>
            </div>
          </div>
        </article>

        <article className="leadership-gateway bg-purple">
          <div className="container">
            <div className="content">
              <h3>Gateway Group</h3>
            </div>
            <div className="content">
              <p>
                A group of managers from Nexus companies who together learn, develop, inspire and challenge fellow
                members on how to improve their personal and business performance.
              </p>
              <p>
                Facilitated by Adam Harris, there are six full day meetings per year with a high calibre speaker taking
                the morning session. Afternoons are partly to embed learning from speaker sessions but also to share
                best practice across businesses and widen the members&apos; experience outside their own company.
                Coaching can also be included by arrangement.
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
