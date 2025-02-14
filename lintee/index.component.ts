import { Component, type OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    // templateUrl: './index.component.html',
    template: `<input type="text" name="foo" ([ngModel])="foo">`,
})
export class Name2Component implements OnInit {

    public foo: string = '';

    public constructor() { }

    public ngOnInit() { }


}
