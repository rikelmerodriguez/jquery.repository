$(document).ready(function() {
    $('#todo-form').submit(function(event) {
        event.preventDefault(); // Evita o recarregamento da página ao submeter o formulário
        var taskName = $('#task-input').val();
        if (taskName.trim() !== '') {
            $('#task-list').append('<li>' + taskName + '</li>');
            $('#task-input').val('');
        }
    });

    $(document).on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
