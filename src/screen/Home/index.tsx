import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Logo } from "../../components/Logo";
import { Add } from "../../../assets/Icons/Add";
import { InputTask } from "../../components/InputTask";

interface ITask {
  description: string;
  isDone: boolean;
}

const tasksInitialData = {
  description: "initial description",
  isDone: false,
};

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([tasksInitialData]);
  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) return null;

  function handleOnAdd(text: string) {
    const newTask = { ...tasksInitialData, description: text };
    setTasks([...tasks, newTask]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}></View>
      <Logo />
      <InputTask onTaskAdd={handleOnAdd} />

      <View style={{ marginTop: 32 }}>
        {tasks.map((task) => (
          <Text key={task.description} style={{ color: "white" }}>
            {task.description}
          </Text>
        ))}
        {/* TODO: News and Finished Tabs */}
        {/* TODO: Tasks */}
      </View>
    </View>
  );
}
