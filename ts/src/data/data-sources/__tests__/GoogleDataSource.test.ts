import { GoogleDataSource } from '../GoogleDataSource';

const projectId = 'projectId';
const apiKey = 'apiKey';

const mockTranslate = jest.fn();
jest.mock('@google-cloud/translate/build/src/v2',
    () => {
        return {
            Translate: jest.fn().mockImplementation(() => {
                return {
                    translate: (text: string, target: string) => mockTranslate(text, target)
                }
            })
        }
    }
);

describe('GoogleDataSource', () => {
    const googleData = new GoogleDataSource(projectId, apiKey);

    it('should get a translation', async () => {
        const translatedText = 'Bonjour';
        mockTranslate.mockResolvedValue([translatedText]);
        
        const text = 'Hello';
        const language = 'fr';

        const response = await googleData.translate(text, language);
        expect(response).toBe(translatedText);
    });
});