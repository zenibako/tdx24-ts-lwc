import { GoogleDataSource } from "../../data/data-sources/GoogleDataSource";
import { SalesforceDataSource } from "../../data/data-sources/SalesforceDataSource";
import { FrenchTranslationRepository } from "../../data/repositories/FrenchTranslationRepository";
import { GetFrenchTranslationUseCase } from "../../domain/use-cases/GetFrenchTranslationUseCase";

export class TranslationController {
    static async translateIntoFrench(text: string, salesforceData: SalesforceDataSource) {
        const { projectId, apiKey } = await salesforceData.getKeys();
        const googleData = new GoogleDataSource(projectId, apiKey);
        const translations = new FrenchTranslationRepository(googleData);
        const translation = await new GetFrenchTranslationUseCase(translations).execute(text);
        return translation;
    }
}
