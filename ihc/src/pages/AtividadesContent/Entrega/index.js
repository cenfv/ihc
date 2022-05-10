import React from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
export default function Entrega() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.atividadeContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerSubTitle}>
          Status do envio:
          <Text style={styles.headerSubTitleResponse}> Não enviado</Text>
        </Text>
        <Text style={styles.headerSubTitle}>
          Data de entrega:
          <Text style={styles.headerSubTitleResponse}>
            {" "}
            04/10/2020 às 23:58
          </Text>
        </Text>
        <Text style={styles.headerSubTitle}>
          Tempo restante:
          <Text style={styles.headerSubTitleResponse}>
            {" "}
            1 dia(s) e 20 horas
          </Text>
        </Text>
        <Text style={styles.headerSubTitle}>
          Ultima modificação:
          <Text style={styles.headerSubTitleResponse}>
            {" "}
            Nenhuma modificação
          </Text>
        </Text>
        <Text style={styles.headerSubTitle}>
          Comentários sobre o envio:{" "}
          <Text
            style={{ ...styles.headerSubTitleResponse, color: "#0966BC" }}
            onPress={() => {
              Alert.alert(
                "Cometários",
                "Nenhum comentário foi cadastrado",
                [{ text: "OK", onPress: () => console.log("OK Pressed") }],
                { cancelable: false }
              );
            }}
          >
            Comentários(0)
          </Text>
        </Text>
        <TouchableOpacity
          style={styles.addButton}
          activeOpacity={0.7}
          delayPressIn={0}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            Adicionar tarefa
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F7F7",
  },
  atividadeContainer: {
    minHeight: 50,
    borderRadius: 4,
    marginHorizontal: 20,
    paddingTop: 10,
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
    paddingBottom: 20,
    elevation: 10,
  },
  headerTitle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 18,
    color: "#252525",
    fontFamily: "Inter_600SemiBold",
  },
  headerSubTitle: {
    marginTop: 5,
    marginHorizontal: 20,
    fontSize: 14,
    color: "#252525",
    fontFamily: "Inter_600SemiBold",
  },
  headerSubTitleResponse: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 14,
    color: "#929292",
    fontFamily: "Inter_600SemiBold",
  },
  span: {
    marginLeft: 10,
    fontSize: 14,
    color: "#515050",
    fontFamily: "Inter_500Medium",
    marginBottom: 20,
    marginRight: 10,
  },
  addButton: {
    alignSelf: "center",
    marginTop: 30,
    backgroundColor: "#4386EA",
    padding: 12,
    borderRadius: 8,
    width: "45%",
    marginHorizontal: 20,
    alignItems: "center",
  },
});
