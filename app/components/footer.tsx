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
      <div className="footer__social-medias flex align-center md:justify-start text-center flex justify-center">
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

      <div className="footer__items md:block flex flex-col items-center justify-center">
        <div className="footer__items__links block text-center md:text-left md:flex items-center md:my-6 my-3 font-light">
          {menus.map((menu, index) => (
            <a href="#" key={index} className="font-size-12 color-base mr-2 md:mr-0">
              {menu}
              {index !== menus.length - 1 && <span className="mx-3 hidden md:inline">/</span>}
            </a>
          ))}
        </div>

        <div className="footer__items__copy font-light">
          <p className="font-size-12 color-base">
            © Copyright 2013 companyname inc.
          </p>
        </div>

        <div className="footer__items__sublinks flex items-center mt-1 md:mt-3 font-light">
          <a href="#" className="font-size-12 color-base mr-3 md:mr-0">
            Privacy
            <span className="mx-3 hidden md:inline">/</span>
          </a>
          <a href="#" className="font-size-12 color-base">
            Terms
          </a>
        </div>
      </div>
    </div>
  );
}
