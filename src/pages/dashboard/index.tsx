import { motion } from "framer-motion";
import { useContext } from "react";
import { Footer } from "../../components/Footer";
import { ServiceContext } from "../../context/ServicesContext";
import { HeaderDashboard } from "./HeaderDashboard";
import { ModalDashboard } from "./ModalDashboard";
import { ProfileDashboard } from "./ProfileDashboard";
import { ServicesDashboard } from "./ServicesDashboard";
import { StyledDashboard } from "./style";

export const Dashboard = () => {
  const { openModal } = useContext(ServiceContext);

  return (
    <motion.div
      initial={{ y: "5%", opacity: 0.8 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <StyledDashboard>
        {openModal && <ModalDashboard />}
        <HeaderDashboard />
        <ProfileDashboard />
        <ServicesDashboard />
        <Footer />
      </StyledDashboard>
    </motion.div>
  );
};
