import { IUser } from "@/types/user";
import { useEffect } from "react";
import { create } from "zustand";


type State = {
  profile?: IUser,
  fetch: () => Promise<void>;
  loading: boolean;
}

export const useProfileState = create<State>((set, get) => ({
  loading: false,
  fetch: async () => {
    if (get().loading) return;
    set({ loading: true });
    set({
      profile: {
        email: "info@relationc.com",
        avatar: "https://bootstrapdemos.adminmart.com/modernize/dist/assets/images/profile/user-1.jpg",
        displayName: "Martin Tran",
        role: 'Admin'
      }
    })
    set({ loading: false });
  }
}))

export const useProfile = () => {
  const state = useProfileState();

  useEffect(() => {
    if (!state.profile) state.fetch();
  }, [])

  return {
    ...state
  }
}
