import { GoogleDataSource } from "../../data/data-sources/GoogleDataSource";
import { FrenchTranslationRepository } from "../../data/repositories/FrenchTranslationRepository";
import { TranslateTextUseCase } from "../../domain/use-cases/TranslateTextUseCase";
import { TranslationPresenter } from "../presenters/TranslationPresenter";

type SalesforceUi = { tsLib: TranslationPresenter } & Window

declare let window: SalesforceUi

export function setTsLibInUi() {
  const googleData = new GoogleDataSource();
  const frenchTranslations = new FrenchTranslationRepository(googleData);
  const translateTextUseCase = new TranslateTextUseCase(frenchTranslations);

  (window as SalesforceUi).tsLib = new TranslationPresenter(translateTextUseCase);
}