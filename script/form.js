function buat_login() {
    var del = document.getElementById("x");
    del.parentElement.removeChild(del);
    var par = document.createElement("p");
    par.className = "tulisan_login";
    par.innerHTML = "SILAHKAN MENDAFTAR";
    var container = document.getElementsByTagName("div")[0];
    container.appendChild(par);
    var form = document.createElement("form");
    container.appendChild(form);
    var label_user = document.createElement("label");
    label_user.innerHTML = "Nama User";
    form.appendChild(label_user);
    var input_user = document.createElement("input");
    input_user.className = "form_login";
    input_user.placeholder = "Nama User.."
    form.appendChild(input_user);
    
    var label_hp = document.createElement("label");
    label_hp.innerHTML = "Nomor Handphone";
    form.appendChild(label_hp);
    var input_hp = document.createElement("input");
    input_hp.type = "number";
    input_hp.className = "form_login";
    input_hp.placeholder = "Nomor Handphone.."
    form.appendChild(input_hp);
    
    var label_name = document.createElement("label");
    label_name.innerHTML = "Username";
    form.appendChild(label_name);
    var input_name = document.createElement("input");
    input_name.className = "form_login";
    input_name.placeholder = "Username atau email.."
    form.appendChild(input_name);
    
    var label_password = document.createElement("label");
    label_password.innerHTML = "Password";
    form.appendChild(label_password);
    var input_password = document.createElement("input");
    input_password.type = "password"
    input_password.className = "form_login";
    input_password.placeholder = "Password.."
    form.appendChild(input_password);

    var input_submit = document.createElement("input");
    input_submit.className = "tombol_login";
    input_submit.type = "submit";
    input_submit.value = "DAFTAR SEKARANG";
    form.appendChild(input_submit);
}