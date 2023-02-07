import { StyledContainerLoading } from "./style";
import { Oval } from "react-loader-spinner";
export const LoadingFullPage = () => {
  return (
    <StyledContainerLoading>
      <Oval
        height={80}
        width={80}
        color="var(--color-blue-2)"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="var(--color-blue-4)"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </StyledContainerLoading>
  );
};
