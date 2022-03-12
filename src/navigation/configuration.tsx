import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerParamList, DrawerRoute } from "../../types";
import { filterRoutes, routes } from "./utils";
import { useTSelector } from "../store/hooks";
import { selectToken } from "../store/features/auth";

const { Navigator, Screen } = createDrawerNavigator<DrawerParamList>();

const RoutesDrawer = () => {
    const token = useTSelector(selectToken);
    const [renderList, setRenderList] = React.useState<DrawerRoute[]>(filterRoutes(token));

    const renderRoutesList = (list: typeof routes) => {
        const renderRouteScreen = ({ name, options, component }: DrawerRoute) => {
            return <Screen key={name} name={name} options={options} component={component} />;
        };

        return list.map(renderRouteScreen);
    };

    React.useEffect(() => {
        setRenderList(filterRoutes(token));
    }, [token]);

    return <Navigator initialRouteName="SignIn">{renderRoutesList(renderList)}</Navigator>;
};

export { RoutesDrawer };
