import { StyledLogin } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import fullLogo from "../../assets/light-hands-logo.svg";
import workersImg from "../../assets/workers-logo.svg";
import { ILoginFormData } from "./types";
import { loginSchema } from "./loginSchema";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { Title } from "../../components/Title";
import { RotatingLines } from "react-loader-spinner";
import { motion } from "framer-motion";
import {
  StyledButton,
  StyledLink,
  StyledLinkInline,
} from "../../styles/buttons";

export const Login = () => {
  const { login, localLoading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  return (
    <StyledLogin>
      <motion.section
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <Title colorTitle="blue-2" type="Heading1">
          Login
        </Title>
        <div>
          <StyledLinkInline to="/home">Retornar para Home</StyledLinkInline>
        </div>
        <form action="submit" onSubmit={handleSubmit(login)} noValidate>
          <Input
            id="input-email"
            labelName="Email"
            type="text"
            linkForm={register("email")}
            placeholder="Digite seu email"
            error={errors.email?.message}
          />
          <Input
            id="input-password"
            labelName="Senha"
            type="password"
            linkForm={register("password")}
            placeholder="Digite sua senha"
            error={errors.password?.message}
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
              "Login"
            )}
          </StyledButton>
          <div>
            <p>Ainda não tem conta? Realize seu cadastro agora!</p>
            <StyledLink buttonStyle="blueLight" to="/register">
              Cadastrar
            </StyledLink>
          </div>
        </form>
      </motion.section>
      <motion.section
        initial={{ scale: 1.02 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, ease: "linear" }}
      >
        <img src={fullLogo} className="logo-login" alt="Logo Close Worker" />
        <img
          src={workersImg}
          className="workers-img-login"
          alt="imagem de profissões"
        />
      </motion.section>
    </StyledLogin>
  );
};
