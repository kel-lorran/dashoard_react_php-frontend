
class User{
    constructor(e,p){
        this.pass = p;
        this.email = e;
        this.token = '';
    }

    setToken(t){
        this.token = t;
    }
    getToken(){
        return this.token;
    }

    validatPass(){

    }
    validatEmail(){

    }
}

export default User;