const acordeonTrigger = document.querySelectorAll('.acordeon .trigger');

acordeonTrigger.forEach((trigger) => {
    trigger.addEventListener("click", (e) => {
        const acordeon = trigger.parentElement;
        const content = acordeon.querySelector('.content');
        const items = content.querySelectorAll('ul li');
        const isOpen = acordeon.classList.contains("open");

        if (isOpen) {
            acordeon.classList.remove("open");

            // Quando o acordeão é fechado, oculta os itens em cascata
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = 0; // Torna o item invisível
                }, index * 100); // Atraso de 100ms para cada item
            });

            // Aguarda o último item desaparecer antes de resetar a altura
            setTimeout(() => {
                content.style.opacity = 0; // Diminui a opacidade do conteúdo
                content.style.maxHeight = '0'; // Reseta a altura
            }, items.length * 100); // Tempo total de espera para o último item
        } else {
            acordeon.classList.add("open");
            content.style.maxHeight = '1000px'; // Expande a altura

            // Reseta a opacidade de cada item antes de exibir
            items.forEach(item => {
                item.style.opacity = 0; // Reseta a opacidade
            });

            // Mostra o conteúdo começando de transparente
            content.style.opacity = 1; // Aumenta a opacidade

            // Depois de um pequeno atraso, comece a mostrar cada item
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.style.opacity = 1; // Torna o item visível
                }, index * 300); // Atraso de 300ms para cada item
            });
        }
    });
});
