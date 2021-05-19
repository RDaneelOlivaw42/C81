import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

import AppHeader from '../components/AppHeader';

export default class BookDonateScreen extends React.Component {

    constructor(){
        super();

        this.state = {
            requestedBookList: []
        };

        this.requestRef = null;
    }


    getRequestBookList = async () =>{
        this.requestRef = await db.collection("requested_books")
        .onSnapshot((snaphot)=>{
            var requestedList = snaphot.docs.map( document => document.data() );
            this.setState({
                requestedBookList: requestedList
            })
        });
    }


    componentDidMount(){
        this.getRequestBookList();
    }


    componentWillUnmount(){
        this.requestRef();
    }


    keyExtractor = (item, index) => index.toString()

    renderItem = ( {item, i} ) => {
        return(
            <ListItem 
              key = {i}
              title = {item.book_name}
              subtitle = {item.reason_to_request}
              titleStyle = {{color: 'black', fontWeight: 'bold'}}
              rightElement = {
                  <TouchableOpacity
                    style = {styles.button}>
                      <Text style = {{color: '#FFFF'}}>Donate</Text>
                  </TouchableOpacity>
              }
              bottomDivider/>
        )
    }


    render(){
        return(
            <View style = {{flex: 1}}>
                <AppHeader title = "Donate Books" />
                
                <View style = {{flex: 1}}>
                    {
                        this.state.requestedBookList.length === 0 ?
                        (
                            <View style = {styles.subContainer}>
                                <Text style = {{fontSize: 20}}>List of All Requested Books</Text>
                            </View>
                        ) : 
                        (
                            <FlatList 
                              keyExtractor = {this.keyExtractor}
                              data = {this.state.requestedBookList}
                              renderItem = {this.renderItem}/>
                        )
                    }
                </View>

            </View>
        )
    }

}


const styles = StyleSheet.create({

    subContainer: {
        flex: 1,
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },

    button: {
        width: 100,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF5722',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 8 }
    }

})