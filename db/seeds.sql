INSERT INTO patients (username, password, createdAt, updatedAt) VALUES ('user-1', 'password', '2018-06-06', '2018-06-06');
INSERT INTO patients (username, password, createdAt, updatedAt) VALUES ('user-2', 'password', '2018-06-06', '2018-06-06');
INSERT INTO patients (username, password, createdAt, updatedAt) VALUES ('user-3', 'password', '2018-06-06', '2018-06-06');

INSERT INTO days (date, fluid, albumen, potassium, phosphorous, PatientId, createdAt, updatedAt) VALUES ('2018-07-13', 3, 7, 4, 1, 1, '2018-06-06', '2018-06-06');
INSERT INTO days (date, fluid, albumen, potassium, phosphorous, PatientId, createdAt, updatedAt) VALUES ('2018-07-14', 2, 4, 5, 6, 1, '2018-06-06', '2018-06-06');
INSERT INTO days (date, fluid, albumen, potassium, phosphorous, PatientId, createdAt, updatedAt) VALUES ('2018-07-13', 3, 1, 1, 1, 2, '2018-06-06', '2018-06-06');
INSERT INTO days (date, fluid, albumen, potassium, phosphorous, PatientId, createdAt, updatedAt) VALUES ('2018-07-14', 3, 2, 2, 2, 2, '2018-06-06', '2018-06-06');
INSERT INTO days (date, fluid, albumen, potassium, phosphorous, PatientId, createdAt, updatedAt) VALUES ('2018-07-13', 9, 0, 1, 4, 3, '2018-06-06', '2018-06-06');
INSERT INTO days (date, fluid, albumen, potassium, phosphorous, PatientId, createdAt, updatedAt) VALUES ('2018-07-14', 7, 0, 2, 2, 3, '2018-06-06', '2018-06-06');

INSERT INTO treatments (date, suggestedToRemove, actualToBeRemoved, bloodVolume, totalRemoved, PatientId, createdAt, updatedAt) VALUES ('2018-07-13', 2.00, 2.15, 5, 2.15, 1, '2018-06-06', '2018-06-06');
INSERT INTO treatments (date, suggestedToRemove, actualToBeRemoved, bloodVolume, totalRemoved, PatientId, createdAt, updatedAt) VALUES ('2018-07-13', 2.00, 2.15, 5, 2.15, 2, '2018-06-06', '2018-06-06');
INSERT INTO treatments (date, suggestedToRemove, actualToBeRemoved, bloodVolume, totalRemoved, PatientId, createdAt, updatedAt) VALUES ('2018-07-13', 2.00, 2.15, 5, 2.15, 3, '2018-06-06', '2018-06-06');