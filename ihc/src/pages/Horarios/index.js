import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, Row } from "react-native-table-component";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {
  Title,
  Caption,
  Paragraph,
  Text,
} from "react-native-paper";

const Book =  <Icon name="book" color="#515151" size={22} />
const Calendar =  <Icon name="calendar-multiselect" color="#515151" size={22} />

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        "(1)",
        "Início",
        "Térm.",
        "Segunda",
        "Terça",
        "Quarta",
        "Quinta",
        "Sexta",
        "Sábado",
      ],
      widthArr: [30, 35, 35, 47, 40, 40, 40, 40, 43],
      tableHead2: ["Disciplina", "Nome", "Turma", "PE", "PA", "CHS"],
      widthArr2: [80, 150, 40, 30, 30, 30],
    };
  }

  render() {
    const state = this.state;
    const data = [
      ["M1", "07:30", "08:20", "", "", "", "", "", ""],
      ["M2", "08:20", "09:10", "", "", "", "", "", ""],
      ["M3", "09:10", "10:00", "", "", "", "", "", ""],
      ["M4", "10:20", "11:10", "EC37B", "EC37B", "", "", "", ""],
      ["M5", "11:10", "12:00", "EC37B", "EC37B", "", "", "", ""],
      ["M6", "12:00", "12:50", "", "", "", "", "", ""],
      ["T1", "13:00", "13:50", "", "", "", "", "", ""],
      ["T2", "13:50", "14:40", "", "", "", "", "", ""],
      ["T3", "14:40", "15:30", "", "", "", "", "", ""],
      ["T4", "15:50", "16:40", "", "", "", "", "", ""],
      ["T5", "16:40", "17:30", "", "", "", "", "", ""],
      ["T6", "17:30", "18:40", "", "", "", "", "", ""],
      ["N1", "18:40", "19:30", "IF62H", "SO35A", "IF62C", "IF62D", "", ""],
      ["N2", "19:30", "20:20", "IF62H", "SO35A", "IF62C", "IF62D", "IF62D", ""],
      ["N3", "20:20", "21:10", "IF62H", "SO35A", "IF62C", "IF62D", "IF62D", ""],
      ["N4", "21:20", "22:10", "IF62C", "IF62H", "", "SO35A", "ES63J", ""],
      ["N5", "22:10", "23:00", "IF62C", "IF62H", "", "SO35A", "ES63J", ""],
    ];
    const data2 = [
      ["EC37B", "Interação Humano-Computador", "C71", Book, Calendar, "4"],
      ["ES63J", "Empreendedorismo", "ES41", Book,Calendar, "2"],
      ["IF62C", "Técnicas de programação", "ES21",Book,Calendar, "5"],
      ["IF62D", "Processo de produção de software", "ES21", Book,Calendar, "5"],
      ["IF62H", "Banco de dados 1", "ES21", Book,Calendar , "5"],
      ["SO35A", "Programação desktop", "ES51", Book,Calendar, "5"],
    ];

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View>
            <ScrollView
              style={styles.dataWrapper}
              showsVerticalScrollIndicator={false}
            >
              <Text style={styles.title}>Horários de aula</Text>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                <Row
                  data={state.tableHead}
                  widthArr={state.widthArr}
                  style={styles.head}
                  textStyle={styles.headerText}
                />
              </Table>

              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                {data.map((dataRow, index) => (
                  <Row
                    key={index}
                    data={dataRow}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#ffffff" },
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
              <Text style={styles.title}>Aulas cadastradas</Text>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                <Row
                  data={state.tableHead2}
                  widthArr={state.widthArr2}
                  style={styles.head}
                  textStyle={styles.headerText}
                />
              </Table>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                {data2.map((dataRow, index) => (
                  <Row
                    key={index}
                    data={dataRow}
                    widthArr={state.widthArr2}
                    style={[
                      styles.row2,
                      index % 2 && { backgroundColor: "#ffffff" },
                    ]}
                    textStyle={styles.text2}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    paddingTop: 10,
    backgroundColor: "#F7F7F7",
    alignItems:"center",
  },
  title: {
    color: "#323232",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 10,
    marginTop: 10,
  },
  head: {
    height: 50,
    backgroundColor: "#515151",
  },
  headerText: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "200",
    color: "#fff",
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "200",
  },
  text2: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "200",
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 28,
    backgroundColor: "#F7F8FA",
  },
  row2: {
    height: 40,
    backgroundColor: "#F7F8FA",
  },
});
