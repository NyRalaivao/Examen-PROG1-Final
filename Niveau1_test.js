import {describe} from "mocha";
import {expect} from "chai";
import {getLastDelegation} from "./ceremonie.js"
describe("Ceremonie d'ouverture", () => {
    it("if indexOf 1 / 2 in any element input, the output is index 0 the delegations who have a value minimal", () => {
        expect(getLastDelegation(['Chili 101 2', 'Estonia 58 1', 'Romania 102 3', 'Ecuador 103 4'])).to.deep.equal('Estonia');
        expect(getLastDelegation(['Ecuador 103 4', 'Madagascar 104 5', 'Oman 50 1'])).to.deep.equal('Oman');
        expect(getLastDelegation(['Ecuador 103 4', 'Madagascar 103 4', 'Oman 50 1'])).to.Throw('Error: Two delegation don\'t have a value equal');
})});