import React from "react";
import "../../styles/howto.css";

const Howto = () => {
  return (
    <section id="howto-page">
      <hr />
      <h2 className="howto-title revealed">How To Use</h2>
      <img
        className="howto-img revealed"
        src="https://images.unsplash.com/photo-1502920514313-52581002a659?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fc8be37d913994b3540169a890e2242d&auto=format&fit=crop&w=500&q=60"
        alt="howto"
      />
      <p className="revealed">
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
        <ol>
          <li className="revealed">
            You must register or login to use this app.
          </li>
          <li className="revealed">
            Click <span className="fake-btn">register</span> on the header to be
            taken to the register page. You will be prompted to fill out a
            registration form.
          </li>
          <li className="revealed">
            Click <span className="fake-btn">login</span> on the header to be
            taken to the login page. You will be asked to enter your username
            and password.
          </li>
          <li className="revealed">
            Once You registered or logged in, you will be inside the main user
            page, which is populated with the latest ten crisis from around the
            globe.
          </li>
          <li className="revealed">
            Click the <span className="fake-btn">link</span> on any crisis card
            to read more of the crisis that interest you.
          </li>
          <li className="revealed">
            You can add any crisis that interest you to your crisis collection
            by clicking the <span className="fake-btn">add</span> button.
          </li>
          <li className="revealed">
            Clicking the <span className="fake-btn">cancel</span> button will
            return you to the recent crisis page.
          </li>
          <li className="revealed">
            You can also <span className="fake-btn">search</span> for any crisis
            using any search term. The result is limited to ten crisis.
          </li>
          <li className="revealed">
            The crisis you added are located on{" "}
            <span className="fake-btn">my crisis</span>.
          </li>
          <li className="revealed">
            You can search for a specific crisis you have chosen by using the
            <span className="fake-btn">search</span>
            bar.
          </li>
          <li className="revealed">
            Click the <span className="fake-btn">donate</span> button on the
            crisis card to donate to that crisis. You are then prompted to fill
            out a form to keep a record of your donation. (Unfortunately, there
            is no charity API with a robust search features, so you have to do
            your own googling to find your own charity to donate to the chosen
            crisis)
          </li>
          <li className="revealed">
            Again, if you don't want to donate to that crisis, you can click the
            <span className="fake-btn">cancel</span>
            button.
          </li>
          <li className="revealed">
            Click <span className="fake-btn">delete</span> on the crisis card to
            delete a crisis from your collection.
          </li>
          <li className="revealed">
            You can look at a list of your donations when you click{" "}
            <span className="fake-btn">my donations</span>.
          </li>
          <li className="revealed">
            Click <span className="fake-btn">update</span> to update your chosen
            donation.
          </li>
          <li className="revealed">
            Click <span className="fake-btn">delete</span> to delete your chosen
            donation.
          </li>
          <li className="revealed">
            You can search for a specific donation using the{" "}
            <span className="fake-btn">search</span>
            bar.
          </li>
          <li className="revealed">
            <span className="fake-btn">my account</span> contain the details of
            your account. You can change your first name, last name, and email
            address, nothing more.
          </li>
          <li className="revealed">
            You can look at your donation activities throughout a certain year
            by clicking
            <span className="fake-btn">my reports</span>. Once you are inside
            the page, you can <span className="fake-btn">pull</span>
            report from the server.
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Howto;
