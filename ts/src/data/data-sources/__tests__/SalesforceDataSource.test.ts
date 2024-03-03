import { SalesforceDataSource } from "../SalesforceDataSource";

export { mock } from "jest-mock-extended";

describe('SalesforceDataSource', () => {
    const getKeys = jest.fn();

    it('should get keys', async () => {
        const salesforceData = new SalesforceDataSource(getKeys);
        expect(salesforceData.getKeys).toBe(getKeys);
    });
});