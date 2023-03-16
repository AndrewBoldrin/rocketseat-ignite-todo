import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from "../../../assets/Icons/CheckBox";
import { Trash } from "../../../assets/Icons/Trash";
import { ITask } from "../../screen/Home";
import { EmptyTaskContainer } from "./EmptyTaskContainer";
import { styles } from "./styles";
import { TasksInfo } from "./TasksInfo";

type Props = {
  tasks: ITask[];
  onToggleFinished: (id: number) => void;
  onRemoveTask: (id: number) => void;
};

export function Tasks({ tasks, onToggleFinished, onRemoveTask }: Props) {
  const newCount = tasks.length;
  const finishedCount = tasks.filter((task) => task.isDone).length;

  return (
    <View style={{ marginTop: 32 }}>
      <TasksInfo newCount={newCount} finishedCount={finishedCount} />
      {tasks.length === 0 ? (
        <EmptyTaskContainer />
      ) : (
        <View style={styles.taskListContainer}>
          {tasks.map((task: ITask) => (
            <View key={task.id} style={styles.taskList}>
              <TouchableOpacity
                style={{ marginLeft: 12 }}
                onPress={() => onToggleFinished(task.id)}
              >
                <CheckBox isSelected={task.isDone} />
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.taskDescriptionText,
                  textDecorationLine: task.isDone ? "line-through" : "none",
                }}
              >
                {task.description}
              </Text>

              <TouchableOpacity
                style={{ marginRight: 8 }}
                onPress={() => onRemoveTask(task.id)}
              >
                <Trash />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      )}
    </View>
  );
}
