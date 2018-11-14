// JavaScript Document
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function nguoidung()
{
	if (formdk.dangnhap.value=="") 
	{
		var s='sai';
		alert("xin chào");
		alert("ban chua nhap.")
		document.getElementById("dn").innerHTML=s;
		return false;
	}
}
