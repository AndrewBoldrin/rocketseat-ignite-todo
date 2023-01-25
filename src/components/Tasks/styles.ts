import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  emptyTaskContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 250,
    borderTopWidth: 0.5,
    borderTopColor: "#808080",
  },
  emptyIcon: {
    width: 56,
    height: 56,
  },
  noTaskText: {
    color: "#808080",
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
  },
  createTaskText: {
    color: "#808080",
    fontSize: 16,
  },
});
