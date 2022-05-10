import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import IoIcon from "react-native-vector-icons/Ionicons";

import avatar1 from "../../../assets/avatars/avatar1.png";
import avatar2 from "../../../assets/avatars/avatar2.png";
import avatar3 from "../../../assets/avatars/avatar3.png";
import avatar4 from "../../../assets/avatars/avatar4.png";

export default function Forum() {
  const [text, onChangeText] = useState("");
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <Text style={styles.headerTitle}>Material de apoio</Text>
        <View style={styles.card}>
          <TouchableOpacity
            activeOpacity={0.7}
            delayPressIn={0}
            style={{
              marginHorizontal: 20,
              marginTop: 20,
              flexDirection: "row",
            }}
          >
            <View style={styles.circle}>
              <Icon name="book" color="#fff" size={30} />
            </View>
            <View>
              <Text style={styles.headerSubTitle}>
                Modelo de relatório de projeto
              </Text>
              <Text style={styles.span}>Data de postagem: 16 de set 09:06</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.7}
            delayPressIn={0}
            style={{
              marginHorizontal: 20,
              marginVertical: 0,
              flexDirection: "row",
            }}
          >
            <View style={styles.circle}>
              <Icon name="book" color="#fff" size={30} />
            </View>
            <View>
              <Text style={styles.headerSubTitle}>
                Critério de avaliação do projeto
              </Text>
              <Text style={styles.span}>Data de postagem: 16 de set 09:21</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.headerTitle}>Discussão</Text>
      <View style={styles.cardChat}>
        <ScrollView>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Image source={avatar1} style={styles.imgAvatar} />
            <View style={styles.textContainer}>
              <Text style={styles.chatText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Image source={avatar2} style={styles.imgAvatar} />
            <View style={styles.textContainer}>
              <Text style={styles.chatText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "center", padding: 10 }}
          >
            <Image source={avatar3} style={styles.imgAvatar} />
            <View style={styles.textContainer}>
              <Text style={styles.chatText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 10,
              marginRight: 50,
            }}
          >
            <View style={styles.textContainer2}>
              <Text style={styles.chatText}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </Text>
            </View>
            <Image source={avatar4} style={styles.imgAvatar} />
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
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
                padding: 10,
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },

  headerTitle: {
    marginHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
    fontSize: 22,
    color: "#305D7B",
    fontFamily: "Inter_600SemiBold",
  },
  card: {
    width: "90%",
    borderRadius: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    marginBottom: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  cardChat: {
    width: "90%",
    borderRadius: 16,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 8,
    marginBottom: 10,
    backgroundColor: "#F4F4F4",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  headerSubTitle: {
    marginTop: 10,
    marginHorizontal: 20,
    fontSize: 14,
    color: "#252525",
    fontFamily: "Inter_600SemiBold",
  },
  span: {
    marginHorizontal: 20,
    fontSize: 12,
    color: "#515050",
    fontFamily: "Inter_500Medium",
    marginBottom: 20,
    marginRight: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#808080",
  },
  imgAvatar: {
    width: 60,
    height: 60,
    resizeMode: "stretch",
  },
  textContainer: {
    padding: 10,
    marginLeft: 10,
    marginRight: 70,
    backgroundColor: "#fff",
  },
  textContainer2: {
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: "#fff",
  },
  chatText: {
    marginLeft: 10,
    marginRight: 40,
    fontSize: 14,
    color: "#5B5B5B",
    fontFamily: "Inter_400Regular",
  },
  chatText2: {
    marginLeft: 10,
    marginRight: 10,
    fontSize: 14,
    color: "#5B5B5B",
    fontFamily: "Inter_400Regular",
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
