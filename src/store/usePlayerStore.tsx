import { create } from "zustand";

export const usePlayerStore = create((set, get) => ({
  players: [],
  loaded: false,

  fetchPlayers: async () => {
    if (get().loaded) return;

    const res = await fetch("../data/players.json"); // or API
    const data = await res.json();

    set({ players: data, loaded: true });
  }
}));