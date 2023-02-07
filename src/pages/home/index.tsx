import { useContext, useEffect } from "react";
import { HeaderHome } from "./HeaderHome";
import { ContainerHome, PageContainer, StyledFilterSection } from "./style";
import { Footer } from "../../components/Footer";
import { ServicesList } from "./ServicesList";

import { api } from "../../services/api";
import { SlideImagesHome } from "../../components/SlideImages";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { ServiceContext } from "../../context/ServicesContext";

export const Home = () => {
  const { setKindOfService, kindOfServices } = useContext(ServiceContext);

  return (
    <motion.div
      initial={{ y: "5%", opacity: 0.8 }}
      animate={{ y: "0%", opacity: 1 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <PageContainer>
        <HeaderHome />
        <main>
          <SlideImagesHome />
          <StyledFilterSection>
            <fieldset>
              <label htmlFor="filter">Filtrar por tipo de serviço</label>
              <select
                id="filter"
                onChange={(event) => setKindOfService(event.target.value)}
              >
                {kindOfServices.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </fieldset>
          </StyledFilterSection>
          <section>
            <ContainerHome>
              <ServicesList />
            </ContainerHome>
          </section>
        </main>
        <Footer />
      </PageContainer>
    </motion.div>
  );
};
