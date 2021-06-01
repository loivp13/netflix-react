import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Section5 extends Component {
  render() {
    return (
      <div className="section5">
        <div className="section5__container">
          <div className="section5__questions">
            Question? Call 1-866-579-7172
          </div>
          <div className="section5___footer">
            <div className="section5__footer--container">
              <div className="section5__footer-col1">
                <Link to="#" className="section5__col1--item1">
                  FAQ
                </Link>
                <Link to="#" className="section5__col1--item2">
                  Investor Relations
                </Link>
                <Link to="#" className="section5__col1--item3">
                  Ways to Watch
                </Link>
                <Link to="#" className="section5__col1--item4">
                  Corporate Information
                </Link>
                <Link to="#" className="section5__col1--item5">
                  Streaming Originals
                </Link>
              </div>
              <div to="#" className="section5__footer-col2">
                <Link to="#" className="seciton5__col2--item1">
                  Help Center
                </Link>
                <Link to="#" className="seciton5__col2--item2">
                  Jobs
                </Link>
                <Link to="#" className="seciton5__col2--item3">
                  Terms of Use
                </Link>
                <Link to="#" className="seciton5__col2--item4">
                  Contact Us
                </Link>
              </div>
              <div className="section5__footer-col3">
                <Link to="#" className="seciton5__col3--item1">
                  Account
                </Link>
                <Link to="#" className="seciton5__col3--item2">
                  Redeem Gift Cards
                </Link>
                <Link to="#" className="seciton5__col3--item3">
                  Privacy
                </Link>
                <Link to="#" className="seciton5__col3--item4">
                  Speed Test
                </Link>
              </div>
              <div className="section5__footer-col4">
                <Link to="#" className="seciton5__col4--item1">
                  Media Center
                </Link>
                <Link to="#" className="seciton5__col4--item2">
                  Buy Gift Cards
                </Link>
                <Link to="#" className="seciton5__col4--item3">
                  Cookie Perferences
                </Link>
                <Link to="#" className="seciton5__col4--item4">
                  Legal Notices
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Section5;
