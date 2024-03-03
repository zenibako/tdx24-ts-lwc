export class Translation {
    private readonly text: string;
    private readonly translation: string;
    private readonly target: string;

    constructor(text: string, translation: string, target: string) {
        this.text = text;
        this.translation = translation;
        this.target = target;
    }


    getSourceText() {
        return this.text;
    }

    getTranslatedText() {
        return this.translation;
    }

    getLanguage() {
        return this.target
    }
}
