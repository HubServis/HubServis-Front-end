import { api } from "../services/api";

export function useLogout() {
  const logout = async () => {
    try {
      const request = await api.get("/logout");

      if (request.ok) return true;
    } catch (err) {
      console.error(err);
    }
  };

  return [logout];
}
