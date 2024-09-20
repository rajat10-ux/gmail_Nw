import {createSlice} from "@reduxjs/toolkit"

const appSlice=createSlice({
        name:"appSlice",
        initialState:{
                open:false,
                emails:[],
                SelectedEmail:null,
                searchText:"",
                user:null
        },
        reducers:{
                setOpen:(state,action)=>{
                        state.open=action.payload
                },
                setEmails:(state,action)=>{
                        state.emails=action.payload
                },
                setSelectedEmail:(state,action)=>{
                        state.SelectedEmail=action.payload;
                },
                setSearchText:(state,action)=>{
                        state.searchText=action.payload;
                },
                setUser:(state,action)=>{
                        state.user=action.payload
                }
        }
});
export const {setOpen,setEmails,setSelectedEmail,setSearchText,setUser}= appSlice.actions;
export default appSlice.reducer