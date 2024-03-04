import translate from "google-translate-api-x"

export class GoogleDataSource {
    async translate(text: string, to: string) {
        const translation = await translate(text, { to });
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation.text}`);
        return translation.text;
    }
}
