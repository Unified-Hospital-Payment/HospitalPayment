import { create } from "zustand";

export const useUserStore = create((set) => ({
    userType: "hospital_admin",
    setUserType:(user => set({user}))
}));