import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";
export default function Description() {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.atividadeContainer}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.headerTitle}>Interação Humano-Computador</Text>
        <View
          style={{ ...styles.underline, backgroundColor: "#4E7FFF" }}
        ></View>
        <Text style={styles.headerSubTitle}>Atividade Avaliativa</Text>
        <Text style={styles.headerSubTitle}>
          Trabalho em Grupo (TG): Entrega Final{" "}
        </Text>
        <Text style={styles.span}>
          Enviar o arquivo modelo do trabalho com as seguintes partes
          elaboradas:{"\n"}
          {"\n"}2 ANÁLISE DA SITUAÇÃO ATUAL {"\n"}
          {"\n"}3 ANÁLISE DE REQUISITOS {"\n"}
          {"\n"} 3.1 USUÁRIOS{"\n"}
          {"\n"} 3.2 TAREFAS {"\n"}
          {"\n"} 3.3 REQUISITOS FUNCIONAIS {"\n"}
          {"\n"} 3.4 ANÁLISE DE PRODUTOS CONCORRENTES {"\n"}
          {"\n"}4 PROJETO DE INTERAÇÃO{"\n"}
          {"\n"} 4.1 MODELO CONCEITUAL {"\n"}
          {"\n"} 4.2 CENÁRIOS DE USO{"\n"}
          {"\n"} 4.3 MAPEAMENTO REQUISITOS-CENÁRIOS{"\n"}
          {"\n"} 4.4 ANÁLISE DE TAREFAS{"\n"}
          {"\n"}5 PROTÓTIPOS{"\n"}
          {"\n"}Atenção: o nome do arquivo "MODELO_TG_2020_GRUPOXX" deve ser
          alterado para "XX" indicar o número do grupo.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  atividadeContainer: {
    minHeight: 300,
    marginHorizontal: 10,
    borderRadius: 4,
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
  headerTitle: {
    marginTop: 20,
    marginLeft: 10,
    fontSize: 18,
    color: "#252525",
    fontFamily: "Inter_600SemiBold",
  },
  headerSubTitle: {
    marginLeft: 10,
    fontSize: 14,
    color: "#252525",
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
  underline: {
    marginLeft: 10,
    borderRadius: 8,
    width: 150,
    height: 5,
    marginBottom: 20,
  },
});
