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
exports.postCharts = (req, res, next) =>{
  res.render('admin/charts',{
      path: 'admin/charts'
    });
};
exports.postWidgets = (req, res,next) =>{
    res.render('admin/widgets', {
       path: 'admin/widgets'
    });

};