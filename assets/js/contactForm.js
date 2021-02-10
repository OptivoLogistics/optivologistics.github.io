//Init forms
$('.contact-form').on('submit', event => {
    event.preventDefault();

    if (isFormValid($(event.currentTarget))) {
        sendEmail($(event.currentTarget));
    }
});

$('.form-required').on('keydown', event => {
    event.currentTarget.classList.remove('incomplete');
});


function isFormValid(form) {
    let res = true;
    const inputs = form.find('.form-required');
    for (let i = 0; i < inputs.length; i++) {
        const curr = inputs[i];
        if (!curr.value || curr.value.length <= 0) {
            inputs[i].classList.add('incomplete');
            res = false;
        }
    }
    return res;
}

function sendEmail(form) {
    // these IDs from the previous steps
    const loader = form.find('.circle-loader');
    loader.addClass('toggled');
    const submit = form.find('input[type="submit"]');
    submit.removeClass(['success', 'fail']);
    const asElement = form[0];
    emailjs.sendForm('contact_service', 'contact_form', asElement)
        .then(function () {
            submit.addClass('success');
        }, function (error) {
            submit.addClass('fail');
            console.error(error);
        }).finally(() => {
        loader.removeClass('toggled');
    });
}