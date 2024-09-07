import { create } from "zustand";

export const useUserStore = create((set) => ({
    userType: "super_admin",
    setUserType:(user => set({user}))
}));