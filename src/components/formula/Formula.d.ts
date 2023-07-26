import { ExcelComponent } from '../../core/ExcelComponent';

export class Formula extends ExcelComponent {
    static className: string;
    constructor($root: Element);
    getHtml(): string;
    onInput(e: Event): void;
}
