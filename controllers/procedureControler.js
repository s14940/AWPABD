exports.showProcedureList = (req, res, next) => {
    res.render('pages/procedure/list', {});
}
exports.showAddProcedureForm = (req, res, next) => {
    res.render('pages/procedure/form', {});
}

exports.showProcedureDetails = (req, res, next) => {
    res.render('pages/procedure/details', {});
}