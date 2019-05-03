import { expect } from "chai";
import { loginController} from '../controllers/loginController';

describe('Primer Test', ()=>{

    it('Test', ()=>{
        expect(new loginController().test()).to.equal('Vamos');
    })

    it('Test 2', ()=>{
        expect(new loginController().test2()).to.equal('Vamos');
    })
})