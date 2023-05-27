import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { NativeBaseProvider } from "native-base";
import { store } from "./src/store";
import { HomeScreen } from "./src/screens";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <NativeBaseProvider>
          <HomeScreen />
        </NativeBaseProvider>
      </Provider>
    </>
  );
}
