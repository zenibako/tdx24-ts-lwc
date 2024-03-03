import { mock, mockReset } from 'jest-mock-extended';
import { SalesforceDataSource } from '../../../data/data-sources/SalesforceDataSource';
import { TranslationController } from '../TranslationController';
import { GetFrenchTranslationUseCase } from '../../../domain/use-cases/GetFrenchTranslationUseCase';
import { Translation } from '../../../domain/entities/Translation';

describe('TranslationController', () => {
    const mockSalesforceData = mock<SalesforceDataSource>();
    const useCaseSpy = jest.spyOn(GetFrenchTranslationUseCase.prototype, 'execute');

    const projectId = 'projectId';
    const apiKey = 'apiKey';


    beforeEach(() => {
        mockReset(mockSalesforceData);
    });

    it('should translate text into French', async () => {
        mockSalesforceData.getKeys.mockResolvedValue({ projectId, apiKey });
        useCaseSpy.mockResolvedValue(new Translation('Hello', 'Bonjour', 'fr'));

        const response = await TranslationController.translateIntoFrench('Hello', mockSalesforceData);
        expect(response).toBe('Bonjour');
    });
});