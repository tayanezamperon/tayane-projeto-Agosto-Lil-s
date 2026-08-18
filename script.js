document.addEventListener('DOMContentLoaded', () => {
    const btnIncreaseFont = document.getElementById('btn-increase-font');
    const btnDecreaseFont = document.getElementById('btn-decrease-font');
    const btnToggleTheme = document.getElementById('btn-toggle-theme');

    let currentFontSize = 16;

    // Aumentar Fonte
    if (btnIncreaseFont) {
        btnIncreaseFont.addEventListener('click', () => {
            if (currentFontSize < 24) {
                currentFontSize += 2;
                document.body.style.fontSize = currentFontSize + 'px';
            }
        });
    }

    // Diminuir Fonte
    if (btnDecreaseFont) {
        btnDecreaseFont.addEventListener('click', () => {
            if (currentFontSize > 12) {
                currentFontSize -= 2;
                document.body.style.fontSize = currentFontSize + 'px';
            }
        });
    }

    // Alternar Tema (Modo Lilás / Modo Escuro)
    if (btnToggleTheme) {
        btnToggleTheme.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
            const isDark = document.body.classList.contains('dark-theme');
            btnToggleTheme.textContent = isDark ? '☀️ Modo Lilás' : '🌙 Modo Escuro';
        });
    }
});