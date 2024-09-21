const reducer = (state, info) => {
    switch (info.type) {
        case "CLEAR_CART": {
            return {
                ...state,
                totalItems: 0,
                cartItems:[]
            };
      }

    case "REMOVE_ITEM": {
      let updatedItems = state.cartItems.filter(
        (item) => item.id !== info.payload.id
      );

      return {
        ...state,
        totalItems: state.totalItems - info.payload.qty,
        cartItems: updatedItems,
      };
    }

      case "INCREMENT": {



        
      let updateItemes = state.cartItems.map((item) => {
        return info.payload.id === item.id
          ? { ...item, qty: item.qty + 1 }
          : item;
      });
      return {
        ...state,
        totalItems: state.totalItems + 1,
        cartItems: updateItemes,
      };
    }

      case "DECREMENT": {
          
          let updatedItems = state.cartItems.map((item) => {
              return item.id===info.payload.id?{...item,qty:item.qty-1}:item
          }).filter((item) => {
              return item.qty!==0
          })

          return {
              ...state,
              totalItems: state.totalItems > 1 ? state.totalItems - 1 : state.totalItems*0,
              cartItems:updatedItems
          }
    }

    case "ADD_TO_CART": {
      let itemExists = state.cartItems.find(
        (item) => item.id === info.payload.item.id
      );

      if (itemExists) {
        let updatedItems = state.cartItems.map((item) => {
          return item.id === info.payload.id
            ? { ...item, qty: item.qty + info.payload.qty }
            : item;
        });
        return {
          ...state,
          totalItems: state.totalItems + info.payload.qty,
          cartItems: updatedItems,
        };
      } else {
        info.payload.item.qty = info.payload.qty;

        let temp = { ...info.payload.item, qty: info.payload.qty };
        return {
          ...state,
          totalItems: state.totalItems + info.payload.qty,
          cartItems: [...state.cartItems, temp],
        };
      }
    }
    default:
      return state;
  }
};
export default reducer;
