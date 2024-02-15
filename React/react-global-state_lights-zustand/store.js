import { create } from "zustand";

const intitalLights = [
  {
    id: 1,
    room: "Living Room",
    isOn: false,
  },
  {
    id: 2,
    room: "Kitchen",
    isOn: false,
  },
  {
    id: 3,
    room: "Bedroom",
    isOn: false,
  },
  {
    id: 4,
    room: "Bathroom",
    isOn: false,
  },
  {
    id: 5,
    room: "Garage",
    isOn: false,
  },
  {
    id: 6,
    room: "Porch",
    isOn: false,
  },
  {
    id: 7,
    room: "Garden",
    isOn: false,
  },
  {
    id: 8,
    room: "Office",
    isOn: false,
  },
];

export const useLightsStore = create((set) => ({
  lights: [...intitalLights],
  toggleLight: (lightId) => {
    set((state) => ({
      lights: state.lights.map((light) => (light.id === lightId ? { ...light, isOn: !light.isOn } : light)),
    }));
  },
  turnAllOff: () => {
    set((state) => ({ lights: state.lights.map((light) => ({ ...light, isOn: false })) }));
  },
  turnAllOn: () => {
    set((state) => ({ lights: state.lights.map((light) => ({ ...light, isOn: true })) }));
  },
}));
