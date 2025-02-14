import { ChangeDetectionStrategy, Component, Signal } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'selector-name',
    standalone: true,
    template: '<div>{{ ssg$() }}</div>',
})
export class TestComponent {

    public ssg$: Signal<string>;

    public foo(): string {
        console.log('foo');
        return 'foo';
    }

}
