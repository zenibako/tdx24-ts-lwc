import { Translation } from "../../domain/entities/Translation";
import { ITranslationRepository } from "../../domain/abstractions/ITranslationRepository";
import { GoogleDataSource } from "../data-sources/GoogleDataSource";

export class FrenchTranslationRepository implements ITranslationRepository {
    private readonly langCode = "fr";

    private readonly googleData: GoogleDataSource;

    constructor(googleData: GoogleDataSource) {
        this.googleData = googleData;
    }
    
    async get(text: string) {
        const translation = await this.googleData.translate(text, this.langCode);
        return new Translation(text, translation, this.langCode);
    }
}
