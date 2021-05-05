exports.showUserList = (req, res, next) => {
    res.render('pages/user/list', {});
}
exports.showAddUserForm = (req, res, next) => {
    res.render('pages/user/form', {});
}

exports.showUserDetails = (req, res, next) => {
    res.render('pages/user/details', {});
}