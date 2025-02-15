import {Component} from '@angular/core';

@Component({
  template: `
    <div>
      {{message}}
      {#for item of items; track item; let outerCount = $count}
        {{item.name}}
        {#for subitem of item.subItems; track subitem}
          Outer: {{outerCount}}
          Inner: {{$count}}
        {/for}
      {/for}
    </div>
  `,
})
export class MyApp {
  message = 'hello';
  items = [
    {name: 'one', subItems: ['sub one', 'sub two', 'sub three']},
    {name: 'two', subItems: ['sub one', 'sub two', 'sub three']},
    {name: 'three', subItems: ['sub one', 'sub two', 'sub three']},
  ];

  // TODO(crisbeto): remove this once template type checking is fully implemented.
  item: any;
  outerCount: any;
  $count: any;
}
