import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

class ListItem extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.item}>
                <Image style={styles.image} source={{ uri: this.props.item.imageUrl }} />
                <View style={styles.itemDetails}>
                    <Text>{this.props.item.name}</Text>
                    <View style={styles.descBlock}>
                        <Image style={styles.commonIcon} source={require('../../assets/burn_calories.png')}/>
                        <Text style={{marginLeft:5,}}>{this.props.item.calories}</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={this.props.onNextClick}>
                    <Image style={styles.commonIcon} source={require('../../assets/next_page.png')}/>
                </TouchableOpacity>
            </View>            
        );
    }
} 

const styles = StyleSheet.create({
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        margin: 5,
        borderBottomColor: '#ccc',
        backgroundColor: '#efefef'
    },

    itemDetails: {
        flex: 1,
        flexDirection: 'column',
        padding: 10,
        borderRadius: 10,
        borderBottomColor: '#ccc',
        backgroundColor: '#efefef'
    },

    descBlock: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },

    image: {
        width: 55,
        height: 55,
        borderRadius: 5,
    },

    commonIcon: {
        width: 24,
        height: 24,
        alignItems: 'flex-end'
    }
  });
  
  export default ListItem;