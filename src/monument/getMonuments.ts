import type Monument from "./Monument";

const url =
  (import.meta.env.VITE_URL as string) ??
  "https://monuments-back-ix7j.onrender.com/monuments";

const getMonuments = async (): Promise<Monument[]> => {
  const response = await fetch(url, {
    method: "GET",
  });

  const monuments = (await response.json()) as Monument[];

  return monuments;
};

export default getMonuments;
