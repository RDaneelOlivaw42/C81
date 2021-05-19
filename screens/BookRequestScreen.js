import React from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet } from 'react-native';
import db from '../config';
import firebase from 'firebase';

import AppHeader from '../components/AppHeader';

export default class BookRequestScreen extends React.Component {

    constructor(){
        super();

        this.state = {
            userId: firebase.auth().currentUser.email, 
            bookName: '',
            reasonToRequest: '',
        }
    }


    createUniqueId(){
        var id = Math.random().toString(36).substring(7);
        return id;
    }


    addRequest = (bookName, reasonToRequest) => {
        var userId = this.state.userId;
        var randomRequestId = this.createUniqueId();

        db.collection("requested_books").add({
            "user_id": userId,
            "book_name": bookName,
            "reason_to_request": reasonToRequest,
            "request_id": randomRequestId
        });

        this.setState({
            bookName: '',
            reasonToRequest: ''
        });
    }


    render(){
        return(
            <View>
                <AppHeader title = "Request Books"/>
                
                <KeyboardAvoidingView style = {styles.keyboardAvoidingView}>

                    <TextInput 
                      style = {styles.formInput}
                      placeholder = {"Enter Book Name"}
                      onChangeText = {(text)=>{
                          this.setState({
                              bookName: text
                          })
                      }}
                      value = {this.state.bookName}/>

                    <TextInput 
                      style = {[styles.formInput, {height: 300}]}
                      placeholder = {"Why do you need this book?"}
                      multiline = {true}
                      numberOfLines = {8}
                      onChangeText = {(text)=>{
                          this.setState({
                              reasonToRequest: text
                          })
                      }}
                      value = {this.state.reasonToRequest}/>

                    <TouchableOpacity
                      style = {styles.button}
                      onPress = {()=>{
                          this.addRequest(this.state.bookName, this.state.reasonToRequest);
                         // alert("Request submitted");
                      }}>
                        <Text>Submit</Text>
                    </TouchableOpacity>

                </KeyboardAvoidingView>
            </View>
        )
    }

}


const styles = StyleSheet.create({

    keyboardAvoidingView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },

    formInput: {
        width: '75%',
        height: 35,
        alignSelf: 'center',
        borderColor: '#FFAB91',
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 20,
        padding: 10
    },

    button: {
        width: '75%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        backgroundColor: '#FF5722',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20
    }

})