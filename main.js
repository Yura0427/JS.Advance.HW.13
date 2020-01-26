const f1 = document.forms['f1'];
const btnAdd = document.forms['f1'].btnAdd;
const btnRes = document.forms['f1'].btnRes;
const btnCen = document.forms['f1'].btnCen;
const txtAdd = document.forms['f1'].txtAdd;
const txtCen = document.forms['f1'].txtCen;
const txt = document.forms['f1'].txt;
const word = /^[A-Za-z]+$/;
btnAdd.onclick = function () {
    if (!word.test(txtAdd.value))
        txtAdd.placeholder = 'Please write a word!';
    else {
        txt.value += ` ${txtAdd.value}`;
        txtAdd.value = '';
        txtAdd.placeholder = 'word here...';
    }
};
btnRes.onclick = function () {
    f1.reset();
};
btnCen.onclick = function () {
    if (/^$/.test(txtCen.value))
        txtCen.placeholder = 'Please write a text!';
    else {
        let arrTxt = txt.value.split(' ');
        let arrTxtCen = txtCen.value.split(' ');
        for (let i = 0; i < arrTxtCen.length; i++) {
            for (let j = 0; j < arrTxt.length; j++) {
                if (arrTxtCen[i] == arrTxt[j]) {
                    let z = '';
                    for (let k = 0; k < arrTxtCen[i].split('').length; k++) {
                        z += '*';
                    }
                    arrTxtCen[i] = z;
                }
            }
        }
        let newTxtCen = '';
        for (let i = 0; i < arrTxtCen.length; i++) {
            newTxtCen += ` ${arrTxtCen[i]}`;
        }
        txtCen.value = newTxtCen.trim();
    }
};
