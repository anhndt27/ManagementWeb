import { useEffect } from "react";
import { loginRequest } from "../services/loginService";
import { useNavigate } from "react-router-dom";
import PAGES from "../../../router/pages";
import { useSelector } from "react-redux";
import { RootState } from "../../../stores";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

interface FormValuesLogin {
    email: string;
    password: string;
}
 
const useLogin = () => {
    const navigate = useNavigate();
    const token = useSelector((state: RootState) => state.auth.token);
    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("You have entered an invalid email address. Please try again.")
            .required("Email is required."),
        password: Yup.string().required("Password is required."),
    });
    const { control, handleSubmit, formState: { errors }} = useForm<FormValuesLogin>({resolver: yupResolver(validationSchema)});

    const handleLogin = async (loginInfor: FormValuesLogin) => {
        await loginRequest(loginInfor);
    }

    useEffect(() => {
        const enterKeyListener = (e : KeyboardEvent) => {
          if (e.code === "Enter" || e.code === "NumpadEnter") {
            handleSubmit(handleLogin);
          }
        };
        document.addEventListener("keydown", enterKeyListener);

        return () => {
        document.removeEventListener("keydown", enterKeyListener);
        };
    } , []);

    useEffect(() => {
        if (token) {
          navigate(PAGES.users);
        }
      }, [token]);

    return {
        formState: {
            errors
        },
        func: {
            control,
            handleSubmit,
            onSubmit: handleSubmit(handleLogin)
        },
    };
}

export default useLogin;