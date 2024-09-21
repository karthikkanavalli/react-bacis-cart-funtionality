# React Shopping Cart Functionality

This project demonstrates a complete **shopping cart functionality** built with **React**. It includes all major cart features, such as:

- **Add to Cart**: Users can add items to the cart.
- **Quantity Control**: Users can input or adjust the quantity of each item in the cart.
- **Remove Items**: Items can be removed from the cart.
- **Update Quantity**: Users can change the quantity of items directly from the cart.

## Key Features

- **State Management with Hooks**: This project utilizes **React hooks** such as `useState`,`useContext` and `useReducer` to manage the cart's state efficiently.
- **Responsive UI**: The user interface adjusts to different screen sizes for a smooth shopping experience across devices.

## Core Functionality

1. **Add to Cart**:

   - Items can be added to the cart from the product listing.
   - The cart updates in real-time as items are added.

2. **Quantity Control**:

   - Users can specify the quantity for each item before adding it to the cart.
   - Quantities can be adjusted directly within the cart, either by inputting a value or using buttons.

3. **Remove from Cart**:

   - Users can remove items from the cart entirely.

4. **Update Cart Quantities**:
   - Users can change the quantity of items in the cart dynamically.
   - The cart state updates accordingly, showing the updated total.

## Hooks Used

- `useState`: To manage local state for individual components
- `useReducer`: For handling more complex state logic and actions within the cart
- `useContext`: For handling data globaly
