import { Box, Button, FormControl, Input, Stack } from "native-base";
import { GlobalStyles } from "../constants";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";

const { colors } = GlobalStyles;

export function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChangeEmail = (value: string) => setEmail(value);
  const handleChangePassword = (value: string) => setPassword(value);

  return (
    <Box style={styles.container}>
      <Box style={styles.titleContainer}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subHeader}>Login to access your account</Text>
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
        <FormControl isRequired>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            value={password}
            size="md"
            type="password"
            placeholder="Enter password"
            onChangeText={handleChangePassword}
          />
        </FormControl>
      </Stack>
      <Stack space={4} style={styles.buttonContainer}>
        <Button>Login</Button>
        <Button
          variant="outline"
          onPress={() => navigation.navigate("Register")}
        >
          Create Account
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
    fontSize: 28,
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
