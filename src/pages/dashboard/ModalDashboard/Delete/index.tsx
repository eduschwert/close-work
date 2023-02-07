import { useContext } from "react";
import { ServiceContext } from "../../../../context/ServicesContext";
import { useOutClick } from "../../../../hooks/useOutClick";
import { HeaderModal } from "../HeaderModal";
import { DivModal } from "../style";
import { DeleteService } from "./Service";
import { DivDelete } from "./style";
import { DeleteUser } from "./User";

export const Delete = () => {
  const { closeModal, typeModal } = useContext(ServiceContext);
  const modalRef = useOutClick(() => {
    closeModal();
  });
  return (
    <DivModal ref={modalRef}>
      <HeaderModal />
      <DivDelete>
        {typeModal === "DeleteService" ? <DeleteService /> : ""}
        {typeModal === "DeleteUser" ? <DeleteUser /> : ""}
      </DivDelete>
    </DivModal>
  );
};
