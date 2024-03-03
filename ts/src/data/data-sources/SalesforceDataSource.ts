type GetKeysResponse = {
    apiKey: string;
    projectId: string;
}

export class SalesforceDataSource {
    public readonly getKeys: () => Promise<GetKeysResponse>

    constructor(getKeys: () => Promise<GetKeysResponse>) {
        this.getKeys = getKeys;
    }
}