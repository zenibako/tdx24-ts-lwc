import { Translation } from "../Translation";

describe('Translation', () => {
    it('should be tested', () => {
        const text = 'Hello';
        const translatedText = 'Bonjour';
        const language = 'fr';
        const translation = new Translation(text, translatedText, language);
        expect(translation.getSourceText()).toBe(text);
        expect(translation.getTranslatedText()).toBe(translatedText);
        expect(translation.getLanguage()).toBe(language);
    })
});