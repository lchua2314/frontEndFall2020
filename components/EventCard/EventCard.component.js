import React, { useState } from 'react';
import { Text, Image, TouchableWithoutFeedback, View, Button, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './EventCard.styles';
//import Modal from 'react-native-modal';

const EventCard = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => {
                    setModalVisible(!modalVisible)
                }}>
                <Text> {props.org} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.link} </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={modalVisible}>
                <View style={styles.containerPopUp}>
                    <Text> {props.org} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.datePopUp}> {props.date} </Text>
                    <Text> {props.link} </Text>
                    <TouchableOpacity style={styles.btnPopUp}>
                        <Text style={styles.btnText} 
                        onPress={
                            () => Alert.alert("You successfully have registered for " + props.title + " on " + props.date + "!")
                        }>RSVP</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnPopUp}>
                        <Text 
                            style={styles.btnText} 
                            onPress={() => {
                            setModalVisible(!modalVisible)}}>
                                Exit
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

export default EventCard;