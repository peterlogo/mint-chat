import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { RootNavigation, store } from "./src";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </>
  );
}
