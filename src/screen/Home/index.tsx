import { View, Text } from "react-native";
import { styles } from "./styles";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Logo } from "../../components/Logo";

export function Home() {
  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container}>
      <Logo />
      {/* TODO: New Task Input */}
      {/* TODO: News and Finished Tabs */}
      {/* TODO: Tasks */}
    </View>
  );
}
