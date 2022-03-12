import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList, DrawerRoute } from "../../types";
import { filterRoutes, routes } from "./utils";
import { useTSelector } from "../store/hooks";
import { selectToken } from "../store/features/auth";

const { Navigator, Screen } = createDrawerNavigator<DrawerParamList>();

const RoutesDrawer = () => {
    const _token = useTSelector(selectToken);
    const [token, setToken] = React.useState("");
    const [renderList, setRenderList] = React.useState<DrawerRoute[]>(filterRoutes(_token));

    const renderRoutesList = (list: typeof routes) => {
        const renderRouteScreen = ({ name, options, component: Component }: DrawerRoute) => {
            return (
                <Screen
                    key={name}
                    name={name}
                    options={options}
                    children={(props) => (
                        <Component {...props} onTokenSet={setToken} token={token} />
                    )}
                />
            );
        };

        return list.map(renderRouteScreen);
    };

    React.useEffect(() => {
        setRenderList(filterRoutes(_token));
    }, [_token]);

    return <Navigator initialRouteName="SignIn">{renderRoutesList(renderList)}</Navigator>;
};

export { RoutesDrawer };
