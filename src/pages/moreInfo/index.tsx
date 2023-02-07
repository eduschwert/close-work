import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { motion } from "framer-motion";
import { LoadingFullPage } from "../../components/LoadingFullPage";
import { Title } from "../../components/Title";
import { iListComments } from "../../context/type";
import { api } from "../../services/api";
import { DescriptionMoreInfo } from "./DescriptionMoreInfo";
import { HeaderMoreInfo } from "./HeaderMoreInfo";
import { ListComments } from "./ListComments";
import { NewComment } from "./NewComment";
import { ProfileMoreInfo } from "./ProfileMoreInfo";
import { StyledMoreInfo, StyledService } from "./style";

export interface iServiceMoreInfo {
  userId: number;
  service_provider: string;
  service_provider_avatar: string;
  kind_of_service: string;
  phone_number: string;
  description: string;
  id: number;
}

export const MoreInfo = () => {
  const [serviceMoreInfo, setServiceMoreInfo] = useState(
    {} as iServiceMoreInfo
  );

  const [listComments, setListComments] = useState<iListComments[]>([]);
  const [loadingPage, setLoadingPage] = useState(true);

  const params = useParams();

  useEffect(() => {
    const requestServicesAndComments = async () => {
      try {
        const responseServices = await api.get(`services/${params.serviceId}`);
        const responseComments = await api.get(
          `comments?serviceId=${params.serviceId}`
        );
        setServiceMoreInfo(responseServices.data);
        setListComments(responseComments.data);

        const data = {
          email: "usercoments@gmail.com",
          password: "123456",
        };
        const responseLogin = await api.post("/login", data);
        localStorage.setItem(
          "@closework:commentToken",
          responseLogin.data.accessToken
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingPage(false);
      }
    };
    requestServicesAndComments();
  }, []);

  return (
    <>
      {loadingPage ? (
        <LoadingFullPage />
      ) : (
        <motion.div
          initial={{ y: "5%", opacity: 0.8 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <StyledMoreInfo>
            <HeaderMoreInfo />
            <ProfileMoreInfo service={serviceMoreInfo} />
            <DescriptionMoreInfo
              service={serviceMoreInfo}
              listComments={listComments}
            />
            <StyledService>
              <Title type="Heading2" colorTitle="blue-2">
                Criar comentário
              </Title>
            </StyledService>
            <NewComment setListComments={setListComments} />
            <StyledService>
              <Title type="Heading2" colorTitle="blue-2">
                Comentários ({listComments.length})
              </Title>
            </StyledService>
            <ListComments listCommentsProp={listComments} />
            <Footer />
          </StyledMoreInfo>
        </motion.div>
      )}
    </>
  );
};
