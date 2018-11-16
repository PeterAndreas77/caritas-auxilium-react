import React from "react";

export const Howto = () => {
  return (
    <section id="howto-page">
      <hr />
      <h2 className="howto-title">How To Use</h2>
      <img
        className="howto-img"
        src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc8be37d913994b3540169a890e2242d&auto=format&fit=crop&w=500&q=60"
        alt="howto"
      />
      <p>
        <em>
          image from{" "}
          <a
            href="https://unsplash.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            unsplash
          </a>
        </em>
      </p>
      <div className="howto-content">
        <p>
          You must register or login to use this app. Click{" "}
          <span className="fake-btn">register</span> on the header to be taken
          to the register page. You will be prompted to fill out a registration
          form. Click <span className="fake-btn">login</span> on the header to
          be taken to the login page. You will be asked to enter your username
          and password.
        </p>
        <p>
          Once You registered or logged in, you will be inside the main user
          page, which is populated with the latest ten crisis from around the
          globe. Click the <span className="fake-btn">link</span> on any crisis
          card to read more of the crisis that interest you. Clicking the{" "}
          <span className="fake-btn">cancel</span> button will return you to the
          recent crisis page. You can also{" "}
          <span className="fake-btn">search</span> for any crisis using any
          search term. The result is limited to ten crisis.
        </p>

        <p>
          Click the <span className="fake-btn">donate</span> button on the
          crisis card to donate to that crisis. You are then prompted to fill
          out a form to keep a record of your donation. (Unfortunately, there is
          no charity API with a robust search features, so you have to do your
          own googling to find your own charity to donate to the chosen crisis).
          Again, if you don't want to donate to that crisis, you can click the
          <span className="fake-btn">cancel</span>
          button.
        </p>

        <p>
          You can look at a list of your donations when you click{" "}
          <span className="fake-btn">my donations</span>. Click{" "}
          <span className="fake-btn">update</span> to update your chosen
          donation. Click <span className="fake-btn">delete</span> to delete
          your chosen donation. You can search for a specific donation using the{" "}
          <span className="fake-btn">search</span>
          bar.
        </p>

        <p>
          <span className="fake-btn">my account</span> contain the details of
          your account. You can change your first name, last name, and email
          address, nothing more.
        </p>

        <p>
          You can look at your donation activities throughout a certain year by
          clicking
          <span className="fake-btn">my reports</span>. Once you are inside the
          page, you can <span className="fake-btn">pull</span>
          report from the server.
        </p>
      </div>
    </section>
  );
};

export default Howto;
