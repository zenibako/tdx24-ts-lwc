import { GoogleDataSource } from "../../data/data-sources/GoogleDataSource";
import { FrenchTranslationRepository } from "../../data/repositories/FrenchTranslationRepository";
import { GetFrenchTranslationUseCase } from "../../domain/use-cases/GetFrenchTranslationUseCase";

export class TranslationController {
    static async translateIntoFrench(text: string) {
        const googleData = new GoogleDataSource();
        const translations = new FrenchTranslationRepository(googleData);
        const translation = await new GetFrenchTranslationUseCase(translations).execute(text);
        return translation;
    }
}
