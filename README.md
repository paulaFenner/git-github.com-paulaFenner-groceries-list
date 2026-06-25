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
│   ├── Button.jsx            # FAB to open the add-item modal
│   ├── Dashboard.jsx         # Store cards grid with item counts
│   ├── Modal.jsx             # Overlay dialog wrapper
│   ├── ShoppingList.jsx      # Displays items filtered by store
│   └── StoreSelector.jsx     # Unused — replaced by Dashboard cards
├── styles/
│   ├── addItemForm.css
│   ├── buttons.css
│   ├── dashboard.css
│   ├── modal.css
│   └── shoppingList.css
├── App.jsx                   # Root component, state management, localStorage
├── index.css                 # Global styles entry point
└── main.jsx                  # App entry point
```

## Component Overview

### App

Manages all state (`items`, `selectedStore`). Persists to `localStorage` via `useEffect`. Defines CRUD operations: `addItem`, `toggleBought`, `deleteItem`.

### Dashboard

Renders a grid of store cards with item counts. Clicking a card selects that store and highlights it.

### ShoppingList

Receives `items` and `selectedStore`, filters items by store, and renders them as a list with a checkbox (bought status), category emoji, name, quantity, and delete button. Shows an empty-state message when no items exist.

### Button

Floating action button (`+`) that toggles the add-item modal.

### Modal

Overlay dialog wrapper with a close button. Renders its `children` (typically `AddItemForm`).

### AddItemForm

Controlled form with fields for product name, quantity (number), store (dropdown), and category (dropdown). Submits via `onAddItem` callback.

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

- **`formStore` not reset on submit** — After adding an item, the store dropdown keeps its value while other fields reset. Likely an oversight.
- **No min/validation on quantity** — The number input accepts 0 and negative values.
- **No "All stores" view** — Items are always filtered by store; there's no way to see everything at once.
- **Missing label** — The category `<select>` in `AddItemForm` has no associated `<label>`.

### Code Quality

- **Hardcoded stores in component** — The `stores` array lives inside `App`. If it changes, `selectedStore` in localStorage could reference an invalid value.
- **Category lookup via linear search** — `ShoppingList` uses `Array.find` on every item render. Could use a `Map` for O(1) lookup.
- **No type validation** — Component props have no PropTypes or TypeScript annotations.
