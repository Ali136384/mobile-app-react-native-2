import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity } from "react-native";
import { useContext } from "react";
import Context from "../context/BlogContext";
function CreateScreen({ navigation }) {
  const { posts, addPost } = useContext(Context);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  return (
    <>
      <TextInput
        onChangeText={(text) => setTitle(text)}
        placeholder="Enter title"
        className="p-2 border-[1px] m-2 rounded-md placeholder:pl-"
      />
      <TextInput
        onChangeText={(text) => setDesc(text)}
        placeholder="Enter desc"
        className="p-2 border-[1px] m-2 rounded-md placeholder:pl-"
      />
      <TouchableOpacity
        onPress={() => {
          addPost(title, desc);
          navigation.navigate("Home");
        }}
      >
        <Text className="font-bold text-[23px] bg-gray-400 w-24 my-0 mx-auto text-center py-2 px-4 rounded-xl cursor-pointer">
          Save
        </Text>
      </TouchableOpacity>
    </>
  );
}

export default CreateScreen;
