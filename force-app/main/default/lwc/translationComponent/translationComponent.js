import { LightningElement } from "lwc";
import getKeysFromController from "@salesforce/apex/TranslationController.getKeys";

export default class TranslationComponent extends LightningElement {
  async translate() {
    const keysResponse = await getKeysFromController();
    console.log(keysResponse);
  }
}
