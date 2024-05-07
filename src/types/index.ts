export type TypeSpell = {
  index: string;
  level: number;
  name: string;
  url: string;
};

export type TypeSpellList = {
  count: number;
  results: TypeSpell[];
};

export type TypeSpellContext = {
  favSpells: TypeSpell[];
  addToFavSpells: (spell: TypeSpell) => void;
  spellList: TypeSpell[];
  addToSpellList: (spells: TypeSpell[]) => void;
  removeFromFavSpells: (index: string) => void;
  loading: boolean;
  error: unknown;
};

export type TypeRepeated = {
  index: string;
  name: string;
  url: string;
};

export type TypeDamage = {
  damage_type: TypeRepeated;
  damage_at_slot_level?: {
    [slot: string]: string;
  };
  damage_at_character_level?: {
    [slot: string]: string;
  };
};

export type TypeSpellDetail = {
  index: string;
  name: string;
  desc: string;
  higher_level: string;
  range: string;
  components: string[];
  material?: string;
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  attack_type: string;
  damage: TypeDamage;
  school: TypeRepeated;
  classes: TypeRepeated;
  subclasses: TypeRepeated[];
  url: string;
};
