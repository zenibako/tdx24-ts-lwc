import { Translate } from "@google-cloud/translate/build/src/v2";

export class GoogleDataSource {
    private readonly client: Translate;

    constructor(projectId: string, key: string) {
        this.client = new Translate({ projectId, key });
    }

    async translate(text: string, target: string) {
        const [translation] = await this.client.translate(text, target);
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
        return translation;
    }
}
