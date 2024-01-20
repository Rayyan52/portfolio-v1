import * as React from "react"
import "./footer.scss"

const socialData = [
  {
    "title": "email",
    "url": "mailto:kavin@varnan.me"
  },
  {
    "title": "twitter",
    "url": "https://twitter.com/skvarnan"
  },
  {
    "title": "stackoverflow",
    "url": "https://stackoverflow.com/users/1452884/kavin-varnan"
  },
  {
    "title": "github",
    "url": "https://github.com/skavinvarnan"
  },
  {
    "title": "linkedin",
    "url": "https://www.linkedin.com/in/kavin-varnan-08083229/"
  },
]

const Footer = () => (
  <footer className="footer">
    <div className="footer__copyright">
      <div className="bottom credits">
        <small>
          Theme by
          <a href="https://github.com/bchiang7/bchiang7.github.io" rel="noreferrer" target="_blank"> Brittany Chiang</a>
        </small>
      </div>
    </div>
    <div className="footer__links">
      {
        socialData.map((social) => (
          <a href={social.url} target="_blank" rel="noreferrer" title="{{link.title}}">
            <span className="text">{social.title}</span>
          </a>
        ))
      }
    </div>
  </footer>
)

export default Footer
