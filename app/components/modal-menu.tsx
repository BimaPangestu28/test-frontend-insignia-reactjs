import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModalMenu({ isClose, handleClose }: any) {
  return (
    <div className={isClose ? "modal-menu hidden" : "modal-menu flex"}>
      <div className="modal-menu__content bg-base">
        <div className="modal-menu__content__header">
          <div className="modal-menu__content__header__title">
            <p className="font-size-18 font-bold text-center">Main Menu</p>
            <hr />
          </div>
        </div>

        <div className="modal-menu__content__items">
          <div className="modal-menu__content__items__item">
            <div className="modal-menu__content__items__item__title">
              <p className="font-size-18 py-4">Videos</p>
              <p className="font-size-18 py-4">People</p>
              <p className="font-size-18 py-4">Documents</p>
              <p className="font-size-18 py-4">Events</p>
              <p className="font-size-18 py-4">Communities</p>
              <p className="font-size-18 py-4">Favorites</p>
              <p className="font-size-18 py-4">Channels</p>
            </div>
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
