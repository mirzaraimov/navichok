document.getElementById('check').onclick = function() {
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    
    if (login == 'mirsaid' & password == '75391379')
    alert('Salom mirsaid');
    else if (login == 'said' & password == '13797539')
    alert('Salom said');
    else alert('Uzur, login yoki parolda xatolik bor');
    
}