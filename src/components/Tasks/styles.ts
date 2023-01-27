import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  taskListContainer: {
    marginTop: 32,
  },
  taskList: {
    backgroundColor: "#262626",
    flexDirection: "row",
    alignItems: "center",
    maxHeight: 64,
    marginBottom: 8,
    borderRadius: 8,
    paddingVertical: 20,
  },
  taskDescriptionText: {
    flex: 1,
    color: "#F2F2F2",
    marginHorizontal: 8,
  },
});
