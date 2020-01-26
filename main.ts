const f1 = document.forms['f1'] as HTMLFormElement
const btnAdd = document.forms['f1'].btnAdd as HTMLFormElement;
const btnRes = document.forms['f1'].btnRes as HTMLFormElement;
const btnCen = document.forms['f1'].btnCen as HTMLFormElement;
const txtAdd = document.forms['f1'].txtAdd as HTMLFormElement;
const txtCen = document.forms['f1'].txtCen as HTMLFormElement;
const txt = document.forms['f1'].txt as HTMLFormElement;
const word = /^[A-Za-z]+$/;

btnAdd.onclick = function ():void {
    if (!word.test(txtAdd.value)) txtAdd.placeholder = 'Please write a word!';
    else {
        txt.value += ` ${txtAdd.value}`;
        txtAdd.value = '';
        txtAdd.placeholder = 'word here...'
    }
}
btnRes.onclick = function ():void {
    f1.reset()
}
btnCen.onclick = function ():void {
    if (/^$/.test(txtCen.value)) txtCen.placeholder = 'Please write a text!';
    else {
        let arrTxt: Array<string> = txt.value.split(' ');
        let arrTxtCen: Array<string> = txtCen.value.split(' ');
        for (let i = 0; i < arrTxtCen.length; i++) {
            for (let j = 0; j < arrTxt.length; j++) {
                if (arrTxtCen[i] == arrTxt[j]) {
                    let z: string = '';
                    for (let k = 0; k < arrTxtCen[i].split('').length; k++) {
                        z += '*';
                    }
                    arrTxtCen[i] = z;
                }
            }
        }
        let newTxtCen: string = '';
        for (let i = 0; i < arrTxtCen.length; i++) {
            newTxtCen += ` ${arrTxtCen[i]}`
        }
        txtCen.value = newTxtCen.trim();
    }
}
