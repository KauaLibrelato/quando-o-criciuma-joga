import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabRoutes } from "./tabRoutes";

export function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}

export default Routes;