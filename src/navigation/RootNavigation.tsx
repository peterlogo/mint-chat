import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { AuthNavigation } from "./AuthNavigation";
import { AppNavigation } from "./AppNavigation";
import { useAppSelector } from "../hooks";

export const RootNavigation = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        {user ? <AppNavigation /> : <AuthNavigation />}
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
