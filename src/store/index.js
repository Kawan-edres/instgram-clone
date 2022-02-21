import {configureStore} from '@reduxjs/toolkit';
import navSlice from './navSlice'
import inboxSlice from './inboxSlice';


const store=configureStore({

    reducer:{
        nav: navSlice,
        inbox:inboxSlice  //inbox nawy slicakaya 
    
    }
     


})

export default store;