import React from 'react';
import { NavigationProps } from "../../../types";
import { SignLayout } from "../../components/Layouts/AuthLayouts/SignLayout";


const SignUp = ({ navigation }: NavigationProps<"SignUp">) => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    return (
      <SignLayout
          title="Sign Up"
          onChangeEmail={setEmail}
          onChangePassword={setPassword}
          onCaptionClick={() => navigation.navigate("SignIn")}
      />
    );
}

export { SignUp };
