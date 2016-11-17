$(document).ready(function(){

    console.log(data);
    for(var i=1; i<10; i++){
        var data = new Date($.now());
        data.setMinutes(new Date().getMinutes() + 240 + 30*i);

        if(data.getMinutes() < 10) min = "0" + data.getMinutes();
        else min = data.getMinutes();

        if(data.getHours() < 10) hour = "0" + data.getHours();
        else hour = data.getHours();

        data =[data.getFullYear(), data.getMonth()+1, data.getDate()].join('-')+' '+ [data.getHours(), data.getMinutes(), data.getSeconds()].join(':');
        $("select#toTime option:nth-child(" + i + ")").attr({
            "value" : data
        }).html(hour + ":" + min);

    }

});