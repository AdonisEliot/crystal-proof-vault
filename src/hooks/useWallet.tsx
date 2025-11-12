import { create } from 'zustand';

interface WalletState {
  isConnected: boolean;
  address: string | null;
  connect: () => Promise<void>;
  disconnect: () => void;
}

export const useWallet = create<WalletState>((set) => ({
  isConnected: false,
  address: null,
  connect: async () => {
    // Simulate wallet connection
    const mockAddress = `0x${Math.random().toString(16).slice(2, 10)}...${Math.random().toString(16).slice(2, 6)}`;
    set({ isConnected: true, address: mockAddress });
  },
  disconnect: () => {
    set({ isConnected: false, address: null });
  },
}));
