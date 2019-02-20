exports.getIndex = (req,res, next) =>{
  res.render('admin/index',{
      path: '/index',
      pageTitle: 'login'
  });
};
exports.postIndex = (req, res, next) =>{
    res.render('admin/index',{
        path: '/index'
    });
};