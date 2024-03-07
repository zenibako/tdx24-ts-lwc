import { GoogleDataSource } from '../GoogleDataSource';

const mockTranslate = jest.fn();
jest.mock('translate',
    () => jest.fn().mockImplementation(
        (text: string, to: string) => mockTranslate(text, to)
    )
);

describe('GoogleDataSource', () => {
    const googleData = new GoogleDataSource();

    it('should get a translation', async () => {
        const translatedText = 'Bonjour';
        mockTranslate.mockResolvedValue(translatedText);
        
        const text = 'Hello';
        const language = 'fr';

        const response = await googleData.translate(text, language);
        expect(response).toBe(translatedText);
    });
});