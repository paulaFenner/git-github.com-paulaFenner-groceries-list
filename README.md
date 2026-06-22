# Shopping List

A React shopping list app that lets you manage items across multiple stores.

## Features

- **Add items** with name, quantity, store, and category
- **Filter by store** to view items for a specific store
- **Mark items as bought** with a checkbox
- **Delete items** with a confirmation prompt
- **Persistent state** — items and selected store are saved to `localStorage`

## Tech Stack

- React 19
- Vite 8
- uuid (for unique item IDs)

## Project Structure

```
src/
├── assets/
│   └── categoryData.js      # Category definitions (name + emoji)
├── components/
│   ├── AddItemForm.jsx       # Form to add a new item
│   ├── ShoppingList.jsx      # Displays items filtered by store
│   └── StoreSelector.jsx     # Dropdown to pick a store
├── styles/
│   └── shoppingList.css      # Styling (pending)
├── App.jsx                   # Root component, state management, localStorage
├── index.css                 # Global styles entry point
└── main.jsx                  # App entry point
```

## Component Overview

### App

Manages all state (`items`, `selectedStore`). Persists to `localStorage` via `useEffect`. Defines CRUD operations: `addItem`, `toggleBought`, `deleteItem`.

### AddItemForm

Controlled form with fields for product name, quantity (number), store (dropdown), and category (dropdown). Submits via `onAddItem` callback.

### ShoppingList

Receives `items` and `selectedStore`, filters items by store, and renders them as a list with a checkbox (bought status), category emoji, name, quantity, and delete button.

### StoreSelector

Simple `<select>` that sets the active store filter.

## Data Model

```js
{
  id: "uuid",
  name: "Milk",
  store: "Lidl",
  bought: false,
  quantity: 2,
  category: "Dairy"
}
```

## Available Stores

Lidl, Continente, Pingo Doce, Mercado, Others

## Categories

Dairy, Meat, Produce, Bakery, Pantry, Beverages, Spices & Condiments, Frozen, Household, Personal Care

> This documentation was generated with [opencode](https://opencode.ai), an AI coding agent.

## Suggested Improvements

### UX / Missing Functionality

- **Empty state** — When a store has no items, the list is blank. Show a message like "No items for this store."
- **`formStore` not reset on submit** — After adding an item, the store dropdown keeps its value while other fields reset. Likely an oversight.
- **No min/validation on quantity** — The number input accepts 0 and negative values.
- **No "All stores" view** — Items are always filtered by store; there's no way to see everything at once.

### Accessibility

- **Missing labels** — The store and category `<select>` elements in `AddItemForm` have no associated `<label>`.
- **Missing label** — `StoreSelector` has a `<select>` with no `<label>`.

### Code Quality

- **Hardcoded stores in component** — The `stores` array lives inside `App`. If it changes, `selectedStore` in localStorage could reference an invalid value.
- **Category lookup via linear search** — `ShoppingList` uses `Array.find` on every item render. Could use a `Map` for O(1) lookup.
- **No type validation** — Component props have no PropTypes or TypeScript annotations.
