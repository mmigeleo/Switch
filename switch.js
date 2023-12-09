let login = prompt('Bura logininizi yazin');
let password = prompt('Bura parolunuzu yazin');
let outcome;

switch (login, password) {
    case (login = 'admin') && (password = '123456'):
        netice = 'Salam Admin! Sayti redakte ede bilersiniz.'
        break;
    case (login = 'ayaz') && (password = '123456'):
        netice = 'Xos geldin, Ayaz!'
        break;
    case (login = 'murad') && (password = 'murik1234'):
        netice = 'Xos geldin, Murad!'
        break;
    case  (login = 'mika') && (password = 'mika123'):
        netice = 'Xos geldin, Mikayil!'
        break;
    case (login = null) && (password = null):
        netice = 'Get admin ve ya parol yaz, zeif.'
        break;
    default:
        netice = 'Login ve ya parol sehvdir.'
    break;
}

document.getElementById('program').innerHTML = outcome;