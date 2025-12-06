import mongoose, { Schema, Document } from "mongoose";




export enum LegislativeProcessStep {
  PROJECT_IDEA = "Pomysł na projekt ustawy",
  PROJEKT_WPLYNAL_DO_SEJMU = "Projekt wpłynął do Sejmu",
  SKIEROWANO_DO_I_CZYTANIA_NA_POSIEDZENIU_SEJMU = "Skierowano do I czytania na posiedzeniu Sejmu",
  SKIEROWANO_DO_I_CZYTANIA_W_KOMISJACH = "Skierowano do I czytania w komisjach",
  CZYTANIE_I_NA_POSIEDZENIU_SEJMU = "I czytanie na posiedzeniu Sejmu",
  CZYTANIE_II_NA_POSIEDZENIU_SEJMU = "II czytanie na posiedzeniu Sejmu",
  CZYTANIE_III_NA_POSIEDZENIU_SEJMU = "III czytanie na posiedzeniu Sejmu",
  I_CZYTANIE_W_KOMISJACH = "I czytanie w komisjach",
  PRACA_W_KOMISJACH_PO_CZYTANIU = "Praca w komisjach po (I, II) czytaniu",
  SPRAWOZDANIE_PODKOMISJI = "Sprawozdanie podkomisji",
  SPRAWOZDANIE_KOMISJI = "Sprawozdanie komisji",
  GLOSOWANIE = "Głosowanie",
  STANOWISKO_SENATU = "Stanowisko Senatu",
  PRACA_W_KOMISJACH_NAD_STANOWISKIEM_SENATU = "Praca w komisjach nad stanowiskiem Senatu",
  ROZPATRYWANIE_STANOWISKA_SENATU_NA_FORUM_SEJMU = "Rozpatrywanie na forum Sejmu stanowiska Senatu",
  USTAWE_PRZEKAZANO_PREZYDENTOWI_DO_PODPISU = "Ustawę przekazano Prezydentowi do podpisu",
  PREZYDENT_SKIEROWAL_DO_TK = "Prezydent skierował ustawę do Trybunału Konstytucyjnego",
  WYROK_TK = "Wyrok Trybunału Konstytucyjnego",
  WNIOSEK_PREZYDENTA_VETO = "Wniosek Prezydenta (VETO)",
  WNIOSEK_PREZYDENTA_O_USUNIECIE_NIEZGODNOSCI = "Wniosek Prezydenta o usunięcie niezgodności z Konstytucją",
  ROZPATRYWANIE_WNIOSKU_PREZYDENTA = "Rozpatrywanie na forum Sejmu wniosku Prezydenta",
  ROZPATRYWANIE_SPRAWOZDANIA_KOMISJI_W_SPRAWIE_USUNIECIA_NIEZGODNOSCI = "Rozpatrywanie na forum Sejmu sprawozdania komisji w sprawie usunięcia niezgodności z Konstytucją",
  PODPISANIE_USTAWY_PRZEZ_PREZYDENTA = "Podpisanie ustawy przez Prezydenta",
  OGLOSZENIE_USTAWY = "Ogłoszenie ustawy",
}


export interface ILegislationStep {
  _id?: string;
  projectId?: string;
  type: LegislativeProcessStep;
  isActive: boolean;
  startDate: Date;
  endDate?: Date;
}

export interface ILegislationProject extends Document {
  title: string;
  description: string;
  steps: ILegislationStep[];
  tags?: LegislationTag[];
  applicant: Applicant;
  createdAt: Date;
  updatedAt: Date;
}

export enum LegislationTag {
  ALKOHOL = "alkohol",
  APTEKI = "apteki",
  BUDOWNICTWO = "budownictwo",
  COMPLIANCE = "compliance",
  COVID_19 = "COVID-19",
  DANE_OSOBOWE = "dane osobowe",
  ENERGETYKA = "energetyka",
  INSTRUMENTY_FINANSOWE = "instrumenty finansowe",
  OCHRONA_SRODOWISKA = "ochrona środowiska",
  ODPADY = "odpady",
  OSWIATA = "oświata",
  PODATKI = "podatki",
  PODMIOTY_LECZNICZE = "podmioty lecznicze",
  POSTEPOWANIA_ADMINISTRACYJNE = "postępowania administracyjne",
  PRACOWNICY = "pracownicy",
  PRAWO_KONKURENCJI = "prawo konkurencji",
  PROCES_CYWILNY = "proces cywilny",
  PROCES_KARNY = "proces karny",
  PRODUKTY_LECZNICZNE = "produkty leczniczne",
  PRZEDSIEBIORCY = "przedsiębiorcy",
  REKLAMA = "reklama",
  SZKOLNICTWO_WYZSZE = "szkolnictwo wyższe",
  WYROBY_MEDYCZNE = "wyroby medyczne",
  WYROBY_TYTONIOWE = "wyroby tytoniowe",
  ZAMOWIENIA_PUBLICZNE = "zamówienia publiczne"
}

enum Applicant{
  RZAD = "Rząd",
  POSLOWIE = "Posłowie",
  SENAT = "Senat",
  PREZYDENT = "Prezydent",
  OBYWATELE = "Obywatele"
}

const LegislationStepSchema = new Schema<ILegislationStep>(
  {
    projectId: { type: String },
    type: {
      type: String,
      enum: Object.values(LegislativeProcessStep),
      required: true,
    },
    isActive: { type: Boolean, default: false },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
  },
  { _id: true }
);

const LegislationProjectSchema = new Schema<ILegislationProject>(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    steps: { type: [LegislationStepSchema], default: [] },
    tags: {
      type: [{ type: String, enum: Object.values(LegislationTag) }],
      default: [],
    },
    applicant: {
      type: String,
      enum: Object.values(Applicant),
      required: true,
    },
  },
  { timestamps: true }
);

export const LegislationProject = mongoose.model<ILegislationProject>(
  "LegislationProject",
  LegislationProjectSchema
);

export default LegislationProject;
