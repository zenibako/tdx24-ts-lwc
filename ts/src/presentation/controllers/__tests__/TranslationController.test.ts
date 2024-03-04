import { TranslationController } from '../TranslationController';
import { GetFrenchTranslationUseCase } from '../../../domain/use-cases/GetFrenchTranslationUseCase';
import { Translation } from '../../../domain/entities/Translation';

describe('TranslationController', () => {
    const useCaseSpy = jest.spyOn(GetFrenchTranslationUseCase.prototype, 'execute');

    it('should translate text into French', async () => {
        const expectedTranslation = new Translation('Hello', 'Bonjour', 'fr');
        useCaseSpy.mockResolvedValue(expectedTranslation);

        const response = await TranslationController.translateIntoFrench('Hello');
        expect(response).toBe(expectedTranslation);
    });
});