import { useRef } from "react";
import {
  StyledContainerImgProfile,
  StyledContainerImgModal,
  StyledContainerImgHome,
} from "./style";
import defaultImageProfile from "../../assets/default-profile-image.svg";
import { iImgProfileProps } from "./@types";

export const ImgProfile = ({ alt, srcLink, type }: iImgProfileProps) => {
  const imgProfileRef = useRef<HTMLImageElement>(null);
  const validateImgProfile = () => {
    if (imgProfileRef.current !== null) {
      imgProfileRef.current.src = defaultImageProfile;
    }
  };

  switch (type) {
    case "profile":
      return (
        <StyledContainerImgProfile>
          <img
            src={srcLink}
            alt={alt}
            ref={imgProfileRef}
            onError={validateImgProfile}
          />
        </StyledContainerImgProfile>
      );
      break;

    case "modal":
      return (
        <StyledContainerImgModal>
          <img
            src={srcLink}
            alt={alt}
            ref={imgProfileRef}
            onError={validateImgProfile}
          />
        </StyledContainerImgModal>
      );
      break;
    case "home":
      return (
        <StyledContainerImgHome>
          <img
            src={srcLink}
            alt={alt}
            ref={imgProfileRef}
            onError={validateImgProfile}
          />
        </StyledContainerImgHome>
      );
      break;
  }
};
