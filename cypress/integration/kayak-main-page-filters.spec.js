/// <reference types="Cypress" />

function getElementEndsWith(attr, pattern) {
    return cy.get(`[${attr}$=${pattern}]`);
}

function getRoundTripInputsCount() {
    return [
        getElementEndsWith('origin-airport-display'),
        getElementEndsWith('destination-airport-display'),
        getElementEndsWith('dateRangeInput-display-start'),
        getElementEndsWith('dateRangeInput-display-end')
    ].length;
}



describe('Kayak travel site main page', () => {
    before(function () {
        cy.visit('https://www.kayak.com/');
        // cy.get('#irlc-switch-display').as('irlc');
    })

    it('round trip type', () => {
        let inputsCount = getRoundTripInputsCount();
        expect(inputsCount).to.equal(4);
    })

    it('origin city', () => {
        cy.fixture('data.json').as('data').then(function () {
            // this.data
            

        })
    })

})

function getUniqueId($form) {
    let id = $form.attr('id');
    return id.split('-')[0];
}




    
    // it('read search filters and apply rules', () => {
    //     cy.fixture('filter-data.json').as('filterData').then(function () {
    //         // this.filterData

    //         cy.get('.js-searchForm')
    //             .find('form')
    //             .should('have.class', 'js-rtow')
    //             .then(($form) => {
                    
    //                 let originClickableSel = refTemplates['origin'].replace('{id}', getUniqueId($form));
    //                 let originClickableInp = refTemplates['originInput'].replace('{id}', getUniqueId($form))
    //                 let originDropdownSet  = refTemplates['originAirportDropdown'].replace('{id}', getUniqueId($form));

    //                 cy.get(originClickableSel).click();
    //                 cy.get(originClickableInp)
    //                     .type("{selectall}{backspace}" + this.filterData.originInput);

    //                 cy.get(originDropdownSet).find('li').contains(this.filterData.originSelection);

    //                 // find origin city field element that clickable
    //                 // place originInput value in there
    //                 // wait for suggesstion to load
    //                 // choose an item from list named as originSelection
    //                 // then check for value is picked same as value given by fixture input

    //                 // same with the case of destination city field




    //             })


    //     })
    // })

//})
    
//     it('read origin and destination input and validate with provided input', () => {
//         cy.get('.js-searchForm')
//             .find('form')
//             .should('have.class', 'js-rtow')
//             .then(($form) => {
//                 const dynamicId = $form.attr('id').split('-')[0];

//                 $form.find('#'+dynamicId+'-origin-airport-display').click();



//             });

//         // cy.get('.col _sn _s9 _tb _k _- _n _o _p _q _r _sh _4 _5 _sj _7 _sm _8 _9 _uS _ba _uT').last().click();
//         // cy.get('input[name="origin"]').type("Tokyo Ha");

//         // cy.get('.gLFyf').type('flowers');
//         // cy.get('li.sbct').first().find('span').should('contain', 'flowers');
//         // cy.get('.gLFyf').type('{downarrow}{enter}');
//     })
// })
