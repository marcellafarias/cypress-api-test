/// <reference types="cypress"/>
import { random } from 'faker';

let brandData = { randomName: random.word(), }

function createUser() {
    return cy.request({
        method: 'POST',
        url: '/users',
        headers: {
            'content-type': 'application/json',
            "Authorization": 'Bearer 2275e2cbbf8dc1d113b25fb018cdb2e07e088b35bb5f7b7c13ca160ed96a82ba'
        },
        body: {
            "name": "Marcella Test - Create User",
            "email": brandData.randomName + "@gmail.com",
            "gender": "Female",
            "status": "Active" 
        },
        failOnStatusCode: false
    })
}

export {
    createUser
};