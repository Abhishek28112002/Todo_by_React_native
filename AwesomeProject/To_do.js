import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  Image,
  TextInput,
  View,
} from 'react-native';

const Todo = () => {
  const COLORS = {primary: '#1f145c', white: '#fff'};
  const Item = [
    'MILK',
    'TASK',
    'JOB',
    'CHORE',
    'ERRAND',
    'TEA',
    'CODING',
    'Book',
    'Pen',
    'Market',
    'Wine',
    'Job',
    'Joging',
    'Drinking',
  ];
  const [Data, setdata] = useState([]);
  const [orginaldata, setorginaldata] = useState([]);
  const deleteTodo = todoId => {
    const newTodosItem = Data.filter(item => item.id != todoId);
    setdata(newTodosItem);
    setorginaldata(newTodosItem);
  };
  const onPress = () => {
    var randomNumber = Math.floor(Math.random() * Item.length);
    setdata([
      {
        id: Data.length,
        value: Item[randomNumber],
      },
      ...Data,
    ]);
    setorginaldata([
      {
        id: orginaldata.length,
        value: Item[randomNumber],
      },
      ...orginaldata,
    ]);
  };
  const search = text => {
    if (text == '') {
      setdata(orginaldata);
      return;
    }
    const ata = orginaldata.filter(item => {
      const text1 = item.value.toLowerCase();
      const text2 = text.toLowerCase();
      if (text1.includes(text2)) return item;
    });
    setdata(ata);
  };
  const ListItem = ({data}) => {
    return (
      <View key={data.id} style={styles.listItem}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.primary,
            }}>
            {data.value}
          </Text>
        </View>
        <TouchableOpacity
          style={{size: 40, color: 'white'}}
          onPress={() => deleteTodo(data.id)}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>X</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View>
      <View style={styles.listItem}>
        <View style={{flex: 1}}>
          <TextInput
            style={{
              fontWeight: 'bold',
              fontSize: 15,
              color: COLORS.primary,
            }}
            onChangeText={value => search(value)}
            placeholder="Search..."
          />
        </View>
        <TouchableOpacity style={styles.iconContainer} onPress={onPress}>
          <Text style={{fontWeight: 'bold', fontSize: 30}}>+</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <FlatList
          contentContainerStyle={{padding: 20, paddingBottom: 100}}
          data={Data}
          renderItem={({item}) => <ListItem data={item} />}
        />
      </ScrollView>
    </View>
  );
};
const COLORS = {primary: '#1f145c', white: '#fff'};
const styles = StyleSheet.create({
  inputContainer: {
    height: 100,
    paddingHorizontal: 10,
    elevation: 40,
    backgroundColor: COLORS.white,
    flex: 1,
    marginVertical: 20,
    marginRight: 20,
    borderRadius: 30,
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'green',
    elevation: 40,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  listItem: {
    padding: 20,
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    elevation: 12,
    borderRadius: 7,
    marginVertical: 10,
  },
});

export default Todo;
