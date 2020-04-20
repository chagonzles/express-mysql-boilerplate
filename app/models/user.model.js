module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
        firstname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        }
    })

    return User;
}