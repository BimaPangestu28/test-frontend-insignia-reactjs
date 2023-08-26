import {
  faArrowUp,
  faBurger,
  faSearch,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Topbar() {
  return (
    <div>
      <div
        id="topbar"
        className="flex justify-between items-center hidden md:inline"
      >
        <div className="topbar__logo">
          <p className="font-size-40 color-base">
            Social<span className="font-light">Network</span>
          </p>
        </div>

        <div className="topbar__items flex justify-between items-center">
          <div className="topbar__items__search flex justify-between items-center">
            <input type="text" placeholder="Find..." />
            <FontAwesomeIcon icon={faSearch} className="font-size-14" />
          </div>

          <div className="topbar__items__upload">
            <button className="button flex justify-between items-center">
              <FontAwesomeIcon icon={faArrowUp} className="font-size-14" />
              <p className="font-size-14 ml-10">Upload</p>
            </button>
          </div>

          <div className="topbar__items__user flex justify-between items-center">
            <button className="button h-100">
              <FontAwesomeIcon icon={faUser} className="font-size-14" />
            </button>

            <div className="topbar__items__user__name ml-10">
              <p className="font-size-18">Waseem</p>
              <p className="font-size-14">Arshad</p>
            </div>

            <div className="topbar__items__user__bullet">
              <p>10</p>
            </div>
          </div>
        </div>
      </div>

      <div className="inline md:hidden">
        <div className="flex justify-between mt-4">
          <FontAwesomeIcon icon={faBurger} />

          <div className="logo">
            <p className="text-sm">
              <span className="font-medium">Social</span>
              <span className="font-light">Network</span>
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUpload} className="mr-4" />

            <FontAwesomeIcon icon={faUser} />
          </div>
        </div>

        <div className="topbar__items__search flex justify-between items-center">
            <input type="text" placeholder="Find..." />
            <FontAwesomeIcon icon={faSearch} className="font-size-14" />
          </div>
      </div>
    </div>
  );
}
