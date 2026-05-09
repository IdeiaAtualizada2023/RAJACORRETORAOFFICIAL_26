/**
 * Performance Optimizer
 * Delays the loading of non-critical third-party scripts to improve initial page load speed.
 */

window.addEventListener('load', function() {
    // Delay in milliseconds before loading third-party scripts
    const SCRIPT_DELAY = 3500; 

    const loadThirdPartyScripts = () => {
        if (window.scriptsLoaded) return;
        window.scriptsLoaded = true;

        console.log('Loading third-party scripts...');

        // 1. Leadster (Neurolead)
        if (window.neuroleadId) {
            const script = document.createElement('script');
            script.src = "https://cdn.leadster.com.br/neurolead/neurolead.min.js";
            script.charset = "UTF-8";
            script.defer = true;
            document.head.appendChild(script);
        }

        // 2. Facebook Pixel (if not already loaded by index.html)
        if (!window.fbq) {
             // Basic init logic if needed, but usually it's already in the HTML
        }

        // 3. Any other scripts that were previously blocking
    };

    // Load after delay
    const timeoutId = setTimeout(loadThirdPartyScripts, SCRIPT_DELAY);

    // Also load on first user interaction to ensure responsiveness
    const interactionEvents = ['mousedown', 'mousemove', 'keydown', 'touchstart', 'scroll'];
    const triggerLoad = () => {
        loadThirdPartyScripts();
        interactionEvents.forEach(event => window.removeEventListener(event, triggerLoad));
        clearTimeout(timeoutId);
    };

    interactionEvents.forEach(event => window.addEventListener(event, triggerLoad, { passive: true }));
});
