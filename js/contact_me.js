$(function () {
    console.log('Configurando formulario');
    $('#contactForm').validate({
        errorElement: 'div',
        rules: {
            name: 'required',
            email: {
                required: true,
                email: true
            },
            message: 'required'
        },
        messages: {
            name: 'Debes ingresar un nombre',
            email: {
                required: 'Debes ingresar tu email',
                email: 'Debes ingresar un email válido'
            },
            message: 'Debes ingresar tu mensaje'
        }
    });
    $('#sendButton').click(function () {
        var valid = $('#contactForm').valid();
        console.log('Válido: ' + valid);
    });
});