// manessingercomment: Custom Elements Define Library, ES Module/ES5 Target
import { defineCustomElement } from './manessingercomment.core.js';
import {
  ManessingerComment
} from './manessingercomment.components.js';

export function defineCustomElements(window, opts) {
  defineCustomElement(window, [
    ManessingerComment
  ], opts);
}