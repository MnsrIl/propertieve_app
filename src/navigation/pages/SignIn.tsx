import React from "react";
import { NavigationProps } from "../../../types";
import { SignLayout } from "../../components/Layouts/AuthLayouts/SignLayout";
import { ToastVariants } from "../../components/Toast";
import { BASE_API } from "../../utils/constants";

const SignIn = ({ navigation, onTokenSet }: NavigationProps<"SignIn">) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [toastInfo, setToastInfo] = React.useState({ message: "", variant: "error" });
    const [signingIn, setSigningIn] = React.useState(false);

    const handleSubmit = async () => {
        setToastInfo({ ...toastInfo, message: "" });

        if (!email || !password) {
            setToastInfo({ ...toastInfo, message: "You have to provide an email and password" });
            return;
        }

        setSigningIn(true);

        try {
            const credentials = { email, password };

            const response = await fetch(BASE_API + "/users/sign-in", {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();

            if (data.error) {
                onTokenSet("");
                setToastInfo({ ...toastInfo, message: data.error });
            } else {
                onTokenSet(data.data);
            }
        } catch (e) {
            console.error("ERROR");
            setToastInfo({ ...toastInfo, message: JSON.stringify(e) });
        } finally {
            setSigningIn(false);
        }
    };

    return (
        <SignLayout
            loading={signingIn}
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
