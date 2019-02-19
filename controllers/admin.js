exports.getLogin = (req, res, next) =>{
    res.render('admin/login', {
        pageTitle: 'Login Page',
        path: '/admin/login',
        formCss: true
    });
};
exports.getIndex = (req, res, next) =>{
    res.render('admin/index', {
        pageTitle: 'Admin Dashboard',
        path: './admin/index',
        formCss: true
    });
};