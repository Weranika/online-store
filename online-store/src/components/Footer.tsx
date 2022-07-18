import React from 'react';
import'./footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <a className="github-link" href="https://github.com/Weranika" target="_blank">
        <div className="github-link footer-img"></div>
      </a>
      <a className="rss-link" href="https://rs.school/js/" target="_blank">
        <div className="rss-link footer-img"></div>
      </a>
      <p className="footer-content">Made by Weranika 2022</p>
    </footer>
  );
}

export default Footer;
