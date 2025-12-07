import mongoose, { Schema, Document } from "mongoose";
import { LegislativeProcessStep, StepPlace } from "./LegislationInterfaces";

export interface ILegislationStepsInfo {
  id: LegislativeProcessStep;
  name: string;
  place: StepPlace;
  description: string;
}

const legislationStepsInfoSchema = new Schema<ILegislationStepsInfo>(
  {
    id: { type: String, enum: Object.values(LegislativeProcessStep), required: true },
    name: { type: String, required: true },
    place: { type: String, enum: Object.values(StepPlace), required: true, default: StepPlace.SEJM },
    description: { type: String, required: true },
  }
);

export const LegislationStepsInfo = mongoose.model<ILegislationStepsInfo>(
  "LegislationStepsInfo",
  legislationStepsInfoSchema
);

/**
 * LegislationStepsInfoModel - Comprehensive model for managing legislative process steps
 * Provides all access methods for querying, filtering, and navigating through the legislative process
 */
export class LegislationStepsInfoModel {
  private stepsData: ILegislationStepsInfo[] = [
    {
      id: LegislativeProcessStep.ZGLOSZENIA_LOBBINGOWE,
      name: "Zgłoszenia lobbingowe",
      place: StepPlace.PRE_SEJM,
      description: "Zgłoszenie przez grupy posłów zamiaru wniesienia projektu ustawy.",
    },
    {
      id: LegislativeProcessStep.UZGODNIENIA,
      name: "Uzgodnienia",
      place: StepPlace.PRE_SEJM,
      description: "Uzgodnienia projektu ustawy z odpowiednimi organami i instytucjami.",
    },
    {
      id: LegislativeProcessStep.KONSULTACJE_PUBLICZNE,
      name: "Konsultacje publiczne",
      place: StepPlace.PRE_SEJM,
      description: "Prowadzenie konsultacji publicznych dotyczących projektu ustawy.",
    },
    {
      id: LegislativeProcessStep.OPINIOWANIE,
      name: "Opiniowanie",
      place: StepPlace.PRE_SEJM,
      description: "Opiniowanie projektu przez właściwe organy.",
    },
    {
      id: LegislativeProcessStep.KOMITET_RM_DS_CYFRYZACJI,
      name: "Komitet Rady Ministrów do Spraw Cyfryzacji",
      place: StepPlace.PRE_SEJM,
      description: "Rozpatrzenie projektu przez Komitet Rady Ministrów do Spraw Cyfryzacji.",
    },
    {
      id: LegislativeProcessStep.KOMITET_DS_EUROPEJSKICH,
      name: "Komitet do Spraw Europejskich",
      place: StepPlace.PRE_SEJM,
      description: "Rozpatrzenie projektu przez Komitet do Spraw Europejskich.",
    },
    {
      id: LegislativeProcessStep.KOMITET_SPOLCZNY_RM,
      name: "Komitet Społeczny Rady Ministrów",
      place: StepPlace.PRE_SEJM,
      description: "Rozpatrzenie projektu przez Komitet Społeczny Rady Ministrów.",
    },
    {
      id: LegislativeProcessStep.KOMITET_EKONOMICZNY_RM,
      name: "Komitet Ekonomiczny Rady Ministrów",
      place: StepPlace.PRE_SEJM,
      description: "Rozpatrzenie projektu przez Komitet Ekonomiczny Rady Ministrów.",
    },
    {
      id: LegislativeProcessStep.STALY_KOMITET_RM,
      name: "Stały Komitet Rady Ministrów",
      place: StepPlace.PRE_SEJM,
      description: "Rozpatrzenie projektu przez Stały Komitet Rady Ministrów.",
    },
    {
      id: LegislativeProcessStep.KOMISJA_PRAWNICZA,
      name: "Komisja Prawnicza",
      place: StepPlace.PRE_SEJM,
      description: "Opiniowanie projektu przez Komisję Prawniczą.",
    },
    {
      id: LegislativeProcessStep.POTWIERDZENIE_PROJEKTU_PRZEZ_STALY_KOMITET_RM,
      name: "Potwierdzenie projektu przez Stały Komitet Rady Ministrów",
      place: StepPlace.PRE_SEJM,
      description: "Potwierdzenie projektu ustawy przez Stały Komitet Rady Ministrów.",
    },
    {
      id: LegislativeProcessStep.RADA_MINISTROW,
      name: "Rada Ministrów",
      place: StepPlace.PRE_SEJM,
      description: "Uchwała Rady Ministrów w sprawie projektu ustawy.",
    },
    {
      id: LegislativeProcessStep.NOTYFIKACJA,
      name: "Notyfikacja",
      place: StepPlace.PRE_SEJM,
      description: "Notyfikacja projektu w przypadku przepisów technicznych.",
    },
    {
      id: LegislativeProcessStep.PROJEKT_WPLYNAL_DO_SEJMU,
      name: "Projekt wpłynął do Sejmu",
      place: StepPlace.SEJM,
      description: "Wpłynięcie projektu ustawy do Sejmu.",
    },
    {
      id: LegislativeProcessStep.SKIEROWANO_DO_I_CZYTANIA_NA_POSIEDZENIU_SEJMU,
      name: "Skierowano do I czytania na posiedzeniu Sejmu",
      place: StepPlace.SEJM,
      description: "Skierowanie projektu do I czytania na posiedzeniu plenarnym Sejmu.",
    },
    {
      id: LegislativeProcessStep.SKIEROWANO_DO_I_CZYTANIA_W_KOMISJACH,
      name: "Skierowano do I czytania w komisjach",
      place: StepPlace.SEJM,
      description: "Skierowanie projektu do I czytania w komisjach sejmowych.",
    },
    {
      id: LegislativeProcessStep.CZYTANIE_I_NA_POSIEDZENIU_SEJMU,
      name: "I czytanie na posiedzeniu Sejmu",
      place: StepPlace.SEJM,
      description: "I czytanie projektu na posiedzeniu plenarnym Sejmu.",
    },
    {
      id: LegislativeProcessStep.CZYTANIE_II_NA_POSIEDZENIU_SEJMU,
      name: "II czytanie na posiedzeniu Sejmu",
      place: StepPlace.SEJM,
      description: "II czytanie projektu na posiedzeniu plenarnym Sejmu.",
    },
    {
      id: LegislativeProcessStep.CZYTANIE_III_NA_POSIEDZENIU_SEJMU,
      name: "III czytanie na posiedzeniu Sejmu",
      place: StepPlace.SEJM,
      description: "III czytanie projektu na posiedzeniu plenarnym Sejmu.",
    },
    {
      id: LegislativeProcessStep.I_CZYTANIE_W_KOMISJACH,
      name: "I czytanie w komisjach",
      place: StepPlace.SEJM,
      description: "I czytanie projektu w komisjach sejmowych.",
    },
    {
      id: LegislativeProcessStep.PRACA_W_KOMISJACH_PO_CZYTANIU,
      name: "Praca w komisjach po czytaniu",
      place: StepPlace.SEJM,
      description: "Praca nad projektem w komisjach sejmowych.",
    },
    {
      id: LegislativeProcessStep.SPRAWOZDANIE_PODKOMISJI,
      name: "Sprawozdanie podkomisji",
      place: StepPlace.SEJM,
      description: "Sprawozdanie podkomisji sejmowej dotyczące projektu.",
    },
    {
      id: LegislativeProcessStep.SPRAWOZDANIE_KOMISJI,
      name: "Sprawozdanie komisji",
      place: StepPlace.SEJM,
      description: "Sprawozdanie komisji sejmowej dotyczące projektu.",
    },
    {
      id: LegislativeProcessStep.GLOSOWANIE,
      name: "Głosowanie",
      place: StepPlace.SEJM,
      description: "Głosowanie nad projektem w Sejmie.",
    },
    {
      id: LegislativeProcessStep.STANOWISKO_SENATU,
      name: "Stanowisko Senatu",
      place: StepPlace.SENAT,
      description: "Stanowisko Senatu w sprawie uchwalonych zmian.",
    },
    {
      id: LegislativeProcessStep.PRACA_W_KOMISJACH_NAD_STANOWISKIEM_SENATU,
      name: "Praca w komisjach nad stanowiskiem Senatu",
      place: StepPlace.SEJM,
      description: "Praca komisji sejmowych nad stanowiskiem Senatu.",
    },
    {
      id: LegislativeProcessStep.ROZPATRYWANIE_STANOWISKA_SENATU_NA_FORUM_SEJMU,
      name: "Rozpatrywanie stanowiska Senatu na forum Sejmu",
      place: StepPlace.SEJM,
      description: "Rozpatrywanie stanowiska Senatu na posiedzeniu plenarnym Sejmu.",
    },
    {
      id: LegislativeProcessStep.USTAWE_PRZEKAZANO_PREZYDENTOWI_DO_PODPISU,
      name: "Ustawę przekazano Prezydentowi do podpisu",
      place: StepPlace.PREZYDENT,
      description: "Przekazanie uchwalnej ustawy Prezydentowi RP do podpisu.",
    },
    {
      id: LegislativeProcessStep.PREZYDENT_SKIEROWAL_DO_TK,
      name: "Prezydent skierował do TK",
      place: StepPlace.PREZYDENT,
      description: "Skierowanie ustawy przez Prezydenta do Trybunału Konstytucyjnego.",
    },
    {
      id: LegislativeProcessStep.WYROK_TK,
      name: "Wyrok TK",
      place: StepPlace.PREZYDENT,
      description: "Wydanie wyroku przez Trybunał Konstytucyjny.",
    },
    {
      id: LegislativeProcessStep.WNIOSEK_PREZYDENTA_VETO,
      name: "Wniosek Prezydenta - VETO",
      place: StepPlace.PREZYDENT,
      description: "Złożenie sprzeciwu przez Prezydenta (VETO).",
    },
    {
      id: LegislativeProcessStep.WNIOSEK_PREZYDENTA_O_USUNIECIE_NIEZGODNOSCI,
      name: "Wniosek Prezydenta o usunięcie niezgodności",
      place: StepPlace.PREZYDENT,
      description: "Złożenie wniosku przez Prezydenta o usunięcie niezgodności.",
    },
    {
      id: LegislativeProcessStep.ROZPATRYWANIE_WNIOSKU_PREZYDENTA,
      name: "Rozpatrywanie wniosku Prezydenta",
      place: StepPlace.SEJM,
      description: "Rozpatrywanie wniosku Prezydenta w Sejmie.",
    },
    {
      id: LegislativeProcessStep.ROZPATRYWANIE_SPRAWOZDANIA_KOMISJI_W_SPRAWIE_USUNIECIA_NIEZGODNOSCI,
      name: "Rozpatrywanie sprawozdania komisji w sprawie usunięcia niezgodności",
      place: StepPlace.SEJM,
      description: "Rozpatrywanie sprawozdania komisji dotyczącego usunięcia niezgodności.",
    },
    {
      id: LegislativeProcessStep.PODPISANIE_USTAWY_PRZEZ_PREZYDENTA,
      name: "Podpisanie ustawy przez Prezydenta",
      place: StepPlace.PREZYDENT,
      description: "Podpisanie ustawy przez Prezydenta RP.",
    },
    {
      id: LegislativeProcessStep.OGLOSZENIE_USTAWY,
      name: "Ogłoszenie ustawy",
      place: StepPlace.UKONCZONE,
      description: "Ogłoszenie ustawy w Dzienniku Ustaw.",
    },
  ];

  /**
   * Get all legislative steps
   */
  public getAllSteps(): ILegislationStepsInfo[] {
    return [...this.stepsData];
  }

  /**
   * Get a specific step by ID
   */
  public getStepById(id: LegislativeProcessStep): ILegislationStepsInfo | undefined {
    return this.stepsData.find((step) => step.id === id);
  }

  /**
   * Get steps by place
   */
  public getStepsByPlace(place: StepPlace): ILegislationStepsInfo[] {
    return this.stepsData.filter((step) => step.place === place);
  }

  /**
   * Get step by name
   */
  public getStepByName(name: string): ILegislationStepsInfo | undefined {
    return this.stepsData.find((step) => step.name === name);
  }

  /**
   * Check if step exists
   */
  public stepExists(id: LegislativeProcessStep): boolean {
    return this.stepsData.some((step) => step.id === id);
  }

  /**
   * Get all steps for PRE_SEJM phase
   */
  public getPreSejmSteps(): ILegislationStepsInfo[] {
    return this.getStepsByPlace(StepPlace.PRE_SEJM);
  }

  /**
   * Get all steps for SEJM phase
   */
  public getSejmSteps(): ILegislationStepsInfo[] {
    return this.getStepsByPlace(StepPlace.SEJM);
  }

  /**
   * Get all steps for SENAT phase
   */
  public getSenatSteps(): ILegislationStepsInfo[] {
    return this.getStepsByPlace(StepPlace.SENAT);
  }

  /**
   * Get all steps for PREZYDENT phase
   */
  public getPrezydentSteps(): ILegislationStepsInfo[] {
    return this.getStepsByPlace(StepPlace.PREZYDENT);
  }

  /**
   * Get all steps for UKONCZONE phase
   */
  public getUkonczone(): ILegislationStepsInfo[] {
    return this.getStepsByPlace(StepPlace.UKONCZONE);
  }

  /**
   * Get step index in the process
   */
  public getStepIndex(id: LegislativeProcessStep): number {
    return this.stepsData.findIndex((step) => step.id === id);
  }

  /**
   * Get next step in the process
   */
  public getNextStep(currentStepId: LegislativeProcessStep): ILegislationStepsInfo | undefined {
    const currentIndex = this.getStepIndex(currentStepId);
    if (currentIndex !== -1 && currentIndex < this.stepsData.length - 1) {
      return this.stepsData[currentIndex + 1];
    }
    return undefined;
  }

  /**
   * Get previous step in the process
   */
  public getPreviousStep(currentStepId: LegislativeProcessStep): ILegislationStepsInfo | undefined {
    const currentIndex = this.getStepIndex(currentStepId);
    if (currentIndex > 0) {
      return this.stepsData[currentIndex - 1];
    }
    return undefined;
  }

  /**
   * Get total number of steps
   */
  public getTotalSteps(): number {
    return this.stepsData.length;
  }

  /**
   * Get steps between two steps (inclusive)
   */
  public getStepsBetween(
    startId: LegislativeProcessStep,
    endId: LegislativeProcessStep
  ): ILegislationStepsInfo[] {
    const startIndex = this.getStepIndex(startId);
    const endIndex = this.getStepIndex(endId);

    if (startIndex === -1 || endIndex === -1) {
      return [];
    }

    const [min, max] = startIndex <= endIndex ? [startIndex, endIndex] : [endIndex, startIndex];
    return this.stepsData.slice(min, max + 1);
  }

  /**
   * Get step sequence as array of step IDs
   */
  public getStepSequence(): LegislativeProcessStep[] {
    return this.stepsData.map((step) => step.id);
  }

  /**
   * Search steps by keyword in name or description
   */
  public searchSteps(keyword: string): ILegislationStepsInfo[] {
    const lowerKeyword = keyword.toLowerCase();
    return this.stepsData.filter(
      (step) =>
        step.name.toLowerCase().includes(lowerKeyword) ||
        step.description.toLowerCase().includes(lowerKeyword)
    );
  }

  /**
   * Get step count by phase
   */
  public getStepCountByPhase(): { [key in StepPlace]: number } {
    return {
      [StepPlace.PRE_SEJM]: this.getPreSejmSteps().length,
      [StepPlace.SEJM]: this.getSejmSteps().length,
      [StepPlace.SENAT]: this.getSenatSteps().length,
      [StepPlace.PREZYDENT]: this.getPrezydentSteps().length,
      [StepPlace.UKONCZONE]: this.getUkonczone().length,
    };
  }

  /**
   * Check if a step is before another step in the process
   */
  public isStepBefore(stepId1: LegislativeProcessStep, stepId2: LegislativeProcessStep): boolean {
    return this.getStepIndex(stepId1) < this.getStepIndex(stepId2);
  }

  /**
   * Check if a step is after another step in the process
   */
  public isStepAfter(stepId1: LegislativeProcessStep, stepId2: LegislativeProcessStep): boolean {
    return this.getStepIndex(stepId1) > this.getStepIndex(stepId2);
  }

  /**
   * Get remaining steps from a given step
   */
  public getRemainingSteps(fromStepId: LegislativeProcessStep): ILegislationStepsInfo[] {
    const fromIndex = this.getStepIndex(fromStepId);
    if (fromIndex === -1) {
      return [];
    }
    return this.stepsData.slice(fromIndex + 1);
  }

  /**
   * Get completed steps up to a given step
   */
  public getCompletedSteps(toStepId: LegislativeProcessStep): ILegislationStepsInfo[] {
    const toIndex = this.getStepIndex(toStepId);
    if (toIndex === -1) {
      return [];
    }
    return this.stepsData.slice(0, toIndex + 1);
  }
}