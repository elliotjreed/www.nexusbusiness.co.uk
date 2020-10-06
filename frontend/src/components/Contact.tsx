import * as React from "react";
import { useState } from "react";

const Contact = (): JSX.Element => {
  const [error, setError] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccessful] = useState(false);

  const handleSubmit = (event): void => {
    event.preventDefault();

    if (!checked) {
      setError("Please confirm your are happy to be contacted by us.");
      return;
    }

    setLoading(true);
    fetch("https://api.nexusbusiness.co.uk", {
      body: new URLSearchParams(new FormData(event.target) as URLSearchParams),
      method: "POST"
    })
      .then((response: Response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response: Response) => response.json())
      .then((json: string | boolean) => {
        if (json === true) {
          setSuccessful(true);
        } else {
          setError(json as string);
        }
        setLoading(true);
      })
      .catch(() => setError("There was an error sending your email, please try again."));
  };

  const renderForm: JSX.Element = (
    <form onSubmit={handleSubmit} className="claim-form">
      <div className="field nexus-field">
        <input
          className="input"
          type="text"
          name="name"
          title="Your name or your business name"
          placeholder="Name"
          required
        />
      </div>
      <div className="field nexus-field">
        <input className="input" type="email" name="email" title="Your email address" placeholder="Email" required />
      </div>
      <div className="field nexus-field">
        <textarea
          className="textarea"
          name="message"
          title="Your question or comment"
          placeholder="Question / Comment (optional)"
        />
      </div>
      <div className="field">
        <div className="control">
          <label htmlFor="confirm" className="checkbox confirm" id="confirmLabel">
            <input type="checkbox" id="confirm" checked={checked} onChange={() => setChecked(!checked)} />I am happy for
            Leadership Gateway Ltd to contact me by email and use the details provided to process and record my enquiry.
            I understand that consent can be withdrawn at any time by contacting info@nexusbusiness.co.uk.
          </label>
        </div>
      </div>
      <button className="go-button" disabled={loading && !checked}>
        Find Out More
      </button>
    </form>
  );

  return (
    <section className="claim-session">
      <div className="container">
        <div className="content">
          <h2>Make an Enquiry</h2>
        </div>
        {success ? (
          <p className="notification is-success" id="emailSuccess">
            Your email has been sent. We will get back to you shortly.
          </p>
        ) : (
          renderForm
        )}
        {error === "" ? null : (
          <p className="notification is-warning" id="emailFail">
            {error}
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
