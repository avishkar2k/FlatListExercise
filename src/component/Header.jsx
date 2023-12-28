import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

class Header extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.header}>
              <TouchableOpacity onPress={this.props.onBackPress} style={styles.backButton}>
                <Image
                  source={require('../../assets/back.png')} 
                  style={styles.backButtonImage}
                />
              </TouchableOpacity>
              <Text style={styles.title}>{this.props.title}</Text>
            </View>
          );
    }
} 

const styles = StyleSheet.create({
   
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },

    backButton: {
        position: 'absolute',
        left: 16,
        padding: 10,
      },
    
    backButtonImage: {
      width: 24, 
      height: 24, 
    },

    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
   
  });
  
  export default Header;