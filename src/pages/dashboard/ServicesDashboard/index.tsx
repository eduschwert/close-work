import { useContext } from "react";
import { LoadingContainer } from "../../../components/LoadingContainer";
import { Title } from "../../../components/Title";
import { ServiceContext } from "../../../context/ServicesContext";
import { StyledButton } from "../../../styles/buttons";
import { ContainerHome } from "../style";
import { CardDashboard } from "./cardDashboard";
import { StyledServicesDashboard, StyledRegisterServices, StyledService, StyledServices } from "./style";


export const ServicesDashboard = () => {
  const {
    setOpenModal,
    setTypeModal,
    servicesUser
  
  } = useContext(ServiceContext);
  return (
    <StyledServicesDashboard>
      <StyledRegisterServices>
        <Title
          children="Para cadastrar um novo serviço pressione o botão abaixo"
          type="Body-600"
          colorTitle="blue-1"
        />
        <StyledButton
          buttonStyle="blueDark"
          type="button"
          onClick={() => {
            setOpenModal(true);
            setTypeModal("RegisterService");
          }}
        >
          Cadastar
        </StyledButton>
      </StyledRegisterServices>
      <StyledService>
        <Title children="Serviços" type="Heading2" colorTitle="blue-2" />
      </StyledService>
      <ContainerHome>
        { servicesUser?.length >
         0 ? (
            <StyledServices>
              {servicesUser?.map((item, index) => {
                return <CardDashboard key={index} item={item} />;
              })}
            </StyledServices>
          ) : (
            <Title colorTitle="blue-1" type="Heading2">
              Não existem serviços cadastrados
            </Title>
          )
        ) : (
          <LoadingContainer />
        )}
      </ContainerHome>
    </StyledServicesDashboard>
  );
};
