import { expect } from "chai";
import { loginController} from '../controllers/loginController';

describe('Login Controller T', ()=>{

    let lc = new loginController();

    it('Test', ()=>{
        expect(lc.test()).to.be.equal('Test');
    })


})