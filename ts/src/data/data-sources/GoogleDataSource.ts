import translate from "translate";

export class GoogleDataSource {
    async translate(text: string, to: string) {
        const translation = await translate(text, to);
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
        return translation;
    }
}
