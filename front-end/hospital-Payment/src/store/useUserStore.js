import { create } from "zustand";

export const useUserStore = create((set) => ({
    userType: "super-admin",
    setUserType:(user => set({user}))
}));