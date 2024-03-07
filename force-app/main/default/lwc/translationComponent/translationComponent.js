import { LightningElement } from "lwc";
import tsLib from "@salesforce/resourceUrl/tsLib";
import { loadScript } from "lightning/platformResourceLoader";

export default class TranslationComponent extends LightningElement {
  lib;

  textToTranslate;
  translatedText;

  get hasNoInput() {
    return !this.textToTranslate;
  }

  async connectedCallback() {
    await loadScript(this, tsLib + "/ts_lib.js");
    this.lib = window.tsLib;
  }

  handleTextChange(event) {
    this.textToTranslate = event.target.value;
  }

  async handleTranslate() {
    const translation = await this.lib
      .translate(this.textToTranslate)
      .intoFrench();
    this.translatedText = translation;
    console.log(this.translatedText);
  }
}
