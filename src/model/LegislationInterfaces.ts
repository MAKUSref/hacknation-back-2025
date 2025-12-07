export enum StepPlace {
  PRE_SEJM = "PRE_SEJM",
  SEJM = "SEJM",
  SENAT = "SENAT",
  PREZYDENT = "PREZYDENT",
  UKONCZONE = "UKONCZONE",
}

// Pre sejm steps
// 1. Zgłoszenia lobbingowe
// 2. Uzgodnienia
// 3. Konsultacje publiczne
// 4. Opiniowanie
// 5. Komitet Rady Ministrów do Spraw Cyfryzacji
// 6. Komitet do Spraw Europejskich
// 7. Komitet Społeczny Rady Ministrów
// 8. Komitet Ekonomiczny Rady Ministrów
// 9. Stały Komitet Rady Ministrów
// 10. Komisja Prawnicza
// 11. Potwierdzenie projektu przez Stały Komitet Rady Ministrów
// 12. Rada Ministrów
// 13. Notyfikacja
// 14. Skierowanie projektu ustawy do SejmuDalszy ciąg procesu legisla

export enum LegislativeProcessStep {
  ZGLOSZENIA_LOBBINGOWE,
  UZGODNIENIA,
  KONSULTACJE_PUBLICZNE,
  OPINIOWANIE,
  KOMITET_RM_DS_CYFRYZACJI,
  KOMITET_DS_EUROPEJSKICH,
  KOMITET_SPOLCZNY_RM,
  KOMITET_EKONOMICZNY_RM,
  STALY_KOMITET_RM,
  KOMISJA_PRAWNICZA,
  POTWIERDZENIE_PROJEKTU_PRZEZ_STALY_KOMITET_RM,
  RADA_MINISTROW,
  NOTYFIKACJA,
  PROJEKT_WPLYNAL_DO_SEJMU,
  SKIEROWANO_DO_I_CZYTANIA_NA_POSIEDZENIU_SEJMU,
  SKIEROWANO_DO_I_CZYTANIA_W_KOMISJACH,
  CZYTANIE_I_NA_POSIEDZENIU_SEJMU,
  CZYTANIE_II_NA_POSIEDZENIU_SEJMU,
  CZYTANIE_III_NA_POSIEDZENIU_SEJMU,
  I_CZYTANIE_W_KOMISJACH,
  PRACA_W_KOMISJACH_PO_CZYTANIU,
  SPRAWOZDANIE_PODKOMISJI,
  SPRAWOZDANIE_KOMISJI,
  GLOSOWANIE,
  STANOWISKO_SENATU,
  PRACA_W_KOMISJACH_NAD_STANOWISKIEM_SENATU,
  ROZPATRYWANIE_STANOWISKA_SENATU_NA_FORUM_SEJMU,
  USTAWE_PRZEKAZANO_PREZYDENTOWI_DO_PODPISU,
  PREZYDENT_SKIEROWAL_DO_TK,
  WYROK_TK,
  WNIOSEK_PREZYDENTA_VETO,
  WNIOSEK_PREZYDENTA_O_USUNIECIE_NIEZGODNOSCI,
  ROZPATRYWANIE_WNIOSKU_PREZYDENTA,
  ROZPATRYWANIE_SPRAWOZDANIA_KOMISJI_W_SPRAWIE_USUNIECIA_NIEZGODNOSCI,
  PODPISANIE_USTAWY_PRZEZ_PREZYDENTA,
  OGLOSZENIE_USTAWY,
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
  ZAMOWIENIA_PUBLICZNE = "zamówienia publiczne",
}

export enum Applicant {
  RZAD = "Rząd",
  POSLOWIE = "Posłowie",
  SENAT = "Senat",
  PREZYDENT = "Prezydent",
  OBYWATELE = "Obywatele",
}

export interface ILegislationStep {
  _id?: string;
  projectId?: string;
  type: LegislativeProcessStep;
  isActive: boolean;
  isBlocked?: boolean;
  isOmitted?: boolean;
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

// [

//   {
//     id: LegislativeProcessStep.ZGLOSZENIA_LOBBINGOWE,
//     name: "Zgłoszenia lobbingowe",
//     place: StepPlace.PRE_SEJM,
//     description: "Zgłoszenie przez grupy posłów zamiaru wniesienia projektu ustawy.",
//   },
//   {
//     id: LegislativeProcessStep.UZGODNIENIA,
//     name: "Uzgodnienia",
//     place: StepPlace.PRE_SEJM,
//     description: "Uzgodnienia projektu ustawy z odpowiednimi organami i instytucjami.",
//   },
//   {
//     id: LegislativeProcessStep.KONSULTACJE_PUBLICZNE,
//     name: "Konsultacje publiczne",
//     place: StepPlace.PRE_SEJM,
//     description: "Prowadzenie konsultacji publicznych dotyczących projektu ustawy.",
//   },
//   {
//     id: LegislativeProcessStep.OPINIOWANIE,
//     name: "Opiniowanie",
//     place: StepPlace.PRE_SEJM,
//     description: "Opiniowanie projektu przez właściwe organy.",
//   },
//   {
//     id: LegislativeProcessStep.KOMITET_RM_DS_CYFRYZACJI,
//     name: "Komitet Rady Ministrów do Spraw Cyfryzacji",
//     place: StepPlace.PRE_SEJM,
//     description: "Rozpatrzenie projektu przez Komitet Rady Ministrów do Spraw Cyfryzacji.",
//   },
//   {
//     id: LegislativeProcessStep.KOMITET_DS_EUROPEJSKICH,
//     name: "Komitet do Spraw Europejskich",
//     place: StepPlace.PRE_SEJM,
//     description: "Rozpatrzenie projektu przez Komitet do Spraw Europejskich.",
//   },
//   {
//     id: LegislativeProcessStep.KOMITET_SPOLCZNY_RM,
//     name: "Komitet Społeczny Rady Ministrów",
//     place: StepPlace.PRE_SEJM,
//     description: "Rozpatrzenie projektu przez Komitet Społeczny Rady Ministrów.",
//   },
//   {
//     id: LegislativeProcessStep.KOMITET_EKONOMICZNY_RM,
//     name: "Komitet Ekonomiczny Rady Ministrów",
//     place: StepPlace.PRE_SEJM,
//     description: "Rozpatrzenie projektu przez Komitet Ekonomiczny Rady Ministrów.",
//   },
//   {
//     id: LegislativeProcessStep.STALY_KOMITET_RM,
//     name: "Stały Komitet Rady Ministrów",
//     place: StepPlace.PRE_SEJM,
//     description: "Rozpatrzenie projektu przez Stały Komitet Rady Ministrów.",
//   },
//   {
//     id: LegislativeProcessStep.KOMISJA_PRAWNICZA,
//     name: "Komisja Prawnicza",
//     place: StepPlace.PRE_SEJM,
//     description: "Opiniowanie projektu przez Komisję Prawniczą.",
//   },
//   {
//     id: LegislativeProcessStep.POTWIERDZENIE_PROJEKTU_PRZEZ_STALY_KOMITET_RM,
//     name: "Potwierdzenie projektu przez Stały Komitet Rady Ministrów",
//     place: StepPlace.PRE_SEJM,
//     description: "Potwierdzenie projektu ustawy przez Stały Komitet Rady Ministrów.",
//   },
//   {
//     id: LegislativeProcessStep.RADA_MINISTROW,
//     name: "Rada Ministrów",
//     place: StepPlace.PRE_SEJM,
//     description: "Uchwała Rady Ministrów w sprawie projektu ustawy.",
//   },
//   {
//     id: LegislativeProcessStep.NOTYFIKACJA,
//     name: "Notyfikacja",
//     place: StepPlace.PRE_SEJM,
//     description: "Notyfikacja projektu w przypadku przepisów technicznych.",
//   },
//   {
//     id: LegislativeProcessStep.PROJEKT_WPLYNAL_DO_SEJMU,
//     name: "Projekt wpłynął do Sejmu",
//     place: StepPlace.SEJM,
//     description: "Wpłynięcie projektu ustawy do Sejmu.",
//   },
//   {
//     id: LegislativeProcessStep.SKIEROWANO_DO_I_CZYTANIA_NA_POSIEDZENIU_SEJMU,
//     name: "Skierowano do I czytania na posiedzeniu Sejmu",
//     place: StepPlace.SEJM,
//     description: "Skierowanie projektu do I czytania na posiedzeniu plenarnym Sejmu.",
//   },
//   {
//     id: LegislativeProcessStep.SKIEROWANO_DO_I_CZYTANIA_W_KOMISJACH,
//     name: "Skierowano do I czytania w komisjach",
//     place: StepPlace.SEJM,
//     description: "Skierowanie projektu do I czytania w komisjach sejmowych.",
//   },
//   {
//     id: LegislativeProcessStep.CZYTANIE_I_NA_POSIEDZENIU_SEJMU,
//     name: "I czytanie na posiedzeniu Sejmu",
//     place: StepPlace.SEJM,
//     description: "I czytanie projektu na posiedzeniu plenarnym Sejmu.",
//   },
//   {
//     id: LegislativeProcessStep.CZYTANIE_II_NA_POSIEDZENIU_SEJMU,
//     name: "II czytanie na posiedzeniu Sejmu",
//     place: StepPlace.SEJM,
//     description: "II czytanie projektu na posiedzeniu plenarnym Sejmu.",
//   },
//   {
//     id: LegislativeProcessStep.CZYTANIE_III_NA_POSIEDZENIU_SEJMU,
//     name: "III czytanie na posiedzeniu Sejmu",
//     place: StepPlace.SEJM,
//     description: "III czytanie projektu na posiedzeniu plenarnym Sejmu.",
//   },
//   {
//     id: LegislativeProcessStep.I_CZYTANIE_W_KOMISJACH,
//     name: "I czytanie w komisjach",
//     place: StepPlace.SEJM,
//     description: "I czytanie projektu w komisjach sejmowych.",
//   },
//   {
//     id: LegislativeProcessStep.PRACA_W_KOMISJACH_PO_CZYTANIU,
//     name: "Praca w komisjach po czytaniu",
//     place: StepPlace.SEJM,
//     description: "Praca nad projektem w komisjach sejmowych.",
//   },
//   {
//     id: LegislativeProcessStep.SPRAWOZDANIE_PODKOMISJI,
//     name: "Sprawozdanie podkomisji",
//     place: StepPlace.SEJM,
//     description: "Sprawozdanie podkomisji sejmowej dotyczące projektu.",
//   },
//   {
//     id: LegislativeProcessStep.SPRAWOZDANIE_KOMISJI,
//     name: "Sprawozdanie komisji",
//     place: StepPlace.SEJM,
//     description: "Sprawozdanie komisji sejmowej dotyczące projektu.",
//   },
//   {
//     id: LegislativeProcessStep.GLOSOWANIE,
//     name: "Głosowanie",
//     place: StepPlace.SEJM,
//     description: "Głosowanie nad projektem w Sejmie.",
//   },
//   {
//     id: LegislativeProcessStep.STANOWISKO_SENATU,
//     name: "Stanowisko Senatu",
//     place: StepPlace.SENAT,
//     description: "Stanowisko Senatu w sprawie uchwalonych zmian.",
//   },
//   {
//     id: LegislativeProcessStep.PRACA_W_KOMISJACH_NAD_STANOWISKIEM_SENATU,
//     name: "Praca w komisjach nad stanowiskiem Senatu",
//     place: StepPlace.SEJM,
//     description: "Praca komisji sejmowych nad stanowiskiem Senatu.",
//   },
//   {
//     id: LegislativeProcessStep.ROZPATRYWANIE_STANOWISKA_SENATU_NA_FORUM_SEJMU,
//     name: "Rozpatrywanie stanowiska Senatu na forum Sejmu",
//     place: StepPlace.SEJM,
//     description: "Rozpatrywanie stanowiska Senatu na posiedzeniu plenarnym Sejmu.",
//   },
//   {
//     id: LegislativeProcessStep.USTAWE_PRZEKAZANO_PREZYDENTOWI_DO_PODPISU,
//     name: "Ustawę przekazano Prezydentowi do podpisu",
//     place: StepPlace.PREZYDENT,
//     description: "Przekazanie uchwalnej ustawy Prezydentowi RP do podpisu.",
//   },
//   {
//     id: LegislativeProcessStep.PREZYDENT_SKIEROWAL_DO_TK,
//     name: "Prezydent skierował do TK",
//     place: StepPlace.PREZYDENT,
//     description: "Skierowanie ustawy przez Prezydenta do Trybunału Konstytucyjnego.",
//   },
//   {
//     id: LegislativeProcessStep.WYROK_TK,
//     name: "Wyrok TK",
//     place: StepPlace.PREZYDENT,
//     description: "Wydanie wyroku przez Trybunał Konstytucyjny.",
//   },
//   {
//     id: LegislativeProcessStep.WNIOSEK_PREZYDENTA_VETO,
//     name: "Wniosek Prezydenta - VETO",
//     place: StepPlace.PREZYDENT,
//     description: "Złożenie sprzeciwu przez Prezydenta (VETO).",
//   },
//   {
//     id: LegislativeProcessStep.WNIOSEK_PREZYDENTA_O_USUNIECIE_NIEZGODNOSCI,
//     name: "Wniosek Prezydenta o usunięcie niezgodności",
//     place: StepPlace.PREZYDENT,
//     description: "Złożenie wniosku przez Prezydenta o usunięcie niezgodności.",
//   },
//   {
//     id: LegislativeProcessStep.ROZPATRYWANIE_WNIOSKU_PREZYDENTA,
//     name: "Rozpatrywanie wniosku Prezydenta",
//     place: StepPlace.SEJM,
//     description: "Rozpatrywanie wniosku Prezydenta w Sejmie.",
//   },
//   {
//     id: LegislativeProcessStep.ROZPATRYWANIE_SPRAWOZDANIA_KOMISJI_W_SPRAWIE_USUNIECIA_NIEZGODNOSCI,
//     name: "Rozpatrywanie sprawozdania komisji w sprawie usunięcia niezgodności",
//     place: StepPlace.SEJM,
//     description: "Rozpatrywanie sprawozdania komisji dotyczącego usunięcia niezgodności.",
//   },
//   {
//     id: LegislativeProcessStep.PODPISANIE_USTAWY_PRZEZ_PREZYDENTA,
//     name: "Podpisanie ustawy przez Prezydenta",
//     place: StepPlace.PREZYDENT,
//     description: "Podpisanie ustawy przez Prezydenta RP.",
//   },
//   {
//     id: LegislativeProcessStep.OGLOSZENIE_USTAWY,
//     name: "Ogłoszenie ustawy",
//     place: StepPlace.UKONCZONE,
//     description: "Ogłoszenie ustawy w Dzienniku Ustaw.",
//   },
// ];
