import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Button } from "react-native-elements";
import IoniIcon from "react-native-vector-icons/Ionicons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default function NotificationButton() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.rigthView}>
          <View style={styles.modalView}>
            <View style={styles.closeButton}>
              <Button
                type="clear"
                icon={<MaterialIcon name="close" size={30} color="#0A3875" />}
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
              />
            </View>
            <Text style={styles.modalTextTitle}>Notificações abertas!</Text>
            <Text style={styles.modalTextSubtitle}>
              Todo o conteúdo será mostrado aqui.
            </Text>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <Button
          
          type="clear"
          icon={
            <IoniIcon
              name="ios-notifications-outline"
              size={30}
              color="#fff"
            />
          }
          
          onPress={() => {
            setModalVisible(!modalVisible);
          }}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  modalView: {
    marginLeft: "40%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  closeButton: {
    marginTop: -30,
    marginRight: -25,
    alignSelf: "flex-end",
  },
  modalTextTitle: {
    fontSize: 22,
  },
  modalTextSubtitle: {
    marginTop: 10,
    fontSize: 14,
  },
});
