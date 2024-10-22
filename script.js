if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('ServiceWorker registered: ', registration);
        }).catch(registrationError => {
            console.log('ServiceWorker registration failed: ', registrationError);
        });
    });
}
