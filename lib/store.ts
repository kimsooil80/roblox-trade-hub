// src/lib/store.ts
import { create } from 'zustand';
import { GameItem } from '@/lib/types';

interface TradeState {
  myOffer: GameItem[];
  theirOffer: GameItem[];
  addToMyOffer: (item: GameItem) => void;
  addToTheirOffer: (item: GameItem) => void;
  removeFromMyOffer: (index: number) => void;
  removeFromTheirOffer: (index: number) => void;
  reset: () => void;
}

export const useTradeStore = create<TradeState>((set) => ({
  myOffer: [],
  theirOffer: [],
  
  addToMyOffer: (item) => set((state) => ({ 
    myOffer: [...state.myOffer, item] 
  })),
  
  addToTheirOffer: (item) => set((state) => ({ 
    theirOffer: [...state.theirOffer, item] 
  })),
  
  removeFromMyOffer: (index) => set((state) => ({
    myOffer: state.myOffer.filter((_, i) => i !== index)
  })),
  
  removeFromTheirOffer: (index) => set((state) => ({
    theirOffer: state.theirOffer.filter((_, i) => i !== index)
  })),
  
  reset: () => set({ myOffer: [], theirOffer: [] }),
}));
