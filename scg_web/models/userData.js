/**
 * Created by WonyeongChoi on 2016. 11. 17..
 */
module.exports = function (sequelize, DataTypes) {

    var userData = sequelize.define("userData", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "user e-mail"
        },tizenId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "냉장고 고유의 값"
        }
    }, {
        tableName: "userData",
        comment: "user-냉장고 연결 기록"
    });
    return userData;
};