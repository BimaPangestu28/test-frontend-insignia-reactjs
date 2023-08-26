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
      <div className="footer__social-medias flex align-center md:justify-start sm:text-center sm:flex sm:justify-center">
        <div className="footer__social-medias__icon mr-10">
          <FontAwesomeIcon
            icon={faTwitter}
            className="font-size-14  color-base"
          />
        </div>
        <div className="footer__social-medias__icon mr-10">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="font-size-14  color-base"
          />
        </div>
        <div className="footer__social-medias__icon mr-10">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="font-size-14  color-base"
          />
        </div>
      </div>

      <div className="footer__items md:block sm:flex sm:flex-column sm:items-center sm:justify-center">
        <div className="footer__items__links flex items-center md:my-6 sm:my-3">
          {menus.map((menu, index) => (
            <a href="#" key={index} className="font-size-12 color-base">
              {menu}
              {index !== menus.length - 1 && <span className="mx-3">/</span>}
            </a>
          ))}
        </div>

        <div className="footer__items__copy">
          <p className="font-size-12 color-base">
            © Copyright 2013 companyname inc.
          </p>
        </div>

        <div className="footer__items__sublinks flex items-center mt-3">
          <a href="#" className="font-size-12 color-base">
            Privacy
            <span className="mx-3">/</span>
          </a>
          <a href="#" className="font-size-12 color-base">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}
