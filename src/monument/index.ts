import type Monument from "./Monument";

export const getMonuments = async (): Promise<Monument[]> => {
  const response = await fetch("http://localhost:4000/monuments", {
    method: "GET",
  });

  const monuments = (await response.json()) as Monument[];

  return monuments;
};
