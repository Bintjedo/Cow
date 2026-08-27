// JavaScript voor CowSMP Regels - Popup Functionaliteit

document.addEventListener('DOMContentLoaded', () => {
    const modalOverlay = document.getElementById('supportModal');
    const openBtn = document.getElementById('openSupport');
    const closeBtn = document.getElementById('closeSupport');

    // Functie om de popup te openen
    openBtn.addEventListener('click', () => {
        modalOverlay.classList.add('active');
    });

    // Functie om de popup te sluiten met de X knop
    closeBtn.addEventListener('click', () => {
        modalOverlay.classList.remove('active');
    });

    // Sluit de popup als de gebruiker buiten de popup klikt
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            modalOverlay.classList.remove('active');
        }
    });
});
