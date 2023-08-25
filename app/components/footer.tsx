import {
  faTwitter,
  faFacebookF,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  const menus = [
    "About",
    "For Business",
    "Suggestions",
    "Helo & FAQs",
    "Contacts",
    "Pricing",
  ];

  return (
    <div id="footer">
      <div className="footer__social-medias flex align-center">
        <div className="footer__social-medias__icon mr-10">
          <FontAwesomeIcon icon={faTwitter} className="font-size-14" />
        </div>
        <div className="footer__social-medias__icon mr-10">
          <FontAwesomeIcon icon={faFacebookF} className="font-size-14" />
        </div>
        <div className="footer__social-medias__icon">
          <FontAwesomeIcon icon={faLinkedin} className="font-size-14" />
        </div>
      </div>

      <div className="footer__items">
        <div className="footer__items__links flex items-center">
          {menus.map((menu, index) => (
            <a href="#" key={index} className="font-size-12">
              {menu}
              {index !== menus.length - 1 && <span className="mx-3">/</span>}
            </a>
          ))}
        </div>

        <div className="footer__items__copy">
          <p className="font-size-12">© Copyright 2013 companyname inc.</p>
        </div>

        <div className="footer__items__sublinks flex items-center mt-3">
          <a href="#" className="font-size-12">
            Privacy
            <span className="mx-3">/</span>
          </a>
          <a href="#" className="font-size-12">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}
