import { useState } from "react";
import { StyleSheet, Text, Alert } from "react-native";
import { Box, Button, FormControl, Input, Stack } from "native-base";
import { GlobalStyles } from "../constants";
import { useAppDispatch, useAppSelector } from "../hooks";
import { registerUser } from "../features";

const { colors } = GlobalStyles;

export function RegisterScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");

  const [passwordErr, setPasswordErr] = useState<boolean>(false);

  const handleChangeEmail = (value: string) => setEmail(value);
  const handleChangePassword = (value: string) => setPassword(value);
  const handleChangeConfirm = (value: string) => setConfirm(value);

  const dispatch = useAppDispatch();
  const { loading, error } = useAppSelector((state) => state.auth);

  const handleRegister = async () => {
    if (password !== confirm) {
      setPasswordErr(true);
      return;
    }
    await dispatch(registerUser({ email, password }));
  };

  if (error) Alert.alert("Error", error);

  return (
    <Box style={styles.container}>
      <Box style={styles.titleContainer}>
        <Text style={styles.header}>New Account</Text>
        <Text style={styles.subHeader}>
          Create a new account to start chatting
        </Text>
      </Box>
      <Stack space={4}>
        <FormControl isRequired>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            value={email}
            size="md"
            type="text"
            placeholder="Enter email address"
            onChangeText={handleChangeEmail}
          />
        </FormControl>
        <FormControl isRequired isInvalid={passwordErr}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            value={password}
            size="md"
            type="password"
            placeholder="Enter password"
            onChangeText={handleChangePassword}
          />
        </FormControl>
        <FormControl isRequired isInvalid={passwordErr}>
          <FormControl.Label>Confirm Password</FormControl.Label>
          <Input
            value={confirm}
            size="md"
            type="password"
            placeholder="Enter password"
            onChangeText={handleChangeConfirm}
          />
          <FormControl.ErrorMessage>
            Passwords do not match
          </FormControl.ErrorMessage>
        </FormControl>
      </Stack>
      <Stack space={4} style={styles.buttonContainer}>
        <Button onPress={handleRegister} isLoading={loading === "pending"}>
          Create Account
        </Button>
        <Button variant="outline" onPress={() => navigation.navigate("Login")}>
          Login
        </Button>
      </Stack>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 36,
  },
  titleContainer: {
    marginTop: 97,
    marginBottom: 35,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.black,
    paddingBottom: 8,
  },
  subHeader: {
    fontSize: 16,
    color: colors.gray,
  },
  buttonContainer: {
    marginTop: 45,
  },
});
