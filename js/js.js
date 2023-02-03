function commentBox(){
    document.getElementById("comentario").textContent = document.getElementById("comment").value;
    window.location = "https://api.whatsapp.com/send?phone="+"5491162206574"+"&text="+document.getElementById("comment").value;


}