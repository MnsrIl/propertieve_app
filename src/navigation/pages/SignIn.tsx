import React from 'react';
import { NavigationProps } from "../../../types";
import { SignLayout } from "../../components/Layouts/AuthLayouts/SignLayout";

const SignIn = ({ navigation, onTokenSet }: NavigationProps<"SignIn">) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = () => {
        const credentials = { email, password };

        onTokenSet("token");
    }

    return (
        <SignLayout
            title="Sign In"
            onChangeEmail={setEmail}
            onChangePassword={setPassword}
            onCaptionClick={() => navigation.navigate("SignUp")}
            onPress={handleSubmit}
        />
    );
}


export { SignIn };
