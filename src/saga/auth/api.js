import {auth, provider} from "../api";
import * as Google from 'expo-google-app-auth';

async function signInWithGoogleAsync() {
  try {
    const result = await Google.logInAsync({
     // androidClientId: YOUR_CLIENT_ID_HERE,
      iosClientId: '970588219140-kfdaao8uotp1iek0sc0hklp7dns11eqp.apps.googleusercontent.com',
      scopes: ['profile', 'email'],
    });
    if (result.type === 'success') {
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (e) {
    return { error: true };
  }
}

export default signInWithGoogleAsync;
