export interface IDataSource {
    translate(text: string, to: string): Promise<string>;
}
