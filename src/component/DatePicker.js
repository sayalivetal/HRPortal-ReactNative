import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {faCalendarAlt} from '@fortawesome/free-solid-svg-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const DatePickers = ({
  name,
  showDatePicker,
  todate,
  todatePicker,
  fromdatePicker,
  onDateSelectedFrom,
  fromdate,
  onDateSelectedTo
}) => {
  const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      padding: 6,
      alignItems: 'center',
      backgroundColor: 'white',
    },
    sectionStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },

    // Style for iOS ONLY...
    datePicker: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 320,
      height: 260,
      display: 'flex',
    },
  });

  return (
    <View styles={styles.MainContainer}>
      <View style={styles.sectionStyle}>
        <View style={{flexDirection: 'column'}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#13171A'}}>
              {name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.5,
              borderRadius: 2,
              borderColor: '#DBDBDB',
              width: 150,
              height: 35,
              paddingHorizontal: 10,
            }}>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              size={16}
              style={{color: '#657785', paddingVertical: 18}}
            />
            <TextInput
              placeholder="To"
              underlineColorAndroid="transparent"
              style={{paddingVertical: 1, color: '#657785', fontSize: 14}}
              //editable={false}
              onFocus={showDatePicker}
              value={todate?todate.toDateString():fromdate?fromdate.toDateString():""}
            />
          </View>
        </View>
        {/* <View style={{flexDirection: 'column'}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#13171A'}}>
              To
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderWidth: 0.5,
              borderRadius: 2,
              borderColor: '#DBDBDB',
              width: 150,
              height: 35,
              paddingHorizontal: 10,
            }}>
            <FontAwesomeIcon
              icon={faCalendarAlt}
              size={16}
              style={{color: '#657785', paddingVertical: 18}}
            />
            <TextInput
              placeholder="From"
              underlineColorAndroid="transparent"
              style={{paddingVertical: 1, color: '#657785', fontSize: 14}}
              //editable={false}
              onFocus={showDatePickerFrom}
              value={fromdate.toDateString()}
            />
          </View>
        </View> */}
      </View>

      {todatePicker && (
        <DateTimePicker
          value={todate}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelectedTo}
          style={styles.datePicker}
        />
      )}
      {fromdatePicker && (
        <DateTimePicker
          value={fromdate}
          mode={'date'}
          display={Platform.OS === 'ios' ? 'spinner' : 'default'}
          is24Hour={true}
          onChange={onDateSelectedFrom}
          style={styles.datePicker}
        />
      )}
    </View>
  );
};

export default DatePickers;
