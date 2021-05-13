import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import db from '../Config';

class SummaryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      present_students: [],
      absent_students: [],
    };
  }

  getTodaysDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    today = dd + '-' + mm + '-' + yyyy;
    return today;
  }
  resetDb = () => {
    console.log('Data Resetted !!');
    alert('Congratulations !!  Data Resetted !!');
    var restDatabase = db.ref('/').set({
      '01': {
        name: 'Student 1',
        roll_no: 1,
      },
      '02': {
        name: 'Student 2',
        roll_no: 2,
      },
      '03': {
        name: 'Student 3',
        roll_no: 3,
      },
      '04': {
        name: 'Student 4',
        roll_no: 4,
      },
      '05': {
        name: 'Student 5',
        roll_no: 5,
      },
    });
  };
  componentDidMount = async () => {
    var today = await this.getTodaysDate();

    var students_ref = db.ref('/').on('value', (data) => {
      var class_a = data.val();
      var present_students = [];
      var absent_students = [];
      for (var i in class_a) {
        if (class_a[i][today] === 'present') {
          present_students.push(class_a[i]);
        }
        if (class_a[i][today] === 'absent') {
          absent_students.push(class_a[i]);
        }
      }

      present_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      absent_students.sort(function (a, b) {
        return a.roll_no - b.roll_no;
      });

      this.setState({
        present_students: present_students,
        absent_students: absent_students, 
      });
    });
  };

  render() {
    return (

      <View style={{ flex: 1, backgroundColor: '#fec6ff' }}>
      
        <View style={{ flex: 0 }}></View>
        <Text style={styles.title}>Present Students List</Text>
        <View style={styles.presentContainer}>
          {this.state.present_students.map((student, index) => (
            <Text style={{ fontSize: 18, fontFamily: 'Rockwell' }}>
              {student.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Absent Students List</Text>

        <View style={styles.absentContainer}>
          {this.state.absent_students.map((student, index) => (
            <Text style={{ fontSize: 18, fontFamily: 'Rockwell' }}>
              {student.name}
            </Text>
          ))}
        </View>
        <View
          style={{
            marginTop: 30,
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text
            style={{
              fontFamily: 'Rockwell',
              fontSize: 15,
              marginBottom: 50,
            }}>
            Present: {this.state.present_students.length}
          </Text>
          <Text style={{ fontFamily: 'Rockwell', fontSize: 15 }}>
            Absent: {this.state.absent_students.length}
          </Text>
        </View>
        <TouchableOpacity style = {styles.button1}   onPress={() => {
                  this.props.navigation.navigate('HomeScreen');
                }}>
         <Text style = {styles.text}>Return</Text>
          
        </TouchableOpacity>

        <TouchableOpacity style = {styles.button} onPress={this.resetDb}>
         <Text style = {styles.text}>Reset data</Text>
          
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  presentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#3fff00',
    marginLeft: 100,
    marginRight: 100,
    borderWidth: 2,
    borderRadius: 10,
  },
  absentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    backgroundColor: '#ff0000',
    marginLeft: 100,
    marginRight: 100,
    borderWidth: 2,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    fontFamily: 'Rockwell',
  },
  button:{
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00c7ff',
    marginTop: 10,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  button1:{
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
    marginTop: 10,
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 30,
    marginLeft: 40,
    marginRight: 40,
  },
  text:{
    fontFamily:'Rockwell',
    fontSize:20,
  },
  
});

export default SummaryScreen;
