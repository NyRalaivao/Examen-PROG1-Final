import {describe} from "mocha";
import {expect} from "chai";
import {expect} from "Niveau3"
describe ("Traversee dans le FAR West", () => {
    it("if in input the NORD and SUD or EST and OUEST are placed one after the other, it is both eliminated, the output is a last element not eliminated", () => {
        expect(reduceDirections(['NORD', 'SUD', 'SUD', 'EST', 'OUEST', 'NORD', 'OUEST'])).to.deep.equal(['OUEST']);
        expect(reduceDirections(['NORD', 'SUD', 'EST', 'OUEST'])).to.deep.equal([]);
        expect(reduceDirections(['NORD', 'sud', 'SUD', 'EST', 'OUEST', 'NORD', 'OUEST'])).to.Throw("Error : the element in the array contains lowercase letters");
    })
})