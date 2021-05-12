exports.showServersList = (req, res, next) => {
    res.render('pages/servers/list', {navLocation: 'server'});
}
exports.showAddServersForm = (req, res, next) => {
    res.render('pages/servers/form', {navLocation: 'server'});
}

exports.showServersDetails = (req, res, next) => {
    res.render('pages/servers/details', {navLocation: 'server'});
}