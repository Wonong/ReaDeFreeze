/**
 * Created by WonyeongChoi on 2016. 11. 17..
 */

module.exports = function (sequelize, DataTypes) {

    var User = sequelize.define("User", {
        userId: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "user e-mail"
        },password: {
            type: DataTypes.STRING,
            allowNull: false
        },tizenId:{
            type: DataTypes.STRING,
            allowNull: true,
            comment : "user가 냉장고가 연결되어있는지 여부 저장"
        }
    }, {
        tableName: "user",
        comment: "user정보 저장 테이블"
    });
    return User;
};