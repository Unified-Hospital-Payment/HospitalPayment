import { create } from "zustand";

export const useStore = create((set) => ({
    userType: 'patient',
    setUserType: (role) => set({ userType: role }),

    userId: null,
    setUserId: (id) => set({ userTypeId: id }),

    hospitals: [],
    setHospitals : (hospitals => set({hospitals}))
}));

