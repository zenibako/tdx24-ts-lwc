import { mock } from 'jest-mock-extended';
import { FrenchTranslationRepository } from '../FrenchTranslationRepository';
import { GoogleDataSource } from '../../data-sources/GoogleDataSource';

describe('FrenchTranslationRepository', () => {
    const mockGoogleData = mock<GoogleDataSource>();
    const repository = new FrenchTranslationRepository(mockGoogleData);

    it('should get a translation', async () => {
        const text = 'Hello';
        const translatedText = 'Bonjour';
        const language = 'fr';
        mockGoogleData.translate.mockResolvedValue(translatedText);

        const response = await repository.get(text, language);
        expect(response.getTranslatedText()).toBe(translatedText);
    });
});