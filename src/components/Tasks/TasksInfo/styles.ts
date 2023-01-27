import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  tasksInfoContainer: {
    flexDirection: "row",
    width: "100%",
  },
  newContainer: {
    flexDirection: "row",
    flex: 1,
  },
  new: {
    fontFamily: "Inter_900Black",
    marginRight: 5,
    fontSize: 14,
    color: "#4EA8DE",
  },
  newCount: {
    fontFamily: "Inter_900Black",
    fontSize: 14,
    paddingHorizontal: 9,
    borderRadius: 15,
    color: "white",
    backgroundColor: "#333333",
  },
  finishedContainer: {
    flexDirection: "row",
  },
  finished: {
    fontFamily: "Inter_900Black",
    marginRight: 5,
    fontSize: 14,
    color: "#8284FA",
  },
  finishedCount: {
    fontFamily: "Inter_900Black",
    fontSize: 14,
    paddingHorizontal: 9,
    borderRadius: 15,
    color: "#D9D9D9",
    backgroundColor: "#333333",
  },
});
