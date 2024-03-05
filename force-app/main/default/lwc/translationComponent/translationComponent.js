import { LightningElement } from "lwc";
import tsLib from "@salesforce/resourceUrl/tsLib";
import { loadScript } from "lightning/platformResourceLoader";

export default class TranslationComponent extends LightningElement {
  controller;

  textToTranslate;
  translatedText;

  get hasNoInput() {
    return !this.textToTranslate;
  }

  async connectedCallback() {
    await loadScript(this, tsLib + "/ts_lib.js");
    this.controller = window.tsLib?.TranslationController;
  }

  handleTextChange(event) {
    this.textToTranslate = event.target.value;
  }

  async handleTranslate() {
    const { translateIntoFrench } = this.controller;
    this.translatedText = await translateIntoFrench(this.textToTranslate);
    console.log(this.translatedText);
  }
}
