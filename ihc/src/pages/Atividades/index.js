import React from "react";
import { StyleSheet, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Title,
  Caption,
  Paragraph,
  Text,
} from "react-native-paper";
import empreendedorismoChart from "../../assets/piecharts/empreendedorismo.png";
import programacaodesktopChart from "../../assets/piecharts/programacaodesktop.png";
import bancodedadosChart from "../../assets/piecharts/bancodedados.png";
import teecnicasdeprogramacaoChart from "../../assets/piecharts/tecnicasdeprogramacao.png";
import interacaohumanocomputadorChart from "../../assets/piecharts/interacaohumanocomputador.png";


export default function Atividades({navigation}) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>Atividades pendentes</Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('EntregaAtividades')}
          style={styles.card}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleTarefas}>Interação Humano-Computador</Text>
            <View
              style={{
                ...styles.underline,
                backgroundColor: "#4E7FFF",
              }}
            ></View>
            <View>
              <Text style={styles.subTitleTarefas}>Atividade avaliativa</Text>
              <Text style={styles.subTitleTarefas}>
                Trabalho em Grupo (TG): Entrega Final
              </Text>
              <Text style={styles.spanTarefas}>
                Enviar o arquivo modelo do trabalho com as seguintes partes elaboradas: ...
              </Text>
              <View style={styles.entregas}>
                <Image source={interacaohumanocomputadorChart} style={styles.piechart} />
                <Text style={styles.textEntrega}>
                  25 de 40 alunos realizaram a entrega.
                </Text>
              </View>
              <Text style={styles.dateTarefas}>
                Data de entrega: 03/10/2020 às 23:59
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('EntregaAtividades')}
          style={styles.card}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleTarefas}>Empreendedorismo</Text>
            <View
              style={{
                ...styles.underline,
                backgroundColor: "#FFC630",
              }}
            ></View>
            <View>
              <Text style={styles.subTitleTarefas}>Atividade avaliativa</Text>
              <Text style={styles.subTitleTarefas}>
                Plano de negócio CANVAS
              </Text>
              <Text style={styles.spanTarefas}>
                Relizar o trabalho final da disciplina de empreendedorismo,
                entregando o trabalho de canvas que foi proposto durante o
                semestre
              </Text>
              <View style={styles.entregas}>
                <Image source={empreendedorismoChart} style={styles.piechart} />
                <Text style={styles.textEntrega}>
                  20 de 40 alunos realizaram a entrega.
                </Text>
              </View>
              <Text style={styles.dateTarefas}>
                Data de entrega: 04/10/2020 às 21:20
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={() => navigation.navigate('EntregaAtividades')}
          style={styles.card}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleTarefas}>Programação desktop</Text>
            <View
              style={{
                ...styles.underline,
                backgroundColor: "#7FFF6A",
              }}
            ></View>
            <View>
              <Text style={styles.subTitleTarefas}>Atividade prática</Text>
              <Text style={styles.subTitleTarefas}>
                Implementação do banco Postgresql
              </Text>
              <Text style={styles.spanTarefas}>
                Implementar integração do banco Postresql com Java.
              </Text>
              <View style={styles.entregas}>
                <Image source={programacaodesktopChart} style={styles.piechart} />
                <Text style={styles.textEntrega}>
                  15 de alunos 40 realizaram a entrega.
                </Text> 
              </View>
              <Text style={styles.dateTarefas}>
                Data de entrega: 04/10/2020 às 19:30
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.card}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleTarefas}>Técnicas de programação</Text>
            <View
              style={{
                ...styles.underline,
                backgroundColor: "#00CFFD",
              }}
            ></View>
            <View>
              <Text style={styles.subTitleTarefas}>Atividade avaliativa</Text>
              <Text style={styles.subTitleTarefas}>
                Trabalho final.
              </Text>
              <Text style={styles.spanTarefas}>
                Realizar o trabalho final de arquivos csv utilizando python.
              </Text>
              <View style={styles.entregas}>
                <Image source={teecnicasdeprogramacaoChart} style={styles.piechart} />
                <Text style={styles.textEntrega}>
                  20 de 40 alunos realizaram a entrega.
                </Text>
              </View>
              <Text style={styles.dateTarefas}>
                Data de entrega: 04/10/2020 às 23:50
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        

        <Text style={styles.headerTitle}>Atividades concluídas</Text>
        <TouchableOpacity
         onPress={() => navigation.navigate('EntregaAtividades')}
          style={styles.card}
          delayPressIn={0}
          activeOpacity={0.7}
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleTarefas}>Banco de dados</Text>
            <View
              style={{
                ...styles.underline,
                backgroundColor: "#A59FF1",
              }}
            ></View>
            <View>
              <Text style={styles.subTitleTarefas}>Atividade prática</Text>
              <Text style={styles.subTitleTarefas}>
              Relacionamento de tabelas.
              </Text>
              <Text style={styles.spanTarefas}>
              Introdução ao relacionamento de tabelas.
              </Text>
              <View style={styles.entregas}>
                <Image source={bancodedadosChart} style={styles.piechart} />
                <Text style={styles.textEntrega}>
                  30 de 40 alunos realizaram a entrega.
                </Text>
              </View>
              <Text style={styles.dateTarefas}>
                Data de entrega: 04/10/2020 às 18:40
              </Text>
            </View>
          </View>
        </TouchableOpacity>
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
    marginHorizontal: 10,
    marginTop: 20,
    fontSize: 22,
    color: "#171717",
    fontFamily: "Inter_600SemiBold",
  },
  card: {
    minHeight: 130,
    borderRadius: 16,
    marginHorizontal: 10,
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
    fontStyle: "normal",
    fontWeight: "400",
    color: "#000",
    fontSize: 14,
    marginTop: 30,
  },
  underline: {
    borderRadius: 8,
    width: 81,
    height: 5,
  },
  piechart: {
    width: 41,
    height: 41,
  },
  entregas: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  textEntrega: {
    fontSize: 14,
    color: "#575757",
    padding: 10,
  },
});
