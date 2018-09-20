import React from "react";
import "../../styles/feature.css";

const Feature = () => {
  return (
    <section id="feature-page">
      <hr />
      <h2 className="feature-title revealed">App Features</h2>
      <img
        className="feature-img revealed"
        src="https://images.unsplash.com/photo-1535402803947-a950d5f7ae4b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a1ee9193f083f265226c9d0e0b3ec8c9&auto=format&fit=crop&w=500&q=60"
        alt="feature"
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
      <div className="feature-set">
        <h3 className="set-title revealed">Convenience</h3>
        <p className="revealed">
          Caritas Auxilium saves confirmation numbers of your donations and
          charity names, so you do not have to remember them or have the risk of
          losing them. Furthermore, this App makes a report of your donations
          per year. Easy to print and you can use the report summary to fill
          into your tax deductions.
        </p>
      </div>
      <div className="feature-set">
        <h3 className="set-title revealed">Robust</h3>
        <p className="revealed">
          Caritas Auxilium uses the latest crisis reports taken straight from
          Relief Web API, which is a public API for humanitarian crisis and
          disasters maintained by United Nations. As a result, the App uses a
          robust search algorithm so you can search by terms without modifying
          them. Of course, the algorithm is not a wizard or a magician, so make
          sure you have the right spelling when you want to look for something.
        </p>
      </div>
      <div className="feature-set revealed">
        <h3 className="set-title revealed">Language</h3>
        <p className="revealed">
          Caritas Auxilium means something entirely different in Latin. It's not
          just the name of an App. Caritas means "the virtue of altruistic
          love", and Auxilium means "to help or to relief". So, combined they
          meaning will be the altruistic love to help or relief people.
        </p>
      </div>
    </section>
  );
};

export default Feature;
