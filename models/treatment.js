module.exports = function(sequelize, DataTypes) {
    const Treatment = sequelize.define('treatment', {
        date: {
            type: DataTypes.DATEONLY
        },
        //goal fluid to be removed, in liters
        suggestedToRemove: {
            type: DataTypes.DOUBLE
        },
        //predicted actual fluid set to be removed before treatment, in liters
        actualToBeRemoved: {
            type: DataTypes.DOUBLE
        },
        //blood volume processed, in liters
        bloodVolume: {
            type: DataTypes.DOUBLE
        },
        //actual fluid removed after treatment, in liters
        totalRemoved: {
            type: DataTypes.DOUBLE
        }
    });

    Treatment.associate = function(models) {
        Treatment.belongsTo(models.Patient, {
            foreignKey: {
                allowNull: false
            }
        })
    }

    return Treatment;
}