import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={{
              textAlign:'center',}}>De Guzman, Haidee M.</Text>
      <View>
          <Text style={{
              textAlign:'center',}}>302</Text>
          <Image
            source={{
              uri: 'https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg',
            }}
            style={{width: 100, height: 200, alignSelf: 'center'}}
            />
          </View>
          <TextInput
            style={{
              textAlign:'center',
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            defaultValue="You can type in me"
            />
          </ScrollView>
  );
};
export default App;
