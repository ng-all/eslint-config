import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'selector-name',
    standalone: true,
    template: '<div>{{ foo() }}</div>',
})
export class TestComponent {

    public foo(): string {
        console.log('foo');
        return 'foo';
    }

}
