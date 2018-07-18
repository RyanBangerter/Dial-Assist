import axios from 'axios';

export default {
    //Loads a patients journal
    getJournal: function(patientId) {
        return axios.get('/api/journal/' + patientId);
    },
    //Loads a patients treatment history
    getTreatments: function(patientId) {
        return axios.get('/api/treatment' = patientId);
    },
    //Adds a new patient
    addPatient: function(patient) {
        return axios.post('/api/patient', patient);
    },
    //Adds a new journal entry
    addJournalEntry: function(data) {
        return axios.post('/api/journal', data);
    },
    //Adds a new treatment
    addTreatment: function(data) {
        return axios.post('/api/treatment', data);
    },
    //Updates a journal entry
    updateJournal: function(data) {
        return axios.put('/api/journal', data);
    }
};