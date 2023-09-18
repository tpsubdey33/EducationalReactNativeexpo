import { View, Text, FlatList } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const CourseContent = () => {
  const DATA = [
    {
      id: 1,
      Topic: "Introduction",
    },
    {
      id: 2,
      Topic: "Getting Started",
    },
    {
      id: 3,
      Topic: "Python Syntex",
    },
    {
      id: 4,
      Topic: "Python Comments",
    },
    {
      id: 5,
      Topic: "Python Variables",
    },
  ];
  return (
    <View style={{ marginTop: 10,backgroundColor:"E5E5E5" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>Course Content</Text>
      <FlatList
        style={{marginTop:15}}
        data={DATA}
        renderItem={({ item, index }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginBottom: 10,
              backgroundColor: "#fff",
              padding: 14,
              alignItems: "center",
              borderRadius:5,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "gray", marginRight:20 }}>
              {index + 1}
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold" }}>
              {item.Topic}
            </Text>
            <Ionicons name="play-circle" size={24} color="#4267B2" style={{position:"absolute", right:10}} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default CourseContent;
