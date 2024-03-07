import { mock } from 'jest-mock-extended';
import { ITranslationRepository } from '../../abstractions/ITranslationRepository';
import { Translation } from '../../entities/Translation';
import { TranslateTextUseCase } from '../TranslateTextUseCase';

const mockTranslations = mock<ITranslationRepository>();

describe('TranslateTextUseCase', () => {
    it('should get a translation', async () => {
        const text = 'Hello';
        const expectedTranslation = 'Bonjour';
        const translation = new Translation(text, expectedTranslation, 'fr');
        mockTranslations.get.mockResolvedValue(translation);

        const useCase = new TranslateTextUseCase(mockTranslations);
        const response = await useCase.execute(text);
        expect(response).toBe(expectedTranslation);
    });
});
