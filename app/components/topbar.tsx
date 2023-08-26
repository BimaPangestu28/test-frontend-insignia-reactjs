import {
  faArrowUp,
  faBurger,
  faSearch,
  faUpload,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ModalMenu from "./modal-menu";
import { useState } from "react";
import ModalProfile from "./modal-profile";

export default function Topbar() {
  const [isClose, setIsClose] = useState(true);
  const [isCloseProfile, setIsCloseProfile] = useState(true);

  return (
    <div>
      <ModalMenu isClose={isClose} handleClose={() => setIsClose(true)} />
      <ModalProfile
        isClose={isCloseProfile}
        handleClose={() => setIsCloseProfile(true)}
      />

      <div
        id="topbar"
        className="md:flex justify-between items-center hidden"
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
          {isClose}
          <div onClick={() => setIsClose(false)}>
            <FontAwesomeIcon icon={faBurger} />
          </div>

          <div className="logo">
            <p className="text-sm">
              <span className="font-medium">Social</span>
              <span className="font-light">Network</span>
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faUpload} className="mr-4" />

            <FontAwesomeIcon
              icon={faUser}
              onClick={() => setIsCloseProfile(false)}
            />
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
