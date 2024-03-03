import { Translation } from "../../domain/entities/Translation";

export interface ITranslationRepository {
    get(text: string, target: string): Promise<Translation>;
}
