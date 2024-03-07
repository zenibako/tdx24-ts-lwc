import { Translation } from "../entities/Translation";

export interface ITranslationRepository {
    get(text: string): Promise<Translation>;
}
