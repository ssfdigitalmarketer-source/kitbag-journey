import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import blogs from "../data/blogs.json";

export const useBlogStore = create(persist(
  (set, get) => ({
    blogs: [],
    loaded: false,

    fetchBlogs: async () => {
      if (get().loaded) return;
      set({ blogs, loaded: true });
    }
  }),
  {
    name: "players-store",
    storage: createJSONStorage(() => sessionStorage),
    onRehydrateStorage: () => () => {
      useBlogStore.setState({ hasHydrated: true });
    }
  }
));