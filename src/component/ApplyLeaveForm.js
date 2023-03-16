import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {Input, Button} from 'react-native-elements';
import {useSelector, useDispatch} from 'react-redux';
import {
  setDetails,
  setToken,
  setJWT,
  setLeavetype,
} from '../redux/actions/useractions';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faEye,
  faSearch,
  faBars,
  faSmile,
  faAddressBook,
  faCalendar,
  faCalendarAlt,
  faPaperclip,
} from '@fortawesome/free-solid-svg-icons';

import DocumentPicker from 'react-native-document-picker';
import {authSelector} from '../slices/Authslice';
import LeaveTypeLabel from './LeaveTypeLabel';
import {leaveSelector} from '../slices/LeaveSlice';
import {leaveList} from '../slices/LeaveSlice';
import DatePickers from './DatePicker';
const DropdownComponent = () => {
  const {leaveData} = useSelector(leaveSelector);
  console.log('llllllllllllllllllllllll', leaveData);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const {userData} = useSelector(authSelector);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [todatePicker, setToDatePicker] = useState(false);
  const [fromdatePicker, setFromDatePicker] = useState(false);
  const [todate, setDateSelected] = useState(new Date());
  const [fromdate, setFromDate] = useState(new Date());
  const [finalLeaveData, setFinalLeaveData] = useState([]);
  const showDatePickerTo = () => {
    setToDatePicker(true);
  };
  const showDatePickerFrom = () => {
    setFromDatePicker(true);
  };
  const onDateSelectedTo = (event, value) => {
    setDateSelected(value);
    setToDatePicker(false);
  };
  const onDateSelectedFrom = (event, value) => {
    setFromDate(value);
    setFromDatePicker(false);
  };
  console.log('fffffffffffffffffffffffffff', todatePicker, fromdatePicker);

  useEffect(() => {
    const leaveId = [];
    const leaveName = [];
    var leaves = leaveData;
    leaves.map(val => {
      leaveId.push(val.id);
      leaveName.push(val.leave_type_name);
    });
    var finalObj = [];
    for (var i = 0; i < leaveData.length; i++) {
      console.log(leaveData[i]);
      finalObj[i] = {
        label: leaveName[i],
        value: leaveId[i],
      };
    }
    setFinalLeaveData([...finalObj]);
  }, [leaveData]);
  console.log('bbbbbbbbbbbbbbbbbbbbbbbbb', finalLeaveData);
  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && {color: 'blue'}]}>
  //         Leave Type
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  // const selectFile = async () => {
  //   try {

  //     const res = await DocumentPicker.pick({

  //       type: [DocumentPicker.types.allFiles],
  //     });
  //     console.log('res : ' + JSON.stringify(res));
  //     setSingleFile(res);
  //   } catch (err) {
  //     console.log('errrrr');
  //     setSingleFile(null);
  //     if (DocumentPicker.isCancel(err)) {
  //       alert('Canceled');
  //     } else {
  //       alert('Unknown Error: ' + JSON.stringify(err));
  //       throw err;
  //     }
  //   }
  // };

  const reasonInput = () => {
    return (
      <View
        style={{
          backgroundColor: '#F4F5F7',
          marginTop: 15,
          paddingVertical: 12,
        }}>
        <View style={{paddingHorizontal: 12}}>
          <Text style={{color: '#024E7D'}}>Reason</Text>
          <TextInput numberOfLines={4} multiline={true} />
        </View>
        <View style={{paddingHorizontal: 12}}>
          <TouchableOpacity
            style={styles.buttonStyle}
            activeOpacity={0.5}
            // onPress={selectFile}
          >
            <FontAwesomeIcon
              icon={faPaperclip}
              size={16}
              style={{color: '#657785', paddingVertical: 18}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  // console.log(item.value);
  return (
    <View style={styles.container}>
      <View>
        {/* {renderLabel()}
          {datePickers()}
         {leaveArr()}
          //  */}

        <DatePickers
          name="From"
          showDatePicker={showDatePickerFrom}
          fromdatePicker={fromdatePicker}
          onDateSelectedFrom={onDateSelectedFrom}
          fromdate={fromdate}
        />
        <DatePickers
          name="To"
          todate={todate}
          showDatePicker={showDatePickerTo}
          todatePicker={todatePicker}
          onDateSelectedTo={onDateSelectedTo}
        />
        {/* {renderLabel()} */}
        <View style={{marginTop: 15}}>
          <View>
            <Text style={{fontSize: 16, fontWeight: '600', color: '#13171A'}}>
              Type
            </Text>
          </View>
          <View>
            <Dropdown
              style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
              placeholderStyle={styles.placeholderStyle}
              selectedTextStyle={styles.selectedTextStyle}
              inputSearchStyle={styles.inputSearchStyle}
              iconStyle={styles.iconStyle}
              data={finalLeaveData}
              search={false}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder={!isFocus ? 'Select item' : '...'}
              searchPlaceholder="Search..."
              value={value}
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
              onChange={item => {
                setValue(item.value);
                setIsFocus(false);
              }}
            />
          </View>
        </View>
        {reasonInput()}
      </View>
      <View style={{marginTop: 15, marginLeft: 250}}>
        <Button
          title={`Submit`}
          containerStyle={{width: 80, height: 35, borderRadius: 20}}
          buttonStyle={{backgroundColor: '#23B33A', width: 86, height: 35}}
          titleStyle={{
            color: '#FFFFFF',
            fontFamily: 'Proxima Nova,Semibold',
            fontSize: 14,
            fontWeight: 'bold',
          }}
        />
      </View>
    </View>
  );
};

export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
  },
  dropdown: {
    height: 30,
    width: 150,
    backgroundColor: '#F4F5F7',
    color: '#657785',
    borderColor: '#DBDBDB',
    borderWidth: 0.5,
    borderRadius: 4,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
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
  imageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  text: {
    fontSize: 25,
    color: 'red',
    padding: 3,
    marginBottom: 10,
    textAlign: 'center',
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
