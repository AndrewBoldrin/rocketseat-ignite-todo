import { View } from "react-native";
import { Rocket } from "../../../assets/Icons/Rocket";
import { styles } from "./styles";

export function Logo() {
  return (
    <View style={styles.logoContainer}>
      <Rocket />
    </View>
  );
}
