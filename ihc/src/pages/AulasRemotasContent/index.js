import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoIcon from "react-native-vector-icons/Ionicons";
import { Video } from "expo-av";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MaisPage from "../Mais";

const TabTop = createMaterialTopTabNavigator();

const ParticipantesPage = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: "#fff",
      marginBottom: 10,
    }}
  >
    <Text style={styles.headerTitle}>Participantes(1)</Text>
    <View
      style={{
        width: "100%",
        height: "100%",
        flexDirection: "row",
        backgroundColor: "#fff",
        justifyContent:"center",
        
      }}
    >
      <View
        style={{
          backgroundColor: "#C4C4C4",
          width: "30%",
          height: "30%",
          justifyContent: "center",
          alignItems:"center"
        }}
      >
        <MIcon
          name="account-circle"
          color="#fff"
          size={35}
          style={{ alignSelf: "center" }}
        />
      </View>
      <Text
        style={{ marginHorizontal: 10, marginVertical: 30, color: "#4C4C4D" }}
      >
        Eu (Você)
      </Text>
      <View style={{ flex: 1 }}>
        <MIcon
          name="microphone-off"
          color="#E21010"
          size={20}
          style={{
            marginTop: 30,
            marginRight: 20,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        />
      </View>
      <View>
        <MIcon
          name="video-off"
          color="#E21010"
          size={20}
          style={{
            marginTop: 30,
            marginRight: 10,
            justifyContent: "flex-end",
            alignSelf: "flex-end",
          }}
        />
      </View>
    </View>
  </View>
);

const ChatPage = () => {
  const [text, onChangeText] = useState("");
  return (
    <ScrollView>
      <Text style={styles.headerTitle}>Chat</Text>
      <View
        style={{
          flex:1,
          padding: 10,
          backgroundColor: "#f6f6f6",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
       
            alignItems: "flex-end",
            backgroundColor: "#fff",
            padding: 10,
            borderRadius: 8,
            marginHorizontal:20,
            marginBottom:20,
          }}
        >
          <Text>Boa Noite professor!<Text style={{fontSize:11,color:"#636465"}}>       18:43</Text></Text>
          
        </View>
        <View
          style={{
            flexDirection: "row",
            flex:1
          }}
        >
          <TextInput
            style={styles.input}
            placeholder="Digite uma mensagem"
            placeholderTextColor="#929292"
            onChangeText={(text) => onChangeText(text)}
            value={text}
          />

          <TouchableOpacity
            activeOpacity={0.7}
            delayPressIn={0}
            style={{
              flexDirection: "row",
              marginRight: 10,
              backgroundColor: "#fff",
              borderRadius: 20,
              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5,
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10,
            }}
          >
            <View
              style={{
                padding: 7,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <IoIcon
                name="md-send"
                color="#4E7FFF"
                size={25}
                style={{ marginLeft: 5 }}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const InfoPage = () =>(
    <View>

    </View>
)
const LiveRoute = () => (
  <TabTop.Navigator
    tabBarOptions={{
      showIcon: true,
      activeTintColor: "#2F80ED",
      inactiveTintColor: "#6E6F8B",
      showLabel: false,
    }}
  >
    <TabTop.Screen
      name="Participantes"
      component={ParticipantesPage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MIcon name="account-group" color={color} size={25} />
        ),
      }}
    />
    <TabTop.Screen
      name="Chat"
      component={ChatPage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MIcon name="chat-processing" color={color} size={25} />
        ),
      }}
    />
    <TabTop.Screen
      name="Info"
      component={InfoPage}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MIcon name="information" color={color} size={25} />
        ),
      }}
    />
  </TabTop.Navigator>
);
export default function Mais({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Video
        source={{
          uri:
            "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1280_10MG.mp4",
        }}
        shouldPlay
        useNativeControls
        isLooping
        resizeMode="stretch"
        style={{ width: "100%", height: "50%" }}
      />

      <View
        style={{
          position: "absolute",
          flexDirection: "row",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableOpacity
          delayPressIn={0}
          activeOpacity={0.7}
          onPress={() => {}}
        >
          <MIcon
            name="chevron-left"
            color={"#fff"}
            size={35}
            style={{ marginLeft: 10 }}
            onPress={({}) => navigation.navigate("AulasRemotas")}
          />
        </TouchableOpacity>
        <Text style={{ color: "#fff", marginLeft: 5 }}>Banco de dados</Text>
        <View style={{ flex: 1 }}>
          <MIcon
            name="access-point"
            color={"#E21010"}
            size={30}
            style={{
              justifyContent: "flex-end",
              marginRight: 10,
              alignSelf: "flex-end",
            }}
          />
        </View>
      </View>

      <LiveRoute />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  blackContainer: {
    backgroundColor: "#000",
    width: "100%",
    height: "40%",
  },
  headerTitle: {
    marginHorizontal: 20,
    marginTop: 12,
    marginBottom: 10,
    fontSize: 22,
    color: "#4E7FFF",
    fontFamily: "Inter_600SemiBold",
  },
  input: {
    height: 40,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    marginLeft: 10,
    marginRight: 8,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 3,
  },
});
