import { TranslationController } from "../controllers/TranslationController";
type SalesforceUi = {
  tsLib: {
    [K in keyof typeof controllers]: typeof controllers[K]
  }
} & Window

declare let window: SalesforceUi

const controllers = {
  TranslationController
};

export function setTsLibInUi() {
  (window as SalesforceUi).tsLib = controllers;
}