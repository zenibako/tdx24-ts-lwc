import { TranslationPresenter } from '../TranslationPresenter';
import { TranslateTextUseCase } from '../../../domain/use-cases/TranslateTextUseCase';
import { mock } from 'jest-mock-extended';

const mockUseCase = mock<TranslateTextUseCase>();

describe('TranslationPresenter', () => {
    it('should translate text into French', async () => {
        const expectedTranslation = 'Bonjour';
        mockUseCase.execute.mockResolvedValue(expectedTranslation);

        const response = await new TranslationPresenter(mockUseCase).translate('Hello').intoFrench();
        expect(response).toBe(expectedTranslation);
    });
});