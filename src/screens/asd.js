 //const apiUrl = 'https://6c7c-2409-4089-be84-1315-3ef-fbe0-41f0-1467.in.ngrok.io';
    // let jwt;
    // dispatch(setAppUrl(apiUrl));
    //if (idToken){
      // const SignUp = async() =>{
      //   console.log("sign");
      //   try{
      //     const response = await fetch(`${apiUrl}/api/sign-up`,{
      //       method: 'POST',
      //       headers: { 'Content-Type': 'application/json' },
      //       body: JSON.stringify(data)
      //     });
      //     // console.log("resposse",response)
      //     const result = await response.json();
      //     // console.log("result",result)
      //     jwt = result.data.token;
      //     // console.log("jwt",jwt)

      //     dispatch(setJWT(jwt));
      //     // dispatch(setAppUrl(apiUrl));
      //     }
      //     catch(err) {
      //       throw err;
      //       console.log(err);
      //     }
      //     if(jwt != null){

      //       const getLeaveLists = async() =>{
      //          try{
                 
      //              const response = await fetch(`${apiUrl}/api/leaves/leaves/user-by-leave`,{
      //                method: 'GET',
      //                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
      //                // body: JSON.stringify({})
      //              });
           
      //              // console.log(response);
      //              const result = await response.json();
      //              const leavesData = result.data;
      //              dispatch(setLeavelist(leavesData));
      //              }
      //              catch(err) {
      //                throw err;
      //                console.log(err);
      //              }
                  
      //          };
      //          getLeaveLists();
      //          const getData = async() =>{
         
      //           try{
            
      //               const response = await fetch(`${apiUrl}/api/leaves/leave-type/list`,{ 
      //                 method: 'GET',
      //                 headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
      //                 // body: JSON.stringify({})
      //               });
            
      //               // console.log(response);
      //               const result = await response.json();
      //               const leaves = result.data;
                    
      //               dispatch(setLeavetype(leaves));
      //               }
      //               catch(err) {
      //                 throw err;
      //                 console.log(err);
      //               }
                   
      //           };
      //           getData();
      //           const getTasks = async() =>{
               
      //             try{
                    
      //                 const response = await fetch(`${apiUrl}/api/reports/task/user-task-list`,{
      //                   method: 'GET',
      //                   headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
      //                   // body: JSON.stringify({})
      //                 });
              
      //                 const taskResult = await response.json();
      //                 const tasks = taskResult.data;
      //                 dispatch(setTaskList(tasks));
      //                 }
      //                 catch(err) {
      //                   throw err;
      //                   console.log(err);
      //                 }
                     
      //             };
                  
      //             getTasks();
      //             const getEvents = async() =>{
      //               try{
                      
      //                   const response = await fetch(`${apiUrl}/api/events/events/list`,{
      //                     method: 'GET',
      //                     headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
      //                     // body: JSON.stringify({})
      //                   });
                
      //                   // console.log(response);
      //                   const result = await response.json();
      //                   const eventList = result.data;
      //                   dispatch(setEventsList(eventList));
      //                   }
      //                   catch(err) {
      //                     throw err;
      //                     console.log(err);
      //                   }
                       
      //               };
      //               getEvents();

      //               const getAnnoucement = async() =>{
      //                 try{
                        
      //                     const response = await fetch(`${apiUrl}/api/events/announcements/list`,{
      //                       method: 'GET',
      //                       headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
      //                       // body: JSON.stringify({})
      //                     });
                  
      //                     // console.log(response);
      //                     const result = await response.json();
      //                     const annoucementData = result.data;
      //                     dispatch(setAnnoucementList(annoucementData));
      //                     }
      //                     catch(err) {
      //                       throw err;
      //                       console.log(err);
      //                     }
                         
      //                 };
      //                 getAnnoucement();

      //                 const taskHistory = async() =>{
      //                   try{
                          
      //                       const response = await fetch(`${apiUrl}/api/reports/task/dially-user-list`,{
      //                         method: 'GET',
      //                         headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${jwt}` },
      //                         // body: JSON.stringify({})
      //                       });
                    
      //                       // console.log(response);
      //                       const result = await response.json();
      //                       const taskData = result.data;
      //                       dispatch(setTaskReport(taskData));
      //                       console.log('shubham',taskData);
      //                       }
      //                       catch(err) {
      //                         throw err;
      //                         console.log(err);
      //                       }
                           
      //                   };
      //                   taskHistory();

      //             navigation.navigate('Dashboard');
            
      //     } else {
      //       console.error('Not Signed in');
      //     }
         
      // };

      // SignUp()
    // }  
    //  const userProfile = user.additionalUserInfo.profile;
    //  dispatch(setDetails(userProfile));
    //  dispatch(setToken(idToken));
    // console.log('jwt2',jwt);


    // }).catch((error)=>{
    //   console.log("sdgsdg",error)
    // })