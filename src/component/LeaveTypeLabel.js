import React, {useState, useEffect} from 'react';
// import { View } from 'react-native';

import ScrollingButtonMenu from 'react-native-scroll-menu';
import {useSelector, useDispatch} from 'react-redux';
import {authSelector} from '../slices/Authslice';
import {leaveList} from '../slices/LeaveSlice';
const LeaveTypeLabel = () => {
  const {userData} = useSelector(authSelector);
  const dispatch = useDispatch();
  const [leaveData, setLeaveData] = useState([]);
  const[leaveId,setLeaveId] = useState()
  console.log('hhhhhhhhhhhhhhhh', userData);
  useEffect(() => {
    let jwt = userData.token;
    if (jwt) {
      dispatch(leaveList(jwt)).then(data => {
        console.log('kkkkkkkkkkkkkkkkkkkkkkkkkkkkk', data?.payload?.data);
        if (data?.payload?.data.length > 0) {
          setLeaveData([...data?.payload?.data]);
        }
      });
    }
  }, [userData]);

  console.log('ggggggggggg', leaveData);

  const leaveIds = [];
  const leaveName = [];
  var leaves = leaveData;
  const ids = leaves.map(val => leaveIds.push(val.id));
  const name = leaves.map(name => leaveName.push(name.leave_type_name));
  var finalObj = [];
  for (var i = 0; i < leaveIds.length; i++) {
    finalObj[i] = {
      id: leaveIds[i],
      name: leaveName[i],
    };
  }
  console.log(finalObj);
  const handleLeaveData = e => {
    console.log(e);
    setLeaveId(e.id);
  };

  return (
    <ScrollingButtonMenu
      buttonStyle={{
        width: 80,
        height: 35,
        borderRadius: 20,
        borderColor: '#D4EEFF',
        backgroundColor: '#D4EEFF',
        marginHorizontal: 5,
      }}
      textStyle={{
        color: '#024E7D',
        fontFamily: 'Proxima Nova,Semibold',
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
      }}
      activeColor="#D4EEFF"
      activeBackgroundColor="#024E7D"
      items={finalObj}
      onPress={handleLeaveData}
      selected={leaveId}
    />
  );
};
export default LeaveTypeLabel;
