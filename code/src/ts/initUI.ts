$('[lang=en]').remove();

const popup = $('#contact-popup');
$('.start-free-trial').on('click', () => {
    popup.addClass('toggled');
});

popup.on('click', event => {
    // @ts-ignore
    const target = event.target as HTMLElement;
    const close = target.closest('.popup-content');
    if (!close) {
        popup.removeClass('toggled');
    }
});

$('.input-field').on('click', () => {
    $(this).removeClass('incomplete');
});

window.onload = function () {
    //the loaded class prevents flickering
    popup.addClass('loaded');

    //Init forms
    $('.contact-form').on('submit', event => {
        event.preventDefault();

        if (isFormValid($(event.currentTarget))) {
            sendEmail($(event.currentTarget));
        }
    });
}

function isFormValid(form: JQuery) {
    let res = true;
    const inputs = form.find('.input-field');
    for (let i = 0; i < inputs.length; i++) {
        const curr = inputs[i] as HTMLInputElement;
        if (!curr.value || curr.value.length <= 0) {
            inputs[i].classList.add('incomplete');
            res = false;
        }
    }
    return res;
}

function sendEmail(form: JQuery) {
    // these IDs from the previous steps
    const loader = form.find('.circle-loader');
    loader.addClass('toggled');
    const submit = form.find('.button-cta');
    submit.removeClass(['success', 'fail']);
    //@ts-ignore
    emailjs.sendForm('contact_service', 'contact_form', form[0])
        .then(function () {
            submit.addClass('success');
        }, function (error) {
            submit.addClass('fail');
            console.error(error);
        }).finally(() => {
        loader.removeClass('toggled');
    });
}
