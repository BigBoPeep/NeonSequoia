import { create } from "zustand";

export const links = {
  group1: { Home: "/", About: "/about", Listen: "/listen" },
  group2: { Store: "/store", Dates: "/dates", Test3: "/" },
};

export const tourDates = [
  {
    date: "2026-10-12",
    venue: "The Crystal Ballroom",
    location: "Portland, OR",
    status: "Sold Out",
  },
  {
    date: "2026-10-15",
    venue: "The Fillmore",
    location: "San Francisco, CA",
    status: "Available",
  },
  {
    date: "2026-10-20",
    venue: "Red Rocks Amphitheatre",
    location: "Morrison, CO",
    status: "Available",
  },
  {
    date: "2026-11-02",
    venue: "Funkhaus",
    location: "Berlin, DE",
    status: "Available",
  },
  {
    date: "2026-11-05",
    venue: "Roundhouse",
    location: "London, UK",
    status: "Low Availability",
  },
];

// interface AppStore {
//   neonColor: string;
//   setNeonColor: (color: string) => void;
// }

// export const useAppStore = create<AppStore>((set) => ({
//   neonColor: "--color-red-500",
//   setNeonColor: (color) => set({ neonColor: color }),
// }));
