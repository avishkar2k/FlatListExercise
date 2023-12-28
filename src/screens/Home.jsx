import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TextInput,
  StyleSheet,
  BackHandler,
} from 'react-native';

import Header from '../component/Header';
import ListItem from '../component/ListItem';


const data = [
    { id: '1', name: 'Item 1', imageUrl: 'https://placekitten.com/50/50', calories:"340 kcal" },
    { id: '2', name: 'Item 2', imageUrl: 'https://placekitten.com/50/51', calories:"350 kcal" },
    { id: '3', name: 'Item 3', imageUrl: 'https://placekitten.com/50/52', calories:"360 kcal" },
    { id: '4', name: 'Item 4', imageUrl: 'https://placekitten.com/50/53', calories:"330 kcal" },
    { id: '5', name: 'Item 5', imageUrl: 'https://placekitten.com/50/54', calories:"320 kcal" },
  ]; 
  
  
  class Home extends React.Component {
  
    constructor(props){
      super(props)

      this.state = {
        search: '',
        filteredData: data, 
      };
    }


    handleSearch = (text) => {
      const filtered = data.filter(item =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
  
      this.setState({
        search: text,
        filteredData: filtered,
      });
    }
  
    onNextClick = () => {
      // Navigate to the "NextScreen"
    };
  
    componentDidMount() {
      this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
  
    componentWillUnmount() {
      this.backHandler.remove();
    }
  
    handleBackPress = () => {
      // Handle the back press event
      // For example, navigate back or perform any custom action
      return true; // Return true to prevent default behavior (exit the app)
    };
      
    renderItem = ({ item }) => <ListItem item={item} onNextClick={this.onNextClick} />;
  
    render(){
      return (
        <SafeAreaView style={styles.container}>
            
            <Header title="Lunch" onBackPress={() => this.backHandler.exitApp()} />
    
            <TextInput
            style={styles.input}
            placeholder="Search..."
            onChangeText={this.handleSearch}
            value={this.state.search}
            />
            
            <FlatList
            data={this.state.filteredData}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            />
    
        </SafeAreaView>
      );
    } 
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 16,
      padding: 8,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    image: {
      width: 50,
      height: 50,
      marginRight: 10,
      borderRadius: 25,
    },
    backButton: {
      backgroundColor: 'blue',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginTop: 20,
    },
    backButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });
  
  export default Home;
  