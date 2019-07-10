/// <reference types="Cypress" />

export default class KayakApp {
    navigateTo(url: string) : any{
        return cy.visit(url);
    }

    getElementEndsWith(attr: string, pattern: string) : any {
        return cy.get(`[${attr}$=${pattern}]`);
    }

    getVisibleInputCount() : number {
        
        let counter = 0;

        const $originDisplayElem = Cypress.$('[id$=origin-airport-display]'),
                $destinationDisplayElem = Cypress.$('[id$="destination-airport-display"]'),
                $dateRangeDisplayStart = Cypress.$('[id$=dateRangeInput-display-start]'),
                $dateRangeDisplayEnd = Cypress.$('[id$=dateRangeInput-display-end]');

        if ($originDisplayElem) counter++;
        if ($destinationDisplayElem) counter++;
        if ($dateRangeDisplayStart) counter++;
        if ($dateRangeDisplayEnd) counter++;
        
        return counter;
    }

}