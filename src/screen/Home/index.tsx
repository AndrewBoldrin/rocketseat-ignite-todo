import { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import { useFonts, Inter_900Black } from "@expo-google-fonts/inter";
import { Logo } from "../../components/Logo";
import { InputTask } from "../../components/InputTask";
import { Tasks } from "../../components/Tasks";

export interface ITask {
  description: string;
  isDone: boolean;
  id: number;
}

const tasksInitialData = {
  description: "initial description",
  isDone: false,
};

export function Home() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded) return null;

  function handleOnAdd(text: string) {
    const newTask = { ...tasksInitialData, description: text, id: Date.now() };
    setTasks([...tasks, newTask]);
  }

  function handleToggleFinished(taskId: number) {
    const updatedTasks = tasks.map((task: ITask, index: number) => {
      if (taskId === task.id) return { ...task, isDone: !task.isDone };
      return task;
    });
    setTasks(updatedTasks);
  }

  function handleRemoveTask(taskId: number) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerBackground}></View>
      <Logo />
      <InputTask onTaskAdd={handleOnAdd} />
      <Tasks
        tasks={tasks}
        onToggleFinished={handleToggleFinished}
        onRemoveTask={handleRemoveTask}
      />
    </View>
  );
}
