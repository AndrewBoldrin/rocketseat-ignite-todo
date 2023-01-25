import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  newCount: number;
  finishedCount: number;
};

export function TasksInfo({ newCount, finishedCount }: Props) {
  return (
    <View style={styles.tasksInfoContainer}>
      <View style={styles.newContainer}>
        <Text style={styles.new}>Criadas</Text>
        <Text style={styles.newCount}>{newCount}</Text>
      </View>
      <View style={styles.finishedContainer}>
        <Text style={styles.finished}>Concluidas</Text>
        <Text style={styles.finishedCount}>{finishedCount}</Text>
      </View>
    </View>
  );
}
