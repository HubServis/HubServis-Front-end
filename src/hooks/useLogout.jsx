export function useLogout() {
  const logout = async () => {
    try {
      const request = await fetch("http://hubservis.io/api/logout");

      if (request.ok) return true;
    } catch (err) {
      console.error(err);
    }
  };

  return [logout];
}
