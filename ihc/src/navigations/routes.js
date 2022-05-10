import * as React from "react";
import { StatusBar, StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { LinearGradient } from "expo-linear-gradient";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";

import DrawerContent from "../components/DrawerContent";

import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import IoIcon from "react-native-vector-icons/Ionicons";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";

import NotificationButton from "../components/NotificationButton";

import AreaAluno from "../pages/AreaAluno";
import Horarios from "../pages/Horarios";
import Atividades from "../pages/Atividades";
import Disciplinas from "../pages/Disciplinas";
import AulasRemotas from "../pages/AulasRemotas";
import Mais from "../pages/Mais";

import Description from "../pages/AtividadesContent/Description";
import Entrega from "../pages/AtividadesContent/Entrega";
import Forum from "../pages/AtividadesContent/Forum";

import AulaAoVivo from "../pages/AulasRemotasContent";

const TabTop = createMaterialTopTabNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const backgroudColor = "#4C9ACF";
const tintColor = "#fff";
const BackgroundGradient = () => (
  <LinearGradient
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 0 }}
    colors={["#373737", "#2C2B2B", "#171717"]}
    style={styles.linearGradient}
  />
);

const AtividadeRoute = () => (
  <TabTop.Navigator
    tabBarOptions={{
      activeTintColor: "#2F80ED",
      inactiveTintColor: "#6E6F8B",
      style: styles.tabContainer,
      labelStyle: styles.tabLabel,
    }}
  >
    <TabTop.Screen name="Descrição" component={Description} />
    <TabTop.Screen name="Entrega" component={Entrega} />
    <TabTop.Screen name="Fórum" component={Forum} />
  </TabTop.Navigator>
);

function AreaAlunoStack({ navigation }) {
  return (
    <>
      <StatusBar barStyle={"light-content"} />
      <Stack.Navigator
        initialRouteName="AreaAluno"
        screenOptions={{
          headerLeft: () => (
            <IoIcon.Button
              name="ios-menu"
              size={25}
              backgroundColor="#373737"
              style={{ marginLeft: 10 }}
              onPress={() => navigation.openDrawer()}
            ></IoIcon.Button>
          ),
          headerRight: () => <NotificationButton />,
          headerTintColor: tintColor,
          headerBackground: () => <BackgroundGradient />,
          headerTitleStyle: {
            fontSize: 20,
            fontWeight: "600",
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      >
        <Stack.Screen
          name="AreaAluno"
          component={AreaAluno}
          options={{ title: "Área do aluno" }}
        />
        <Stack.Screen
          name="Atividades"
          component={Atividades}
          options={{ title: "Atividades" }}
        />
        <Stack.Screen
          name="EntregaAtividades"
          component={AtividadeRoute}
          options={{ title: "Entrega de atividades" }}
          options={{
            title: "Trabalho em Grupo (TG): Entrega Final",
            headerLeft: () => (
              <MIcon
                name="chevron-left"
                color={"#fff"}
                size={30}
                style={{ marginLeft: 10 }}
                onPress={({}) => navigation.navigate("AreaAluno")}
              />
            ),
            headerTitleStyle: {
              fontSize: 16,
              fontWeight: "600",
              marginLeft: 0,
              justifyContent: "center",
              alignSelf: "center",
            },
          }}
        />
      </Stack.Navigator>
    </>
  );
}

function HorariosStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Horarios"
      screenOptions={{
        headerLeft: () => (
          <IoIcon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#373737"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          ></IoIcon.Button>
        ),
        headerRight: () => <NotificationButton />,
        headerStyle: { backgroundColor: backgroudColor },
        headerTintColor: tintColor,
        headerBackground: () => <BackgroundGradient />,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "600",
          justifyContent: "center",
          alignSelf: "center",
        },
      }}
    >
      <Stack.Screen
        name="Horarios"
        component={Horarios}
        options={{ title: "Horários" }}
      />
    </Stack.Navigator>
  );
}
function AtividadesStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Atividades"
      screenOptions={{
        headerLeft: () => (
          <IoIcon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#373737"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          ></IoIcon.Button>
        ),
        headerRight: () => <NotificationButton />,
        headerStyle: { backgroundColor: backgroudColor },
        headerTintColor: tintColor,
        headerBackground: () => <BackgroundGradient />,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "600",
          justifyContent: "center",
          alignSelf: "center",
        },
      }}
    >
      <Stack.Screen
        name="Atividades"
        component={Atividades}
        options={{ title: "Atividades" }}
      />
      <Stack.Screen
        name="EntregaAtividades"
        component={AtividadeRoute}
        options={{ title: "Entrega de atividades" }}
        options={{
          title: "Trabalho em Grupo (TG): Entrega Final",
          headerLeft: () => (
            <MIcon
              name="chevron-left"
              color={"#fff"}
              size={30}
              style={{ marginLeft: 10 }}
              onPress={({}) => navigation.navigate("Atividades")}
            />
          ),
          headerTitleStyle: {
            fontSize: 16,
            fontWeight: "600",
            marginLeft: 0,
            justifyContent: "center",
            alignSelf: "center",
          },
        }}
      />
    </Stack.Navigator>
  );
}
function DisciplinasStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="Disciplinas"
      screenOptions={{
        headerLeft: () => (
          <IoIcon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#373737"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          ></IoIcon.Button>
        ),
        headerRight: () => <NotificationButton />,
        headerStyle: { backgroundColor: backgroudColor },
        headerTintColor: tintColor,
        headerBackground: () => <BackgroundGradient />,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "600",
          justifyContent: "center",
          alignSelf: "center",
        },
      }}
    >
      <Stack.Screen
        name="Disciplinas"
        component={Disciplinas}
        options={{ title: "Disciplinas" }}
      />
    </Stack.Navigator>
  );
}
function AulasRemotasStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName="AulasRemotas"
      screenOptions={{
        headerLeft: () => (
          <IoIcon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#373737"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          ></IoIcon.Button>
        ),
        headerRight: () => <NotificationButton />,
        headerStyle: { backgroundColor: backgroudColor },
        headerTintColor: tintColor,
        headerBackground: () => <BackgroundGradient />,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "600",
          justifyContent: "center",
          alignSelf: "center",
        },
      }}
    >
      <Stack.Screen
        name="AulasRemotas"
        component={AulasRemotas}
        options={{ title: "Aulas Remotas" }}
      />
      <Stack.Screen
        name="AulaAoVivo"
        component={AulaAoVivo}
        options={{
          headerShown: false,
          title: "Banco de dados",
          headerLeft: () => (
            <MIcon
              name="chevron-left"
              color={"#fff"}
              size={30}
              style={{ marginLeft: 10 }}
              onPress={({}) => navigation.navigate("AulasRemotas")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
function MaisStack() {
  return (
    <Stack.Navigator
      initialRouteName="Mais"
      screenOptions={{
        headerLeft: () => (
          <IoIcon.Button
            name="ios-menu"
            size={25}
            backgroundColor="#373737"
            style={{ marginLeft: 10 }}
            onPress={() => navigation.openDrawer()}
          ></IoIcon.Button>
        ),
        headerRight: () => <NotificationButton />,
        headerStyle: { backgroundColor: backgroudColor },
        headerTintColor: tintColor,
        headerBackground: () => <BackgroundGradient />,
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "600",
          justifyContent: "center",
          alignSelf: "center",
        },
      }}
    >
      <Stack.Screen name="Mais" component={Mais} options={{ title: "Mais" }} />
    </Stack.Navigator>
  );
}

function bottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: "#2C2B2B",
        inactiveTintColor: "#747474",
        //   style: {
        //     backgroundColor: '#f9f9f9',
        // },
      }}
    >
      <Tab.Screen
        name="Área do aluno"
        component={AreaAlunoStack}
        options={{
          tabBarLabel: "Área do aluno",
          tabBarIcon: ({ color, size }) => (
            <MIcon name="home-outline" color={color} size={size + 5} />
          ),
        }}
      />
      <Tab.Screen
        name="HorariosStack"
        component={HorariosStack}
        options={{
          tabBarLabel: "Horários",
          tabBarIcon: ({ color, size }) => (
            <MIcon name="clock-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AtividadesStack"
        component={AtividadesStack}
        options={{
          tabBarLabel: "Atividades",
          tabBarIcon: ({ color, size }) => (
            <MIcon name="clipboard-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="DisciplinasStack"
        component={DisciplinasStack}
        options={{
          tabBarLabel: "Disciplinas",
          tabBarIcon: ({ color, size }) => (
            <MIcon name="book-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="AulasRemotasStack"
        component={AulasRemotasStack}
        options={{
          tabBarLabel: "Aulas Remotas",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcon name="computer" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => (
          <DrawerContent {...props} initialRouteName="início" />
        )}
      >
        <Drawer.Screen name="inicio" component={bottomTab} />
        <Drawer.Screen name="chats" component={bottomTab} />
        <Drawer.Screen name="boletim" component={bottomTab} />
        <Drawer.Screen name="perfil" component={bottomTab} />
        <Drawer.Screen name="configuracoes" component={bottomTab} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  tabContainer: {},
  tabLabel: {
    fontSize: 14,
    fontFamily: "Inter_600SemiBold",
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: "#f4f4f4",
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default Routes;
