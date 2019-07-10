/// <reference types="Cypress" />

export class Kayak {
    navigateTo(url: string) : any{
        return cy.visit(url);
    }

    getElementEndsWith(attr: string, pattern: string) : any {
        return cy.get(`[${attr}$=${pattern}]`);
    }

    getVisibleInputCount() : number {
        
        let counter = 0;
        
        let originDisplayElem: any      = this.getElementEndsWith('id', 'origin-airport-display'),
            destinationDisplayElem: any = this.getElementEndsWith('id', 'destination-airport-display'),
            dateRangeDisplayStart: any  = this.getElementEndsWith('id', 'dateRangeInput-display-start'),
            dateRangeDisplayEnd: any    = this.getElementEndsWith('id', 'dateRangeInput-display-end');

        if (originDisplayElem) counter++;
        if (destinationDisplayElem) counter++;
        if (dateRangeDisplayStart) counter++;
        if (dateRangeDisplayEnd) counter++;

        return counter;
        



    }

}