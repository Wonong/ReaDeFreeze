module.exports = function (sequelize, DataTypes) {

    var Post = sequelize.define("Post", {
        seq: {
            type: DataTypes.INTEGER,
            allowNull: true,
            comment: "해당 설정의 순서번호"
        },user: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "해당 설정을 지정한 user"
        }, toTime: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            comment: "언제까지 설정 완료"
        }, mode: {
            type: DataTypes.INTEGER,
            allowNull: false,
            comment: "최종 설정할 모드, 1=meat and fish, 2 = vegetables"
        }, device: {
            type: DataTypes.STRING,
            allowNull: false,
            comment: "해당 설정을 지정한 device"
        }
    }, {
            tableName: "Defreeze_log",
            comment: "설정 등록 로그"
    });
    return Post;
};