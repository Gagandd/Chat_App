const socket =io();
setTimeout(()=>{
    console.log(socket.id); 
},500)


$('#chat').hide();




$('#send-btn').click(()=>{
    socket.emit('send-msg',{
        msg:$('#inp').val()
    })
})
socket.on('received-msg',(data)=>{
    $('#list').append(`<li>${data.name} &#8594;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${data.msg}</li>`);
})

$('#login-btn').click(()=>
{
    socket.emit('login',{
        name:$('#login-inp').val()
    })
    $('#chat').show();
    $('#login').hide();
   
})
function Redirect() 
{
    $('#chat').hide();
    $('#login').show();

    

}