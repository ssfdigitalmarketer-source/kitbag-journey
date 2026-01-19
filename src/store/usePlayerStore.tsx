import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import players from "../data/players.json";

export const usePlayerStore = create(persist(
  (set, get) => ({
    players: [],
    loaded: false,

    fetchPlayers: async () => {
      if (get().loaded) return;
      set({ players, loaded: true });
    }
  }),
  {
    name: "players-store",
    storage: createJSONStorage(() => sessionStorage),
    onRehydrateStorage: () => () => {
      usePlayerStore.setState({ hasHydrated: true });
    }
  }
));