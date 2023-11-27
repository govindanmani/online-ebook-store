import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// import React from "react";
// import ReactDOM from "react-dom/client";
// import { configureStore, createSlice } from "@reduxjs/toolkit";
// import { Provider, useDispatch, useSelector } from "react-redux";
// import {
//   TextField,
//   Button,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
// } from "@mui/material";

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: [],
//   reducers: {
//     addToCart: (state, action) => {
//       state.push(action.payload);
//     },
//     removeFromCart: (state, action) => {
//       return state.filter((item) => item.id !== action.payload);
//     },
//     updateCart: (state, action) => {
//       return state;
//     },
//   },
// });

// const store = configureStore({
//   reducer: {
//     cart: cartSlice.reducer,
//   },
// });

// const { addToCart, removeFromCart } = cartSlice.actions;

// const Cart = () => {
//   const dispatch = useDispatch();
//   const cartItems = useSelector((state) => state.cart);
//   const [newItem, setNewItem] = React.useState("");

//   const handleAddToCart = () => {
//     if (newItem.trim() !== "") {
//       dispatch(addToCart({ id: Date.now(), name: newItem }));
//       setNewItem("by Mani");
//     }
//   };

//   return (
//     <div>
//       <Typography variant="h3" mb={4}
//       style={{textAlign:"center"}}>
//         Add Item in Your Cart
//       </Typography>
//       <div style={{ marginBottom: "16px",marginLeft:"700px" }}>
//         <TextField
//           label="Enter item name"
//           variant="outlined"
//           size="small"
//           value={newItem}
//           onChange={(e) => setNewItem(e.target.value)}
//         />
//         <Button
//           variant="contained"
//           onClick={handleAddToCart}
//           // style={{ marginRight:"200px" }}
//           style={{ marginLeft: "8px" }}
//         >
//           Add to Cart
//         </Button>
//       </div>

//       <Typography variant="h4" style={{marginLeft:"700px"}}>Store</Typography>
//       <List sx={{ maxWidth: "sm" }}>
//         {cartItems.map((item) => (
//           <ListItem key={item.id} style={{marginLeft:"700px"}}>
//             <ListItemText primary={item.name} />
//             <Button
//               variant="danger"
//               onClick={() => dispatch(removeFromCart(item.id))}
//               style={{marginLeft:"700px"}}
//             >
//               Remove
//             </Button>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Cart />
//     </Provider>
//   );
// };

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
