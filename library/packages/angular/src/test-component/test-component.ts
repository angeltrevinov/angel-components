import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Component } from "@angular/core";

@Component({
  selector: "test-component, TestComponent",
  template: `
    <div>Hello this is test-component!</div>
  `,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
})
export default class TestComponent {}

@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule],
  exports: [TestComponent],
})
export class TestComponentModule {}
