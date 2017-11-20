import { Component, OnInit, Input } from '@angular/core';
import { ITEM } from '../card.model'
@Component({
    selector: 'main-child-panel',
    templateUrl: './child-panel.component.html',
    styleUrls: ['./child-panel.component.styl'],
})
export class childPanelComponent implements OnInit {
    @Input() item: ITEM
    @Input() queryData
    @Input() loading
    constructor() { }

    ngOnInit() {}
    
}
