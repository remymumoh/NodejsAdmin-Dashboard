exports.getLogin = (req, res, next) =>{
    res.render('admin/login', {
        pageTitle: 'Login Page',
        path: '/',
        formCss: true
    });
};
exports.postLogin = (req, res, next) =>{
    res.render('admin/index',{
        path:'admin/index'
    });
};