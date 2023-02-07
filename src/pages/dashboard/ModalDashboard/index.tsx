import { useContext } from "react";
import { ServiceContext } from "../../../context/ServicesContext";
import { Delete } from "./Delete";
import { EditService } from "./EditService";
import { EditUser } from "./EditUser";
import { RegisterService } from "./RegisterService";
import { Modal } from "./style";

export const ModalDashboard = () => {
  const { typeModal, isClosing } = useContext(ServiceContext);
  return (
    <Modal isClosing={isClosing}>
      {typeModal === "EditUser" ? <EditUser /> : ""}
      {typeModal === "RegisterService" ? <RegisterService /> : ""}
      {typeModal === "EditService" ? <EditService /> : ""}
      {typeModal === "DeleteService" ? <Delete /> : ""}
      {typeModal === "DeleteUser" ? <Delete /> : ""}
    </Modal>
  );
};
