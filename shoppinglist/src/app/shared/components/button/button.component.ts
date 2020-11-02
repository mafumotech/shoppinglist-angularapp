import { Component, Input } from '@angular/core';
import { Button } from './models/button.model';

@Component({
    selector: 'ng-button',
    templateUrl: 'button.component.html'
})
export class ButtonComponent {
    @Input() button:Button
}
