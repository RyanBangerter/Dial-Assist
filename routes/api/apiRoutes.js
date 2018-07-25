//dependencies
const db = require("../../models"),
      router = require('express').Router();

//load the patient's journal
router.get('/api/journal/:patientId', function(req, res){
    const patientId = req.params.patientId;
    db.Day.findAll({
        where: {PatientId: patientId}
    }).then(function(data){
        res.json(data);
    })
});

//load the patient's treatment history
router.get('/api/treatments/:patientId', function(req, res) {
    const patientId = req.params.patientId;
    db.Treatment.findAll({
        where: {PatientId: patientId}
    }).then(function(data) {
        res.json(data)
    })
});

//add a new patient
router.post('/api/patient', function(req, res) {
    db.Patient.create(req.body).then(function(newPatient){
        res.json(newPatient);
    })
});

//add a new journal entry
router.post('/api/journal', function(req, res) {
    db.Day.create(req.body).then(function(newDay) {
        res.json(newDay)
    })
});

//add a new treatment
router.post('/api/treatment', function(req, res) {
    db.Treatment.create(req.body).then(function(newTreatment){
        res.json(newTreatment)
    })
});

//update a journal entry
router.put('/api/journal', function(req, res) {
    const patientId = req.body.PatientId,
          date = req.body.date;
    db.Day.update(
        req.body,
        {where: {
            PatientId: patientId,
            date: date
        }
    }).then(function(updated){
        res.json(updated);
    })
})

module.exports = router;