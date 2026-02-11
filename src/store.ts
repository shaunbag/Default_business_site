import { create } from "zustand";

export type Item = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
}

type ShopStore = {
    items: Item[];
    addItems: (items: Item[]) => void;
    cart: Item[];
    addToCart: (item: Item) => void;
    removeFromCart: (itemId: number) => void;
}

export const useShopStore = create<ShopStore>((set) => ({
    items: [],
    addItems: (items) => set({items: items}),
    cart: [],
    addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
    removeFromCart: (itemId) => set((state) => ({ cart: state.cart.filter(item => item.id !== itemId) })),
}));