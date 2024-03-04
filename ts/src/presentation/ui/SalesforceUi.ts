import { TranslationController } from "../controllers/TranslationController";
type SalesforceUi = {
  ts_lib: {
    [K in keyof typeof controllers]: typeof controllers[K]
  }
} & Window

declare let window: SalesforceUi

const controllers = {
  TranslationController
};

export function setTsLibInUi() {
  (window as SalesforceUi).ts_lib = controllers;
}