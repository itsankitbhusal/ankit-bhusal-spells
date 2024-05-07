export type typeSpell = {
  index: string;
  level: number;
  name: string;
  url: string;
};

export type typeSpellList = {
  count: number;
  results: typeSpell[];
};
