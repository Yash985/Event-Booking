import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="banner">
        <div className="title">
          <h1>KING's</h1>
          <p>Events and Weddings</p>
        </div>
        <div className="tag">
          <label>News Letter</label>
          <div>
            <input type="email" placeholder="E-mail" />
            <button>Subscribe</button>
          </div>
          <p>Signup with your email address to receive news and updates!</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
