
class User{
    constructor(e,p,t){
        this.senha = p;
        this.email = e;
        this.token = t;
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