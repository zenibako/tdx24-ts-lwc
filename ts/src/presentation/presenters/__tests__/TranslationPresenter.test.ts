import { TranslationPresenter } from '../TranslationPresenter';
import { TranslateTextUseCase } from '../../../domain/use-cases/TranslateTextUseCase';
import { mock } from 'jest-mock-extended';

const mockUseCase = mock<TranslateTextUseCase>();

describe('TranslationPresenter', () => {
    it('should translate text into French', async () => {
        const expectedTranslation = 'Bonjour';
        mockUseCase.execute.mockResolvedValue(expectedTranslation);

        const presenter = new TranslationPresenter(mockUseCase)
        const response = await presenter.translate('Hello').intoFrench();
        expect(response).toBe(expectedTranslation);
    });
});