import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "./registerSchema";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { StyledRegister } from "./style";
import fullLogo from "../../assets/light-hands-logo.svg";
import workersImg from "../../assets/workers-logo.svg";
import { Input } from "../../components/Input";
import { Title } from "../../components/Title";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import {
  StyledButton,
  StyledLink,
  StyledLinkInline,
} from "../../styles/buttons";
import { iUserFormRegister } from "../../context/UserContext/@types";
import { handlePhone } from "../../functions";

export const Register = () => {
  const { register: registerSubmit, localLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserFormRegister>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  return (
    <StyledRegister>
      <motion.section
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <img src={fullLogo} className="logo" alt="Logo Close Worker" />
        <img
          src={workersImg}
          className="workers-img"
          alt="imagem de profissões"
        />
      </motion.section>
      <motion.section
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <Title colorTitle="blue-2" type="Heading1">
          Cadastro
        </Title>
        <div>
          <StyledLinkInline to="/home">Retornar para Home</StyledLinkInline>
        </div>
        <form
          action="submit"
          onSubmit={handleSubmit(registerSubmit)}
          noValidate
        >
          <Input
            id="input-email"
            labelName="Email"
            type="text"
            linkForm={register("email")}
            placeholder="Digite seu email"
            error={errors.email?.message}
          />

          <Input
            id="input-name"
            labelName="Nome"
            type="text"
            linkForm={register("name")}
            placeholder="Digite seu nome"
            error={errors.name?.message}
          />

          <Input
            id="input-password"
            labelName="Senha"
            type="password"
            linkForm={register("password")}
            placeholder="Digite sua senha"
            error={errors.password?.message}
          />

          <Input
            id="input-confirm-password"
            labelName="Confirmar senha"
            type="password"
            linkForm={register("passwordConfirm")}
            placeholder="Digite sua senha novamente"
            error={errors.passwordConfirm?.message}
          />

          <Input
            id="input-contact"
            labelName="Contato"
            type="tel"
            linkForm={register("contact")}
            placeholder="(11) 92222-3333"
            error={errors.contact?.message}
            maxLength={15}
          />

          <StyledButton
            buttonStyle="blueDark2"
            type="submit"
            disabled={localLoading}
          >
            {localLoading ? (
              <RotatingLines
                strokeColor="white"
                strokeWidth="5"
                animationDuration="0.75"
                width="30"
                visible={true}
              />
            ) : (
              "Cadastrar"
            )}
          </StyledButton>
        </form>
        <div>
          <p>Já possui conta? Realize seu login agora!</p>
          <StyledLink buttonStyle="blueLight" to="/login">
            Login
          </StyledLink>
        </div>
      </motion.section>
    </StyledRegister>
  );
};
