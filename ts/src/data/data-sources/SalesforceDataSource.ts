type GetKeysResponse = {
    apiKey: string;
    projectKey: string;
}

export class SalesforceDataSource {
    public getKeys: () => Promise<GetKeysResponse>

    constructor(getKeys: () => Promise<GetKeysResponse>) {
        this.getKeys = getKeys;
    }
}