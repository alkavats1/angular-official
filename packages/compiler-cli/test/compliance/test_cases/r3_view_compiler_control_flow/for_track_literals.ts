import {Component} from '@angular/core';

@Component({
  template: `
    {#for item of items; track trackFn({foo: item, bar: item}, [item, item])}{{item.name}}{/for}
  `,
})
export class MyApp {
  items = [];

  trackFn(obj: any, arr: any[]) {
    return null;
  }

  // TODO(crisbeto): remove this once template type checking is fully implemented.
  item: any;
}
