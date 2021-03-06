module.exports = function(sequelize, DataTypes) {
    const Patient = sequelize.define('Patient', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                is: /^[a-z0-9\_\-]+$/i
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fluidGoal: {
            type: DataTypes.DOUBLE,
            defaultValue: 1
        }
    });

    Patient.associate = function(models) {
        Patient.hasMany(models.Day, {
            onDelete: 'cascade'
        });
    };

    return Patient;
}