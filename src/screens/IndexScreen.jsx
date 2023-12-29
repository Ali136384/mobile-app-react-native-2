import React, { useEffect, useState } from "react";

import { FlatList, Text, Button, TouchableOpacity, View } from "react-native";

import Context from "../context/BlogContext";

import { AntDesign, Ionicons } from "@expo/vector-icons";

import { useContext } from "react";

function HomeScreen({ navigation }) {
  const { posts, removeContxt } = useContext(Context);

  return (
    <>
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <View className="p-2 font-bold text-[20px] border-2 border-gray-400 flex items-center  flex-row justify-between ">
          <Text className="  text-center flex-1 font-bold text-[21px]">
            Add New Blog
          </Text>
          <Ionicons
            className="self-end flex-2"
            name="add-circle-outline"
            size={24}
            color="green"
          />
        </View>
      </TouchableOpacity>

      <FlatList
        data={posts}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => {
          return (
            <>
              {item.title ? (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate(`single/:id`, { id: item.id })
                  }
                >
                  <View className="border-2 p-2 rounded-xl m-3 flex flex-row justify-between">
                    <Text className="font-bold text-[19px]">{item.title}</Text>
                    <AntDesign
                      onPress={() => removeContxt(item.id)}
                      name="delete"
                      size={25}
                      color="red"
                    />
                  </View>
                </TouchableOpacity>
              ) : null}
            </>
          );
        }}
      />
    </>
  );
}

export default HomeScreen;
