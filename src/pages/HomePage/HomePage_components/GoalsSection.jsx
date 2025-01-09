import React, { useEffect } from "react";
import "../HomePage_styles/GoalsSection.css";
import { StandardChunkFiveTitle } from "@components/PageTitles/PageTitles";
import {
  empowermentImg,
  raiseAwarenessImg,
  strongerSolidarityImg,
} from "@images/PageImages/HomePage/GoalsSection";

const GoalsSection = () => {
  useEffect(() => {
    // Select all the goal cards
    const goalsCards = document.getElementsByClassName("goalsCard");

    // Set up the Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        // Loop through each entry (each goal card)
        entries.forEach((entry, index) => {
          // Add or remove the 'scaleUp' class based on visibility
          if (entry.isIntersecting) {
            entry.target.classList.add("scaleUp");
          } else {
            entry.target.classList.remove("scaleUp");
          }
        });
      },
      {
        threshold: 0.5, // The card should be at least 50% visible
      }
    );

    // Observe each goal card
    Array.from(goalsCards).forEach((card) => {
      observer.observe(card);
    });

    // Clean up the observer when the component unmounts
    return () => {
      Array.from(goalsCards).forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <div id="goalsPage">
      <div id="mainContainer">
        <StandardChunkFiveTitle>
          PROJECT <span className="textGreen">LIWANAG </span>
          <span className="textYellow">AT </span>
          <span className="textGreen">DUNONG</span> ALSO AIMS TO:
        </StandardChunkFiveTitle>
        <div id="goalsContainer">
          <div className="goalRow">
            <img
              src={raiseAwarenessImg}
              alt="Raise Awareness Image"
              className="goalsImage"
              loading="lazy"
            />
            <div className="goalsCard">
              <h2>Raise Awareness</h2>
              <p>
                Raise awareness on the continuing
                <br />
                struggle of the Aeta communities with
                <br />
                their rights to their ancestral lands,
                <br />
                self-determination, and basic services;
              </p>
            </div>
          </div>
          <div className="goalRow" id="goalRow2">
            <div className="goalsCard">
              <h2>Stronger Solidarity</h2>
              <p>
                Build more alliances and further
                <br />
                strengthen the solidarity between
                <br />
                the community and Aeta advocates;
                <br />
                and finally,
              </p>
            </div>
            <img
              src={strongerSolidarityImg}
              alt="Raise Awareness Image"
              className="goalsImage"
              loading="lazy"
            />
          </div>
          <div className="goalRow">
            <img
              src={empowermentImg}
              alt="Raise Awareness Image"
              className="goalsImage"
              loading="lazy"
            />
            <div className="goalsCard">
              <h2>Empowerment of Aeta Communities</h2>
              <p>
                Contribute to the empowerment of the Aeta community by
                recognizing their voice and role in the conduct of the project
                itself—debunking the prevailing notion that they are mere
                project beneficiaries and emphasizing instead that they can
                freely exercise their agency to determine their role in the
                process, and their right to refuse or approve a project
                according to its perceived value to their community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoalsSection;
