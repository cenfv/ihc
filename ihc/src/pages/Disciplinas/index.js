import React from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground,
  Button,
  ScrollView,
} from "react-native";

import Empreendedorismo from "../../assets/cards/empreendedorismo.png";
import BancoDeDados from "../../assets/cards/bancodedados.png";
import ProgramacaoDesktop from "../../assets/cards/programacaodesktop.png";
import ProgramacaoWeb from "../../assets/cards/programacaoweb.png";
import DesenvolvimentoDeJogos from "../../assets/cards/desenvolvimentojogos.png";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Disciplinas() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      
      <TouchableOpacity
        style={styles.card}
        activeOpacity={0.7}
        delayPressIn={0}
      >
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          imageStyle={styles.img}
          source={Empreendedorismo}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>Empreendedorismo</Text>
            <Text style={styles.subTitle}>17 tópicos</Text>
          </View>
          <View style={styles.playButton}>
            <MaterialIcon name="play" size={20} color="#fff" />
          </View>
        </ImageBackground>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", marginLeft: 10, marginRight: 20 }}>
        <TouchableOpacity
          style={styles.card2}
          activeOpacity={0.7}
          delayPressIn={0}
        >
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            imageStyle={styles.img}
            source={BancoDeDados}
          >
            <View style={styles.textContainer}>
              <Text style={styles.title2}>Banco de dados</Text>
              <Text style={styles.subTitle2}>15 tópicos</Text>
            </View>
            <View style={styles.playButton2}>
              <MaterialIcon name="play" size={14} color="#fff" />
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.card2, marginLeft: 10 }}
          activeOpacity={0.7}
          delayPressIn={0}
        >
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            imageStyle={styles.img}
            source={ProgramacaoDesktop}
          >
            <View style={styles.textContainer}>
              <Text style={styles.title2}>Programação desktop</Text>
              <Text style={styles.subTitle2}>12 tópicos</Text>
            </View>
            <View style={styles.playButton2}>
              <MaterialIcon name="play" size={14} color="#fff" />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row", marginLeft: 10, marginRight: 20 }}>
        <TouchableOpacity
          style={styles.card2}
          activeOpacity={0.7}
          delayPressIn={0}
        >
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            imageStyle={styles.img}
            source={ProgramacaoWeb}
          >
            <View style={styles.textContainer}>
              <Text style={styles.title2}>Interação Humano-computador</Text>
              <Text style={styles.subTitle2}>20 tópicos</Text>
            </View>
            <View style={{ ...styles.playButton2, marginTop: 20 }}>
              <MaterialIcon name="play" size={14} color="#fff" />
            </View>
          </ImageBackground>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.card2, marginLeft: 10, marginBottom: 20 }}
          activeOpacity={0.7}
          delayPressIn={0}
        >
          <ImageBackground
            style={{ width: "100%", height: "100%" }}
            imageStyle={styles.img}
            source={DesenvolvimentoDeJogos}
          >
            <View style={styles.textContainer}>
              <Text style={styles.title2}>Técnicas de programação</Text>
              <Text style={styles.subTitle2}>10 tópicos</Text>
            </View>
            <View style={{ ...styles.playButton2, marginTop: 20 }}>
              <MaterialIcon name="play" size={14} color="#fff" />
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.addButton}
        activeOpacity={0.7}
        delayPressIn={0}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Adicionar disciplina
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    margin:10,
  },
  addButton: {
    marginTop:-5,
    marginBottom: 10,
    backgroundColor: "#000",
    padding: 12,
    borderRadius: 4,
    width: "80%",
    marginHorizontal: 20,
    alignSelf: "center",
    alignItems:"center",
  },
  card: {
    width: "90%",
    height: 130,
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
  card2: {
    width: "50%",
    height: 130,
    borderRadius: 16,
    marginTop: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  img: {
    borderRadius: 16,
    justifyContent: "center",
  },
  textContainer: {
    padding: 10,
  },
  title: {
    fontStyle: "normal",
    fontWeight: "600",
    color: "#FFF",
    fontSize: 18,
  },
  subTitle: {
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FAF0F0",
    fontSize: 14,
  },
  playButton: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 28,
    height: 28,
    marginLeft: 10,
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  title2: {
    fontStyle: "normal",
    color: "#FFF",
    fontSize: 14,
  },
  subTitle2: {
    fontStyle: "normal",
    fontWeight: "400",
    color: "#FAF0F0",
    fontSize: 14,
  },
  playButton2: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    width: 22,
    height: 22,
    marginLeft: 10,
    marginTop: 35,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
