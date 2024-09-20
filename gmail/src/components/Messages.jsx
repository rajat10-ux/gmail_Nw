import React, { useEffect, useState } from 'react'
import Message from './Message'
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { setEmails } from '../redux/appSlice'

const Messages = () => {
  const dispatch=useDispatch();
  const {emails,searchText}=useSelector(store=>store.appSlice)
  const [tempemail,settempemail]=useState(emails);
  useEffect(()=>{
    const q=query(collection(db,"emails"),orderBy('createdAt','desc'));
const unsubscribe=onSnapshot(q,(snapshot)=>{
  const allEmails=snapshot.docs.map((doc)=>({...doc.data(),id:doc.id}));
  dispatch(setEmails(allEmails));
})
return ()=>unsubscribe();
  },[])
useEffect(()=>{
const filterEmail=emails?.filter((email)=>{
  return email?.subject?.toLowerCase().includes(searchText.toLowerCase()) ||
  email?.to?.toLowerCase().includes(searchText.toLowerCase()) || email?.message?.toLowerCase().includes(searchText.toLowerCase())
})
settempemail(filterEmail)
},[searchText,emails])

  return (
    <div>
    {
    tempemail && tempemail?.map((email)=><Message email={email}/>)
    }
    </div>
  )
}

export default Messages
