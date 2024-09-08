import { create } from "zustand";

export const useStore = create((set) => ({
    userType: "hospital_admin",
    setUserType:(user => set({user})),

    hospitals: [],
    setHospitals : (hospitals => set({hospitals}))
}));

