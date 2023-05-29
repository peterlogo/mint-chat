import {
  getAuth,
  signInWithEmailAndPassword,
  User,
  AuthError,
  signOut,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../firebase";
import { AuthParam } from "../../types";

const auth = getAuth(app);

/**
 * Register user with email and password
 * @param email
 * @param password
 * @returns
 */
export const register = async (param: AuthParam): Promise<User> => {
  try {
    const { email, password } = param;
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    throw error;
  }
};

/**
 * Login with email and password
 * @param email
 * @param password
 * @returns
 */
export const login = async (param: AuthParam): Promise<User> => {
  try {
    const { email, password } = param;
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    return user;
  } catch (error: any) {
    throw error;
  }
};

/**
 * Logout user from firebase
 * @returns
 */
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    return;
  } catch (error: any) {
    throw error;
  }
};
