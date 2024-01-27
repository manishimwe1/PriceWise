import { create } from "zustand";
type appState = {
	show: boolean;
	setShow: (show: boolean) => void;
	setNotShow: (NotShow: boolean) => void;
	NotShow: boolean;
};

export const useAppStore = create<appState>()((set) => ({
	show: false,
	NotShow: true,
	setShow: (show) => set((state) => ({ show: true })),
	setNotShow: (NotShow) =>
		set((state) => ({ NotShow: false })),
}));
