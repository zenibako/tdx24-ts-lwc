import { ITranslationRepository } from "../abstractions/ITranslationRepository";

export class TranslateTextUseCase {
    private readonly translations: ITranslationRepository;

    constructor(translationRepository: ITranslationRepository) {
        this.translations = translationRepository;
    }

    async execute(text: string) {
        const translation = await this.translations.get(text);
        return translation.getTranslatedText()
    }
}
