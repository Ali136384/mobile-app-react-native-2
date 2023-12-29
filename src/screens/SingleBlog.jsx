import React, { useContext, useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import Context from "../context/BlogContext";
function SingleBlog({ route, navigation }) {
  const { getOneBlog, editBlog, posts } = useContext(Context);

  const [post, setPost] = useState([]);
  const [isInput, setIsInput] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  useEffect(() => {
    setPost(getOneBlog(route.params.id));
  }, []);
  return (
    <>
      {isInput ? (
        <TouchableOpacity
          onPress={() => {
            setIsInput(!isInput);
            editBlog(route.params.id, newTitle, newDesc);
          }}
        >
          <View className="flex flex-row p-2 bg-white h-16 items-center border-gray-300 border-2 m-1">
            <Text className="text-center font-bold text-[21px] flex-1">
              End Editing
            </Text>
            <Text>
              <AntDesign name="checkcircleo" size={24} color="black" />
            </Text>
          </View>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={() => setIsInput(!isInput)}>
          <View className="flex flex-row p-2 bg-white h-16 items-center border-gray-300 border-2 m-1">
            <Text className="text-center font-bold text-[21px] flex-1">
              Edit the blog
            </Text>
            <Text>
              <AntDesign className="" name="edit" size={28} color="black" />
            </Text>
          </View>
        </TouchableOpacity>
      )}
      <View>
        {post?.map((item) => {
          return (
            <>
              <View
                className="h-28 bg-white shadow-2xl m-2 p-2 rounded-lg "
                key={item.id}
              >
                {isInput ? (
                  <TextInput
                    onChangeText={(text) => setNewTitle(text)}
                    defaultValue={item?.title}
                  />
                ) : (
                  <Text className="text-center font-bold text-[21px]">
                    {item?.title}
                  </Text>
                )}
                {isInput ? (
                  <TextInput
                    onChangeText={(text) => setNewDesc(text)}
                    defaultValue={item.desc}
                  />
                ) : (
                  <Text className="text-[19px]">{item?.desc}</Text>
                )}
              </View>
            </>
          );
        })}
      </View>
    </>
  );
}

export default SingleBlog;
