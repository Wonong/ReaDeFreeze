/**
 * Created by WonyeongChoi on 2016. 11. 17..
 */
module.exports = function (sequelize, DataTypes) {

    var userData = sequelize.define("userData", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "user e-mail"
        },password: {
            type: DataTypes.STRING,
            allowNull: false,
        },tizenId: {
            type: DataTypes.STRING,
            allowNull: true,
            comment: "냉장고 고유의 값, 냉장고 미연결시 NULL"
        }
    }, {
        tableName: "userData",
        comment: "user정보"
    });
    return userData;
};