import './stencil.core';
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
/* tslint:disable */

import './stencil.core';




declare global {
  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}

  namespace StencilComponents {

    interface ManessingerComment {

    }
  }


    interface HTMLManessingerCommentElement extends StencilComponents.ManessingerComment, HTMLStencilElement {}

    var HTMLManessingerCommentElement: {
      prototype: HTMLManessingerCommentElement;
      new (): HTMLManessingerCommentElement;
    };
    

  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {
    'manessinger-comment': JSXElements.ManessingerCommentAttributes;
    }
  }

  namespace JSXElements {

    export interface ManessingerCommentAttributes extends HTMLAttributes {

    }
  }

  interface HTMLElementTagNameMap {
    'manessinger-comment': HTMLManessingerCommentElement
  }

  interface ElementTagNameMap {
    'manessinger-comment': HTMLManessingerCommentElement;
  }
}
declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;