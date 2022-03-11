import "react-native-gesture-handler";
import Main from "./src";
import { Provider } from "react-redux";
import { store } from "./src/store/configureStore";

export default function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}
