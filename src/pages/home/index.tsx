import axios from "axios";
import { registerRootComponent } from "expo";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Button from "../../components/common/buttons/Button";

interface listProps {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [list, setList] = useState<listProps[]>([]);

  useEffect(() => {
    axios
      .get("http://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        const newList = res.data.splice(0, 100);
        setList([...newList]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        {list.map((item, index) => (
          <Text style={{ color: "#fff" }} key={index}>
            {index} - {item.title}
          </Text>
        ))}

        <StatusBar style='auto' />
      </ScrollView>
      <Text>

      </Text>
      <Button
        onPressIn={() => console.warn("O botão foi tocado 2 vezes")}
      >
        Aperte para testar
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#303030',
    padding: 20,
  },
  container: {
    padding: 20,
    flex: 1,
    color: "#fff",
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    overflow: "scroll",
  },
});

export default registerRootComponent(App);
