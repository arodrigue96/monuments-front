import type Monument from "./Monument";

const getMonuments = async (): Promise<Monument[]> => {
  const response = await fetch(
    "https://monuments-back-ix7j.onrender.com/monuments",
    {
      method: "GET",
    },
  );

  const monuments = (await response.json()) as Monument[];

  return monuments;
};

export default getMonuments;
