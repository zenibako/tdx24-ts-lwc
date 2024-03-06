import { ITranslationRepository } from "../abstractions/ITranslationRepository";

export class GetFrenchTranslationUseCase {
    private readonly translations: ITranslationRepository;

    constructor(translationRepository: ITranslationRepository) {
        this.translations = translationRepository;
    }

    async execute(text: string) {
        return this.translations.get(text, "fr");
    }
}
