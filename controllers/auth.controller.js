// ckontrole za auth


function getSignUp(req, res) {
//...
res.render('customer/auth/sugnup');

}

function getLogin(req, res) {
    //...
    }

module.exports={
    getSignup: getSignup,
    getLogin: getLogin

};
