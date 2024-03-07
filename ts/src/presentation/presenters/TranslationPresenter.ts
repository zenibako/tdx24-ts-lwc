import { TranslateTextUseCase } from "../../domain/use-cases/TranslateTextUseCase";

export class TranslationPresenter {
    private readonly translateFrenchUseCase: TranslateTextUseCase;

    constructor(translateFrenchUseCase: TranslateTextUseCase) {
        this.translateFrenchUseCase = translateFrenchUseCase;
    }

    private text?: string;

    public translate(text: string) {
        this.text = text;
        return this;
    }

    public async intoFrench(): Promise<string> {
        if (!this.text) {
            throw new Error('No text to translate');
        }

        return this.translateFrenchUseCase.execute(this.text);
    }
}
