import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import { User } from "firebase/auth";
import { AuthNavigation } from "./AuthNavigation";

export interface RootNavigationProps {
  user: User;
}

export const RootNavigation = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};
