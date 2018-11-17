// JavaScript Document
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
// hàm này đc gọi khi form onsubmit
function nguoidung()
{
	//kiem tra ho ten
	var hoten=document.formdk.ht.value;
	var ktrahoten=isNaN(hoten);
	//kiem tra so dien thoai
	var dienthoai=document.formdk.sdt.value;
	var ktradienthoai=isNaN(dienthoai);
	
	// kiểm tra mật khẩu khớp
	if(formdk.matkhau.value != formdk.matkhau2.value) {
		alert("Bạn đã nhập lại mật khẩu không đúng");
		formdk.matkhau2.focus();
		return false; 
		/* 
			return false sẽ dừng việc submit
			phải ghi ngoài html:<form onsubmit="return nguoidung()" >
			thì nó mới dừng
		*/ 
	}
	//kiểm tra họ tên
	else if(ktrahoten==false)
	{
		alert("Mời bạn nhập lại họ tên");
		formdk.ht.focus();
		return false;
	}
	//-------
	else if(ktradienthoai==true)
	{
		alert("Mời bạn nhập vào số");
		formdk.sdt.focus();
		return false;
	}
	else if(dienthoai.charAt(0)==0)
	{
		if(dienthoai.length!=10)
		{
			alert("Số điện thoại phải gồm 10 số");
			formdk.sdt.focus();
			return false;
		}
		return true;
	}
	else if(dienthoai.charAt(0)=="+" && dienthoai.charAt(1)==8 && dienthoai.charAt(2)==4)
	{
		if(dienthoai.length!=12)
		{
			alert("Bạn phải nhập đúng số điện thoại quy định");
			formdk.sdt.focus();
			return false;
		}
		return true;
	}
	 if(dienthoai.charAt(0)!=0 || dienthoai.charAt(0)!= "+84")
	{
		alert("Số điện thoại phải bắt đầu từ 0 hoặc +84");
		formdk.sdt.focus();
		return false;
	}

	return true; // nếu không có gì sai thì submit
}

// Khung xanh nếu ok
function ok(inputElement) {
	inputElement.style.border = '2px solid #0f0';
}

// Khung đỏ nếu chưa ok
function notOk(inputElement) {
	inputElement.style.border = '2px solid #f00';	
}

// Kiểm tra độ dài mật khẩu , input_mật_khẩu có onclick= hàm này
function checkDoDaiMatKhau() {
	var ghichu = document.getElementById('doDaiMk');
	if(formdk.matkhau.value.length < 5) {
		ghichu.style.color = "#a00";
		ghichu.style.opacity = "1";
		notOk(formdk.matkhau);
	
	} else {
		ok(formdk.matkhau);
		ghichu.style.color = "#0f0";
		ghichu.style.opacity = "0";
	}
}

// Kiểm tra mật khẩu nhập lại có khớp không, hay có trống không
// input_mật_khẩu và input_nhập_lại đều có hàm này trong onclick của nó
function checkMatKhauKhop() {
	if(formdk.matkhau.value != formdk.matkhau2.value // kiểm tra khớp
	|| formdk.matkhau.value == "") { // kiểm tra trống
		notOk(formdk.matkhau2);
	
	} else {
		ok(formdk.matkhau2);
	}
}
