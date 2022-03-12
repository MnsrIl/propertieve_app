import React from "react";
import { useDispatch } from "react-redux";
import { NavigationProps } from "../../../types";
import { SignLayout } from "../../components/Layouts/AuthLayouts/SignLayout";
import { ToastVariants } from "../../components/Toast";
import { BASE_API } from "../../utils/constants";
import { AUTH_CLEAR_ERRORS, selectAuthActionInfo, signUp } from "../../store/features/auth";
import { useTSelector } from "../../store/hooks";

const SignUp = ({ navigation }: NavigationProps<"SignUp">) => {
    const dispatch = useDispatch();
    const signingUpInfo = useTSelector(selectAuthActionInfo);

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [toastInfo, setToastInfo] = React.useState({ message: "", variant: "error" });
    const [signingUp, setSigningUp] = React.useState(false);

    const navigateToSignIn = (): void => navigation.navigate("SignIn");

    const handleSubmitPress = () => {
        setToastInfo({ ...toastInfo, message: "" });

        if (!email || !password) {
            setToastInfo({ ...toastInfo, message: "You have to provide an email and password" });
            return;
        }

        const credentials = { email, password };

        dispatch(signUp(credentials, navigateToSignIn));
    };

    const handleSubmit = async () => {
        setToastInfo({ ...toastInfo, message: "" });

        if (!email || !password) {
            setToastInfo({ ...toastInfo, message: "You have to provide an email and password" });
            return;
        }

        setSigningUp(true);

        try {
            const credentials = { email, password };

            const response = await fetch(BASE_API + "/users/sign-up", {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            if (!data.error) {
                navigateToSignIn();
            } else {
                setToastInfo({ ...toastInfo, message: data.error });
            }
        } catch (e) {
            console.error("ERROR");
            setToastInfo({ ...toastInfo, message: JSON.stringify(e) });
        } finally {
            setSigningUp(false);
        }
    };

    React.useEffect(() => {
        if (signingUpInfo.error) {
            setToastInfo({ ...toastInfo, message: signingUpInfo.error });
            dispatch(AUTH_CLEAR_ERRORS);
        }
    }, [signingUpInfo.error]);

    return (
        <SignLayout
            loading={signingUpInfo.loading}
            toastVariant={toastInfo.variant as ToastVariants}
            toastMessage={toastInfo.message}
            title="Sign Up"
            onChangeEmail={setEmail}
            onChangePassword={setPassword}
            onCaptionClick={() => navigateToSignIn()}
            onPress={handleSubmitPress}
        />
    );
};

export { SignUp };
