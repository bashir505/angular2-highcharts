import { Directive, Output, EventEmitter } from '@angular/core';
import { ChartEvent } from './ChartEvent';

@Directive({
    selector: 'xAxis'
})
export class ChartXAxisComponent {
    @Output() afterSetExtremes = new EventEmitter<ChartEvent>();
    @Output() pointInBreak = new EventEmitter<ChartEvent>();
    @Output() setExtremes = new EventEmitter<ChartEvent>();
}