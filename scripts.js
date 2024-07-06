function toggleVisibility() {
    const hiddenContent = document.getElementById('navLinks');
    if (hiddenContent.classList.contains('hidden')) {
        hiddenContent.classList.remove('hidden');
    } else {
        hiddenContent.classList.add('hidden');
    }
}