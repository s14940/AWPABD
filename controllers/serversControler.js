exports.showServersList = (req, res, next) => {
    res.render('pages/servers/list', {});
}
exports.showAddServersForm = (req, res, next) => {
    res.render('pages/servers/form', {});
}

exports.showServersDetails = (req, res, next) => {
    res.render('pages/servers/details', {});
}