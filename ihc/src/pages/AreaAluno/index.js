import React from "react";
import { useNavigation } from '@react-navigation/native';
import {
  StyleSheet,
  SectionList,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  LogBox,
} from "react-native";
import {
  Title,
  Caption,
  Paragraph,
  Text,
} from "react-native-paper";

import * as Icon from "../../assets/Icons";

const AULAS = [
  {
    id: "1",
    title: "Banco de dados",
    date: "04/10/2020 às 18:40",
    img: Icon.bancodedados,
  },
  {
    id: "2",
    title: "Programação desktop",
    date: "04/10/2020 às 19:30",
    img: Icon.programacaodesktop,
  },
  {
    id: "3",
    title: "Empreendedorismo",
    date: "04/10/2020 às 21:20",
    img: Icon.empreendedorismo,
  },
  {
    id: "4",
    title: "Técnicas de programação",
    date: "04/10/2020 às 10:10",
    img: Icon.tecnicasdeprogramacao,
  },
];
const TAREFAS = [
  { 
    id: "0",
    title: "Interação Humano-Computador",
    subTitle: "Atividade avaliativa",
    description: "Trabalho em Grupo (TG): Entrega Final",
    date: "03/10/2020 às 23:59",
    underlineColor: "#4E7FFF",
  },
  { 
    id: "1",
    title: "Empreendedorismo",
    subTitle: "Atividade prática",
    description: "Implementar integração do banco Postgresql com Java",
    date: "04/10/2020 às 21:20",
    underlineColor: "#FFC630",
  },
  {
    id: "2",
    title: "Programação desktop",
    subTitle: "Atividade prática",
    description: "Relacionando tabelas.",
    date: "04/10/2020 às 19:30",
    underlineColor: "#7FFF6A",
  },
  {
    id: "3",
    title: "Técnicas de programação",
    subTitle: "Atividade avaliativa",
    description: "Relizar o trabalho final de arquivos csv utilizando Python.",
    date: "04/10/2020 às 23:50",
    underlineColor: "#81E8FF",
  },
];

export default function AreaAluno() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SectionList
        showsVerticalScrollIndicator={false}
        renderSectionHeader={({ section: { title } }) => (
          <>
            <Title style={styles.headerTitle}>{title}</Title>
          </>
        )}
        sections={[
          {
            title: "Aulas de hoje",
            data: AULAS,

            renderItem: ({ item, index, section: { title, data } }) => (
              <View>
                <TouchableOpacity
                  style={styles.itemContainer}
                  delayPressIn={0}
                  activeOpacity={0.7}
                >
                  <Image source={item.img} style={styles.imageView} />
                  <View style={styles.item}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Caption style={styles.caption}>{item.date}</Caption>
                  </View>
                </TouchableOpacity>
              </View>
            ),
          },

          {
            title: "Tarefas pendentes ",
            data: TAREFAS,
            renderItem: ({ item,index, section: { title, data } }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('EntregaAtividades')}
                style={styles.card}
                delayPressIn={0}
                activeOpacity={0.7}
              >
                <View style={styles.textContainer}>
                  <Text style={styles.titleTarefas}>{item.title}</Text>
                  <View
                    style={{
                      ...styles.underline,
                      backgroundColor: item.underlineColor,
                    }}
                  ></View>
                  <View>
                    <Text style={styles.subTitleTarefas}>{item.subTitle}</Text>
                    <Text style={styles.spanTarefas}>{item.description}</Text>
                    <Caption style={styles.dateTarefas}>
                      Data de entrega: {item.date}
                    </Caption>
                  </View>
                </View>
              </TouchableOpacity>
            ),
          },
        ]}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -10,
    marginHorizontal:10,
    backgroundColor: "#F7F7F7",
    justifyContent: "center",
  },

  headerTitle: {
    marginHorizontal: 10,
    marginTop: 30,
    fontSize: 22,
    color: "#323232",
    fontFamily: "Inter_600SemiBold",
  },
  itemContainer: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 1,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  item: {
    marginLeft: 10,
  },
  title: {
   fontSize: 16,
    marginTop: 0,

  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  subTitle: {
    fontSize: 16,
    color: "#83919E",
  },
  imageView: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  dataWrapper: {
    flex: 1,
    marginTop: -1,
  },
  card: {
    minHeight: 130,
    borderRadius: 4,
    marginHorizontal: 10,
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
  textContainer: {
    padding: 10,
  },
  titleTarefas: {
    fontStyle: "normal",
    fontWeight: "700",
    color: "#000",
    fontSize: 16,
  },
  subTitleTarefas: {
    fontStyle: "normal",
    fontWeight: "700",
    color: "#474646",
    fontSize: 14,
    marginTop: 4,
  },
  spanTarefas: {
    fontStyle: "normal",
    fontWeight: "600",
    color: "#727272",
    fontSize: 14,
    marginTop: 0,
  },
  dateTarefas: {
    fontSize: 14,
    lineHeight: 14,
  
    marginTop: 30,
  },
  underline: {
    borderRadius:8,
    width: 81,
    height: 5,
  },
});
