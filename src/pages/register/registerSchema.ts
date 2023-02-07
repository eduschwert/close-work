import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("Nome obrigatório")
    .min(3, "Nome deve ter no mínimo 3 caracteres")
    .max(128, "Nome excedeu o limite de 128 caracteres"),
  email: yup
    .string()
    .required("Email obrigatório")
    .email("Email inválido")
    .trim(),
  contact: yup
    .string()
    .required("Contato obrigatório")
    .min(14, "Número inválido"),
  password: yup
    .string()
    .required("Senha obrigatória.")
    .matches(/(?=.*?[A-Z])/, "É necessário uma letra maiúscula.")
    .matches(/(?=.*?[a-z])/, "É necessário uma letra minúscula.")
    .matches(/(?=.*?[0-9])/, "É necessário pelo menos um número.")
    .matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um símbolo")
    .min(8, "É necessário ter pelo menos 8 caracteres")
    .max(16, "Senha excedeu o limite de 16 caracteres"),
  confirmPassword: yup
    .string()
    .required("Confirme a sua senha")
    .oneOf([yup.ref("password"), null], "AS 2 senhas não conferem"),
});
