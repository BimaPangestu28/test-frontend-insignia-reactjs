import {
  faArrowRight,
  faClose,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalProfile({ isClose, handleClose }: any) {
  return (
    <div className={isClose ? "modal-menu hidden" : "modal-menu flex"}>
      <div
        className="modal-menu__content bg-base"
        style={{ paddingBottom: "0px" }}
      >
        <div className="modal-menu__content__header">
          <div
            className="modal-menu__content__header__title"
            style={{ paddingTop: "75px" }}
          >
            <div className="photo-profile">
              <img
                src="https://randomuser.me/api/portraits/med/men/10.jpg"
                alt=""
              />
            </div>
            <p className="font-size-18 text-center">Waseem Ahmad</p>
            <p className="font-size-16 text-center font-light">
              UI/UX Designer
            </p>

            <button className="button">
              <FontAwesomeIcon icon={faUpload} className="font-size-16 mr-3" />
              <p className="font-size-16">Start Upload</p>
            </button>
            <hr />
          </div>
        </div>

        <div className="modal-menu__content__items">
          <div className="modal-menu__content__items__item">
            <div className="modal-menu__content__items__item__title">
              <p className="font-size-18 py-4">My Profile</p>
              <p className="font-size-18 py-4">Edit Profile</p>
              <p className="font-size-18 py-4">Security</p>
            </div>
          </div>
        </div>

        <div className="modal-menu__content__footer">
          <p className="font-size-18">Log Out</p>
          <div className="modal-menu__content__footer__circle">
            <FontAwesomeIcon icon={faArrowRight} className="font-size-16" />
          </div>
        </div>
      </div>

      <FontAwesomeIcon
        icon={faClose}
        className="font-bold font-size-40 color-base cursor-pointer"
        onClick={() => handleClose()}
      />
    </div>
  );
}
