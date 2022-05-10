import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image } from "react-native";
import * as Icon from "../../assets/Icons";

import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

const DATA = [
  {
    title: "Banco de dados",
    date: "04/10/2020  às 18:40",
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

export default function AulasRemotas({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Aulas ao vivo</Text>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.itemContainer}
          delayPressIn={0}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('AulaAoVivo')}
        >
          <Image source={DATA[0].img} style={styles.imageView} />
          <View style={styles.item}>
            <Text style={styles.title}>{DATA[0].title}</Text>
            <Text style={styles.subTitle}>{DATA[0].date}</Text>
          </View>
          <View style={{ flex:1 }}>
          <MIcon
            name="access-point"
            color={"#E21010"}
            size={30}
            style={{
              justifyContent: "flex-end",
              alignSelf: "flex-end",
            }}
          />
          </View>
        </TouchableOpacity>
      </View>
      <Text style={styles.headerTitle}>Próximas</Text>
      <View style={styles.card}>
        <TouchableOpacity
          style={styles.itemContainer}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <Image source={DATA[1].img} style={styles.imageView} />
          <View style={styles.item}>
            <Text style={styles.title}>{DATA[1].title}</Text>
            <Text style={styles.subTitle}>{DATA[1].date}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <Image source={DATA[2].img} style={styles.imageView} />
          <View style={styles.item}>
            <Text style={styles.title}>{DATA[2].title}</Text>
            <Text style={styles.subTitle}>{DATA[2].date}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.itemContainer}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <Image source={DATA[3].img} style={styles.imageView} />
          <View style={styles.item}>
            <Text style={styles.title}>{DATA[3].title}</Text>
            <Text style={styles.subTitle}>{DATA[3].date}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  card: {
    paddingVertical: 10,
    borderRadius: 4,
    marginHorizontal: 20,
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
  itemContainer: {
    marginHorizontal: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 1,
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
  },
  item: {
    marginLeft: 10,
  },
  imageView: {
    width: 50,
    height: 50,
    marginTop: 5,
  },
  item: {
    marginLeft: 10,
  },
  subTitle: {
    fontSize: 16,
    color: "#83919E",
  },
  headerTitle: {
    marginHorizontal: 20,
    marginTop: 20,
    fontSize: 22,
    color: "#171717",
    fontFamily: "Inter_600SemiBold",
  },
});
