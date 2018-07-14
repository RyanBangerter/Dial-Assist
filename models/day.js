module.exports = function(sequelize, DataTypes) {
    const Day = sequelize.define('Day', {
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        //fluid in liters
        fluid: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        //nutrients in miligrams
        albumen:{
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        potassium: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        },
        phosphorous: {
            type: DataTypes.DOUBLE,
            defaultValue: 0
        }
    });

    Day.associate = function(models) {
        Day.belongsTo(models.Patient, {
            foreignKey: {
                allowNull: false
            }
        });
    }

    return Day;
}