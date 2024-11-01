// const INITIAL_STATE = {

// 		items: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
//   {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
//   {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
//   {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},]
	
// }

// export const contactsSlice = (state = INITIAL_STATE, action) => {
//     switch (action.type) {
//         case "contacts/addContact": {
//             return {
//                 ...state,
// 	        items: [...state.items, action.payload]
        
//             }
//         }
//             case "contacts/deleteContact": {
//             return {
//                 ...state,
//           items: state.items.filter((contact) => contact.id !== action.payload)
        
//             }
//         }
//         default:
//             return state;
//     }

// }




import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {

    items:
        [
           { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
           {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
           {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
           { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]
	
}
 const contactsSlice = createSlice({
  name: 'contacts',
  initialState: INITIAL_STATE,
  reducers: {
      addContact: (state, action) => {
          state.items.push(action.payload)
      },
      deleteContact: (state, action) => {
         state.items = state.items.filter((contact) => contact.id !== action.payload)
      }
  },
})


export const contactsReducer = contactsSlice.reducer;

export const {addContact, deleteContact } = contactsSlice.actions;