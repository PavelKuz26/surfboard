    const validateFields = (form, fieldsArray) => {
    fieldsArray.forEach((field) => {
        field.removeClass('input__error');
        if(field.val() == ''){
            field.addClass('input__error')
        }
    });

    const errorFields = form.find('.input__error');

    return errorFields.lenght == 0;
}

$('.form').submit(e => {
    e.preventDefault();

    const form = $(e.currentTarget);
    const name = form.find("[name='name']");
    const phone = form.find("[name = 'phone']");
    const comment = form.find("[name = 'comment']");
    const street = form.find("[name = 'street']");
    const to = form.find("[name = 'to']");

    const modal = $('#modal');
    const content = modal.find('.modal__content');

    modal.removeClass('error-modal');

    const isValid = validateFields(form, [name, phone, comment, street, to]);


    if(isValid){
        $.ajax({
            url: 'https://webdev-api.loftschool.com/sendmail',
            method: 'post',
            data: {
                name: name.val(),
                phone: phone.val(),
                comment: comment.val(),
                street: street.val(),
                // to: to.val()
            },
            succes: data =>{
                content.text(data.message);
                $.fancybox.open({
                    src: '#modal',
                    type: 'inline',
                });
            },
            error: data => {
                const message = data.responseJSON.message;
                content.text(message);
                modal.addClass('error-modal');
                $.fancybox.open({
                    src: '#modal',
                    type: 'inline',
                });
            }
        });
    } 
});

$('.app-close-modal').click(e => {
    e.preventDefault();

    $.fancybox.close()
});