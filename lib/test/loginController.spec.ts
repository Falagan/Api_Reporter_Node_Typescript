import { expect } from "chai";
import { LoginController} from '../controllers/loginController';

describe('Login Controller T', ()=>{

    let lc = new LoginController();

    it('Test', ()=>{
        expect(lc.test()).to.be.equal('Test');
    })


})