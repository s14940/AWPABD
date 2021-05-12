exports.showProcedureList = (req, res, next) => {
    res.render('pages/procedure/list', {navLocation: 'procedure'});
}
exports.showAddProcedureForm = (req, res, next) => {
    res.render('pages/procedure/form', {navLocation: 'procedure'});
}

exports.showProcedureDetails = (req, res, next) => {
    res.render('pages/procedure/details', {navLocation: 'procedure'});
}