import { useState } from "react";
import { Alert, TextInput, TouchableOpacity, View } from "react-native";
import { Add } from "../../assets/Icons/Add";
import { styles } from "./styles";

export function InputTask({ onTaskAdd }: any) {
  const [taskDescription, setTaskDescription] = useState("");

  function handleTaskAdd() {
    if (taskDescription.trim() === "")
      Alert.alert("Input", "Preencha com o nome da tarefa.");
    else {
      onTaskAdd(taskDescription);
    }
    setTaskDescription("");
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.inputText}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={taskDescription}
        onChangeText={setTaskDescription}
      />
      <TouchableOpacity style={styles.addButton} onPress={handleTaskAdd}>
        <Add />
      </TouchableOpacity>
    </View>
  );
}
