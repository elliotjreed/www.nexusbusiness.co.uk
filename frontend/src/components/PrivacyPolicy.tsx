import * as React from "react";

export const PrivacyPolicy = (): JSX.Element => {
  return (
    <aside className="modal" id="privacy-policy">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Privacy Policy</p>
          <button className="delete" aria-label="close" id="close-privacy-policy" />
        </header>
        <section className="modal-card-body">
          <div className="content">
            <h3>About this notice</h3>
            <p>
              The purpose of this notice is to explain how Leadership Gateway Ltd. handle any personal information we
              collect about you when you use, enquire about or act as a supplier of services. It will also outline the
              rights and choices you have under the GDPR (General Data Protection Regulation) and the Data Protection
              Act 2018.
            </p>

            <p>
              By using Leadership Gateway Ltd. services and website, or by supplying services to the organisation, you
              consent to the data practices described in this statement.
            </p>

            <h3>What information do we collect about you?</h3>
            <p>
              When you become a group member, or enquire about becoming one, Leadership Gateway Ltd. collects personally
              identifiable information which may include your name, business and private contact details. We also
              collect data about your place of work including number of employees, turnover and website address, and
              corporate banking details.
            </p>

            <p>
              When you supply services to Leadership Gateway Ltd. such as facilitating or speaking at our sessions, we
              will also collect and retain personally identifiable information including, but not limited to, your
              contact details, biographical overview and professional services offered.
            </p>

            <p>
              We monitor visitors to our website by using cookies and may process data about your use using an analytics
              platform. We use a cookie control system which allows you to accept the use of cookies, and control which
              cookies are saved to your device / computer. Your web browser should provide you with the controls to
              manage and delete cookies from your device; please see your web browser options. Website visitors wishing
              to make an enquiry are required to positively opt in to receive further contact.
            </p>

            <h3>How will your information be used?</h3>
            <p>
              We collect information about our members and suppliers so that we can effectively deliver our services,
              including the administration of meetings and one to one sessions, preparation and follow up of
              facilitator/speaker sessions and to progress any membership enquiries received. We may also use personally
              identifiable data and images on our website and social media platforms to share our member experiences.
            </p>

            <h3>What is our lawful basis for processing your personal data?</h3>
            <p>
              As a member, potential member or supplier, we have deemed that you have a legitimate interest in our
              services and this is the lawful basis on which we process your personal data.
            </p>

            <p>
              Leadership Gateway Ltd. Registered office address:{" "}
              <em>7 St John Street, Mansfield, Nottinghamshire, United Kingdom, NG18 1QH.</em> Registered in England and
              Wales, Company No: 09988651, Leadership Gateway Ltd.
            </p>

            <h3>Who is your personal information shared with?</h3>
            <p>
              We share your personal data as required to deliver our services. This may include sharing of personal
              contact details and corporate information between members and with facilitators/speakers. We use carefully
              curated content on our website and social media platforms with the aim of enhancing and sharing the
              experiences of our members. Please be aware that if you directly disclose personally identifiable
              information or personally sensitive data through digital media activities, this information may be
              collected and used by others. We are not responsible for such content and advise you to refer to the
              individual privacy policy of such platforms.
            </p>

            <h3>How do we safeguard your personal data?</h3>
            <p>
              We have put physical, electronic and procedural systems in place to keep your personal information secure.
              Where it is necessary to store or transfer some or all of your personal information to third party service
              providers, we use providers who have been verified as GDPR compliant or take steps to ensure that
              appropriate safeguards are in place where storage/processing takes place outside of the European Economic
              Area (EEA) – for example, where the service provider uses a “cloud based” service.
            </p>

            <h3>How long will your information be held?</h3>
            <p>
              Your information will only be held whilst you are actively involved with the services of Leadership
              Gateway Ltd. and for up to 10 years thereafter. However, you have the right to request erasure at any time
              (see below).
            </p>

            <h3>Your Rights</h3>
            <p>Under the GDPR your rights are as follows:</p>

            <ul>
              <li>the right to be informed;</li>
              <li>the right of access;</li>
              <li>the right to rectification;</li>
              <li>the right to erasure;</li>
              <li>the right to restrict processing;</li>
              <li>the right to data portability;</li>
              <li>the right to object;</li>
              <li>the right not to be subject to automated decision-making including profiling.</li>
            </ul>

            <p>
              Please note that the above rights are not absolute, and we may be entitled to refuse requests where
              exceptions apply. You have the right to complain to the ICO [www.ico.org.uk] if you feel there is a
              problem with the way we are handling your data.
            </p>

            <h3>How to make an enquiry or change your preferences</h3>
            <p>
              If at any time, you want to verify, update, amend or delete any personal information we hold about you,
              please contact us by emailing the Data Protection Officer (DPO) at info@nexusbusiness.co.uk.
            </p>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button" id="accept-privacy-policy">
            OK
          </button>
        </footer>
      </div>
    </aside>
  );
};
