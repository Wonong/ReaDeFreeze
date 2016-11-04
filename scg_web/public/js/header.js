$(document).ready(function(){
    $("nav>ul>li>a").click(function(){
        $(this).parent().addClass("active");
    });
});