import { mock } from 'jest-mock-extended';
import { FrenchTranslationRepository } from '../FrenchTranslationRepository';
import { IDataSource } from '../../../domain/abstractions/IDataSource';

describe('FrenchTranslationRepository', () => {
    const mockData = mock<IDataSource>();
    const repository = new FrenchTranslationRepository(mockData);

    it('should get a translation', async () => {
        const text = 'Hello';
        const translatedText = 'Bonjour';
        mockData.translate.mockResolvedValue(translatedText);

        const response = await repository.get(text);
        expect(response.getTranslatedText()).toBe(translatedText);
    });
});