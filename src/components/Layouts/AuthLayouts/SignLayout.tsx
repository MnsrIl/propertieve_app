import React from 'react';
import { GestureResponderEvent, TextInput } from "react-native";
import { AuthLayout } from "./AuthLayout";
import { Link } from "../../Link";
import { Input } from "../../Input";
import { Toast, ToastVariants } from "../../Toast";

type SignTitles = "Sign In" | "Sign Up";

interface SignLayoutProps {
    title: SignTitles;
    loading?: boolean,
    toastMessage: string,
    toastVariant: ToastVariants,

    defaultEmail?: string,
    defaultPassword?: string,
    onPress?: (event: GestureResponderEvent) => void;
    onCaptionClick?: () => void;
    onChangeEmail: (newValue: string) => void;
    onChangePassword: (newValue: string) => void
}

const getCaptionTitle = (title: SignTitles) => {
    const signUpCaption = "I don't have an account";
    const signInCaption = "I already have an account";

    return title === "Sign In" ? signUpCaption : signInCaption;
}

const placeholderColor = "#87afd3";

const SignLayout = ({
    title,
    loading,
    onPress,
    onCaptionClick,
    onChangeEmail,
    onChangePassword,
    toastMessage,
    toastVariant,
    defaultEmail = "",
    defaultPassword = ""
}: SignLayoutProps) => {
    const [email, setEmail] = React.useState(defaultEmail);
    const [password, setPassword] = React.useState(defaultPassword);

    const passwordInputRef = React.useRef<TextInput|null>(null);

    const handleChangeEmail = (text: string) => {
        setEmail(text);
        onChangeEmail(text);
    }

    const handleChangePassword = (text: string) => {
        setPassword(text);
        onChangePassword(text);
    }

    React.useEffect(() => () => {
        setEmail("");
        setPassword("");
    }, []);

    const renderEmailInput = () => (
        <Input
            returnKeyType="next"
            onSubmitEditing={() => passwordInputRef?.current?.focus()}
            blurOnSubmit={false}

            value={email}
            onChangeText={handleChangeEmail}

            placeholder="Email"
            placeholderTextColor={placeholderColor}
        />
    );

    const renderPasswordInput = () => (
        <Input
            ref={passwordInputRef}

            value={password}
            onChangeText={handleChangePassword}

            placeholder="Password"
            placeholderTextColor={placeholderColor}
        />
    );

    const renderActionMessage = () => {
        return <Toast message={toastMessage} show variant={toastVariant}  />
    }

    return (
        <AuthLayout
            groupItems={
                <>
                    {renderActionMessage()}
                    {renderEmailInput()}
                    {renderPasswordInput()}
                </>
            }
            title={title}
            actionButtonTitle={title}
            actionButtonDisabled={loading}
            additionalCaption={
                <Link onPress={onCaptionClick}>{getCaptionTitle(title)}</Link>
            }
            onPressAction={onPress}
        />
    );
};

export { SignLayout };
