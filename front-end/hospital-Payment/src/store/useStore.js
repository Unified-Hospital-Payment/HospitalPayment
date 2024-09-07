import { create } from "zustand";

export const useStore = create((set) => ({
    userType: "doctor",
    setUserType:(user => set({user})),

    hospitals: [],
    setHospitals : (hospitals => set({hospitals}))
}));

