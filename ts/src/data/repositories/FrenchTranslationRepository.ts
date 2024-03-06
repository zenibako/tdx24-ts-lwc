import { Translation } from "../../domain/entities/Translation";
import { ITranslationRepository } from "../../domain/abstractions/ITranslationRepository";
import { GoogleDataSource } from "../data-sources/GoogleDataSource";

export class FrenchTranslationRepository implements ITranslationRepository {
    private readonly googleData: GoogleDataSource;

    constructor(googleData: GoogleDataSource) {
        this.googleData = googleData;
    }
    
    async get(text: string, target: string) {
        const translation = await this.googleData.translate(text, target);
        return new Translation(text, translation, target);
    }
}
