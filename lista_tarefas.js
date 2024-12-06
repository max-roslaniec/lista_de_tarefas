$(document).ready(function() {
    // Adiciona uma nova tarefa quando o formulário é submetido
    $('#form-tarefa').submit(function(event) {
        event.preventDefault(); // Impede o comportamento padrão de envio do formulário

        // Captura o valor digitado pelo usuário
        const tarefa = $('#campo-tarefa').val().trim();

        if (tarefa) {
            // Cria um elemento <li> com a tarefa
            const itemTarefa = $('<li>').text(tarefa);

            // Adiciona um evento de clique para riscar a tarefa
            itemTarefa.click(function() {
                $(this).css('text-decoration', 'line-through');
            });

            // Adiciona o elemento <li> à lista
            $('#lista-tarefas').append(itemTarefa);

            // Limpa o campo de entrada
            $('#campo-tarefa').val('');
        }
    });
});
