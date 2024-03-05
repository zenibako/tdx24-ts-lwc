export class Translation {
    private readonly text: string;
    private readonly translation: string;
    private readonly language: string;

    constructor(text: string, translation: string, language: string) {
        this.text = text;
        this.translation = translation;
        this.language = language;
    }


    getSourceText() {
        return this.text;
    }

    getTranslatedText() {
        return this.translation;
    }

    getLanguage() {
        return this.language
    }
}
