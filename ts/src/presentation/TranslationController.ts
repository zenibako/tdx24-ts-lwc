import { GoogleDataSource } from "../data/data-sources/GoogleDataSource";
import { TranslationRepository } from "../data/repositories/TranslationRepository";
import { GetFrenchTranslationUseCase } from "../domain/use-cases/GetFrenchTranslationUseCase";

export class TranslationController {
    static async translateIntoFrench(text: string) {
        const googleData = new GoogleDataSource("my-project-id")
        const translations = new TranslationRepository(googleData);
        const translation = await new GetFrenchTranslationUseCase(translations).execute(text);
        return translation;
    }
}
