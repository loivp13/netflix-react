import React, { Component } from "react";
import Dropdown from "../Dropdown";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Section4 extends Component {
  render() {
    return (
      <div className="section4">
        <h1 className="section4__header">Frequently Asked Question</h1>
        <ul className="section4__list">
          <li className="section4__listitem--1">
            <Dropdown
              question={"What is Streaming?"}
              answer={`Streaming is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`}
            ></Dropdown>
          </li>
          <li className="section4__listitem--2">
            <Dropdown
              answer={`Watch Streaming on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one low fixed monthly fee. Plans start from $8.99 a month. No extra costs or contracts.`}
              question={`How much does Streaming cost?`}
            ></Dropdown>
          </li>
          <li className="section4__listitem--4">
            <Dropdown
              answer={`Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Streaming account to watch instantly on the web at streaming.com from your personal computer or on any internet-connected device that offers the Streaming app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Streaming with you anywhere.`}
              question={`Where can I watch?`}
            ></Dropdown>
          </li>
          <li className="section4__listitem--5">
            <Dropdown
              answer={`Streaming is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`}
              question={`How do I cancel?`}
            ></Dropdown>
          </li>
          <li className="section4__listitem--6">
            <Dropdown
              answer={`Streaming has an extensive library of feature films, documentaries, TV shows, anime, award-winning Streaming originals, and more. Watch as much as you want, anytime you want. Join free for 30 days to see everything Streaming has to offer.`}
              question={`What can I watch on Streaming?`}
            ></Dropdown>
          </li>
        </ul>
        <Link className="u-margin-bottom-medium" to="/browse">
          <button className="btn btn--red btn--large">
            Try 30 days free{" "}
            <span>
              <FontAwesomeIcon
                className=""
                icon={["fas", "long-arrow-alt-right"]}
                size="lg"
              />
            </span>
          </button>
        </Link>
        <div className="hr--grey"></div>
      </div>
    );
  }
}

export default Section4;
