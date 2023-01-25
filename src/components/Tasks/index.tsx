import { View } from "react-native";
import { ITask } from "../../screen/Home";
import { TasksInfo } from "./TasksInfo";

type Props = {
  tasks: ITask[];
};

export function Tasks({ tasks }: Props) {
  const newCount = tasks.filter((task) => !task.isDone).length;
  const finishedCount = tasks.length - newCount;

  return (
    <View style={{ marginTop: 32 }}>
      <TasksInfo newCount={newCount} finishedCount={finishedCount} />
      {/* Tasks */}
    </View>
  );
}
