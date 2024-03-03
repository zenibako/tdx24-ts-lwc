import { mock } from 'jest-mock-extended';
import { ITranslationRepository } from '../../../data/abstractions/ITranslationRepository';
import { Translation } from '../../entities/Translation';
import { GetFrenchTranslationUseCase } from '../GetFrenchTranslationUseCase';

const mockTranslations = mock<ITranslationRepository>();

describe('GetFrenchTranslationUseCase', () => {
    it('should get a French translation', async () => {
        const text = 'Hello';
        const translation = new Translation(text, 'Bonjour', 'fr');
        mockTranslations.get.mockResolvedValue(translation);

        const useCase = new GetFrenchTranslationUseCase(mockTranslations);
        const response = await useCase.execute(text);
        expect(response).toBe(translation);
    });
});
