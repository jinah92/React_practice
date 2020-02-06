$(document).ready(function(){
    $('#ok_btn_jqeury').click(function(){
        const name = $('#name').val();
        const pw = $('#pw').val();
        
        if(name === "my name"){
            alert("다시 입력하세요");
        } else {
            alert('동적 화면이동! (JQuery)');
            $('#login_user').text(name);
            $('#login_pw').text(pw);
            $('#content_message').show();
        }
        
    });
});