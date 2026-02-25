import { create } from "zustand";
import type { Item, Order } from "./utils/types";

type ShopStore = {
    items: Item[];
    addItems: (items: Item[]) => void;
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (itemId: number) => void;
    order: Order | null;
    placeOrder: (order: Order) => void;
}

export const useShopStore = create<ShopStore>((set) => ({
    items: [],
    addItems: (items) => set({items: items}),
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter(item => item.id !== itemId) })),
    order: null,
    placeOrder: (order) => set({ order })
}));