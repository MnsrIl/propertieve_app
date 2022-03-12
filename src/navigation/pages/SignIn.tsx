import React from "react";
import { useDispatch } from "react-redux";
import { NavigationProps } from "../../../types";
import { SignLayout } from "../../components/Layouts/AuthLayouts/SignLayout";
import { ToastVariants } from "../../components/Toast";
import { AUTH_CLEAR_ERRORS, selectAuthActionInfo, signIn } from "../../store/features/auth";
import { useTSelector } from "../../store/hooks";

const SignIn = ({ navigation }: NavigationProps<"SignIn">) => {
    const dispatch = useDispatch();
    const signingInfo = useTSelector(selectAuthActionInfo);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [toastInfo, setToastInfo] = React.useState({ message: "", variant: "error" });

    const handleSubmit = async () => {
        setToastInfo({ ...toastInfo, message: "" });

        if (!email || !password) {
            return setToastInfo({
                ...toastInfo,
                message: "You have to provide an email and password",
            });
        }

        const credentials = { email, password };

        dispatch(signIn(credentials));
    };

    React.useEffect(() => {
        if (signingInfo.error) {
            setToastInfo({ ...toastInfo, message: signingInfo.error });
            dispatch(AUTH_CLEAR_ERRORS);
        }
    }, [signingInfo.error]);

    return (
        <SignLayout
            loading={signingInfo.loading}
            toastMessage={toastInfo.message}
            toastVariant={toastInfo.variant as ToastVariants}
            title="Sign In"
            onChangeEmail={setEmail}
            onChangePassword={setPassword}
            onCaptionClick={() => navigation.navigate("SignUp")}
            onPress={handleSubmit}
        />
    );
};

export { SignIn };
