import { GoogleDataSource } from '../GoogleDataSource';

const mockTranslate = jest.fn();
jest.mock('google-translate-api-x',
    () => jest.fn().mockImplementation(
        (text: string, options: { to: string }) => mockTranslate(text, options)
    )
);

describe('GoogleDataSource', () => {
    const googleData = new GoogleDataSource();

    it('should get a translation', async () => {
        const translatedText = 'Bonjour';
        mockTranslate.mockResolvedValue({ text: translatedText });
        
        const text = 'Hello';
        const language = 'fr';

        const response = await googleData.translate(text, language);
        expect(response).toBe(translatedText);
    });
});