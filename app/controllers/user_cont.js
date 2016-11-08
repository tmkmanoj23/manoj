exports.forgotPassword = function (req, res, next) {

    var selectionCriteria = {
      _id: user._id
    }
    User.update(selectionCriteria, dataToUpdate,{}, options).then(function (status) {
      finalRes['status'] = 'success'
      res.send(finalRes)
      passwordMailer.forgotPassword(req.headers.referer, user.email,
        dataToUpdate.resetPasswordToken, function (mailerErr, result) {})
    }, function (updateErr) {
      finalRes['message'] = updateErr
      return res.send(finalRes)
    })
  }, function (findErr) {
    finalRes['message'] = findErr
    return res.send(finalRes)


}
