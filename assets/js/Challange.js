
SuccessMessage = (data) => {
    var parentcontainer = document.querySelector('.parentcontainer');

    let a, b, c, d, e, f, g, h;

    a = document.createElement('div');
    a.className = 'successContainer';

    b = document.createElement('div');
    b.className = 'jealous';

    c = document.createElement('span');
    c.className = 'fontwraper';

    d = document.createElement('i');
    d.className = 'fa fa-check-circle dids';
    c.append(d)

    e = document.createElement('h2');
    e.className = 'tekno';
    e.innerText = 'Thanks for subscribing!';

    f = document.createElement('p');
    f.className = 'negro';
    f.innerHTML = data;
    

    g = document.createElement('button')
    g.className = 'Fuckme_dear';
    g.innerText = 'Dismiss message'


    b.append(c)
    b.append(e)
    b.append(f)
    b.append(g)
    a.append(b)
    parentcontainer.append(a)
    De_play()
}



class ValidationOfEmail {
    constructor(emailcom) {
        this.email = emailcom;
    }
    Validatetion() {
        if (this.email == '') {
            return true;
        }
        if (this.email.includes('@') == false || this.email.includes('.') == false) {
            return true
        }
        if (this.email.search(/[^a-z0-9@.]/i) !== -1) {
            return true;
        }

        return false;
    }
}


let buds = document.querySelector('.mymouth1')

buds.addEventListener('click', function () {
    let Inputtind = document.querySelector('.mymouth')
    let bad_boy = document.querySelector('.bad_boy')

    let signOption = new ValidationOfEmail(Inputtind.value);
    if (signOption.Validatetion()) {
        bad_boy.innerHTML = 'Invalid Email Eddress!';
        bad_boy.classList.add('bro0');
        Inputtind.classList.add('turnup');
        BuggleUp();
        return;
    }
    Inputtind.style.setProperty('font-weight', '600');
    SuccessMessage('A confirmation code has been sent to ' + Inputtind.value + ' Please open it and click the button inside to confirm your subscribtion.')
})
//SuccessMessage('A confirmation code has been sent to  Please open it and click the button inside to confirm your subscribtion.')
BuggleUp = () => {
    let Inputtind = document.querySelector('.mymouth')
    let bad_boy = document.querySelector('.bad_boy');
    Inputtind.oninput = function () {
        if (this.value == '') {
            bad_boy.innerHTML = '';
            bad_boy.classList.remove('bro0');
            Inputtind.classList.remove('turnup')
        }
    }

}

De_play = () => {
    let bad_boy = document.querySelector('.bad_boy');
    let ClosingP = document.querySelector('.Fuckme_dear');
    let Inputtind = document.querySelector('.mymouth')
    let successContainer = document.querySelector('.successContainer')
    ClosingP.addEventListener('click', function () {
        successContainer.remove();
        Inputtind.value = '';
        bad_boy.innerHTML = '';
        bad_boy.classList.remove('bro0');
        Inputtind.classList.remove('turnup')
        ClosingP.remove();
        
    })
}
if(window.innerWidth <= 700){
    let thesource = document.querySelector('.onetimedear')
    thesource.src = './illustration-sign-up-mobile.svg';
}