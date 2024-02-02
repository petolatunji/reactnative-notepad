import {
  Keyboard,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Note from "./components/Note";
import { useState } from "react";

export default function App() {
  const [task, setTask] = useState();
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    Keyboard.dismiss();
    setTaskList([...taskList, task]);
    setTask("");
    console.log(task);
  };
  const handleDelete = (index) => {
    const copy = [...taskList];
    copy.slice(index, 1);
    setTaskList(copy);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          {taskList.map((items, index) => {
            return (
              <View>
                <Note text={items} handleDelete={handleDelete} />
              </View>
            );
          })}
        </View>

        <View style={styles.plus}>
          <TextInput
            placeholder="Enter task here"
            style={styles.input}
            value={task}
            onChangeText={(text) => setTask(text)}
          />
          <Ionicons
            name={"add-circle-sharp"}
            size={40}
            color="green"
            onPress={() => addTask()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
    marginTop: 60,
    padding: 16,
  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    padding: 10,
    borderRadius: 10,
    width: "90%",
    marginRight: 20,
  },
  plus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: 60,
    padding: 15,
  },
});
