document.addEventListener('DOMContentLoaded', () => {

    const btnIncreaseFont =
        document.getElementById('btn-increase-font');

    const btnDecreaseFont =
        document.getElementById('btn-decrease-font');

    const btnToggleTheme =
        document.getElementById('btn-toggle-theme');


    /* =====================================================
       CONFIGURAÇÃO DA FONTE
       ===================================================== */

    let fontScale = 1;

    const minFontScale = 0.8;
    const maxFontScale = 1.4;

    const fontStep = 0.1;


    /* =====================================================
       FUNÇÃO PARA ATUALIZAR O TAMANHO DE TODAS AS LETRAS
       ===================================================== */

    function updateFontSize() {

        document.body.style.setProperty(
            '--font-scale',
            fontScale
        );

    }


    /* =====================================================
       AUMENTAR TODAS AS LETRAS
       ===================================================== */

    if (btnIncreaseFont) {

        btnIncreaseFont.addEventListener('click', () => {

            if (fontScale < maxFontScale) {

                fontScale += fontStep;

                fontScale =
                    Math.round(fontScale * 10) / 10;

                updateFontSize();

            }

        });

    }


    /* =====================================================
       DIMINUIR TODAS AS LETRAS
       ===================================================== */

    if (btnDecreaseFont) {

        btnDecreaseFont.addEventListener('click', () => {

            if (fontScale > minFontScale) {

                fontScale -= fontStep;

                fontScale =
                    Math.round(fontScale * 10) / 10;

                updateFontSize();

            }

        });

    }


    /* =====================================================
       MODO ESCURO
       ===================================================== */

    if (btnToggleTheme) {

        btnToggleTheme.addEventListener('click', () => {

            document.body.classList.toggle('dark-theme');


            const isDark =
                document.body.classList.contains('dark-theme');


            if (isDark) {

                btnToggleTheme.textContent =
                    '☀️ Modo Lilás';

                btnToggleTheme.setAttribute(
                    'aria-label',
                    'Ativar modo lilás'
                );

            } else {

                btnToggleTheme.textContent =
                    '🌙 Modo Escuro';

                btnToggleTheme.setAttribute(
                    'aria-label',
                    'Ativar modo escuro'
                );

            }

        });

    }


    /* =====================================================
       EFEITO DOS CARDS
       ===================================================== */

    const cards =
        document.querySelectorAll('.card');


    cards.forEach(card => {

        card.addEventListener('mouseenter', () => {

            card.style.cursor = 'pointer';

        });

    });


    /* =====================================================
       INICIA O TAMANHO PADRÃO
       ===================================================== */

    updateFontSize();

});
