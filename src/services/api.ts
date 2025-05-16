export const fetchElements = async () => {
  const response = await fetch('https://6172cfe5110a740017222e2b.mockapi.io/elements');
  if (!response.ok) throw new Error('Failed to fetch elements');
  return await response.json();
};
