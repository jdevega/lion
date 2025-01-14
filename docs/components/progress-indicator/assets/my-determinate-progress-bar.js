import { css, html } from '@lion/core';
import { LionProgressIndicator } from '@lion/progress-indicator';

export class MyDeterminateProgressBar extends LionProgressIndicator {
  static get styles() {
    return [
      css`
        :host {
          display: block;
          position: relative;
          width: 100%;
          height: 6px;
          overflow: hidden;
          background-color: #eee;
        }

        .progress__filled {
          height: inherit;
          background-color: green;
        }
      `,
    ];
  }

  _graphicTemplate() {
    return html` <div class="progress__filled" style="width: ${this._progressPercentage}%"></div> `;
  }
}

customElements.define('my-determinate-progress-bar', MyDeterminateProgressBar);
