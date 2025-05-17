document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-bg');
    
    if (video) {
        // Configuración básica de video
        video.addEventListener('loadedmetadata', () => {
            console.log('Video metadata loaded');
            video.play();
        });

        // Manejo de eventos
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });

        // Control de velocidad
        const speedLevels = [0.25, 0.5, 0.75, 1, 1.25, 1.5, 2];
        let currentSpeedIndex = 2; // Índice para velocidad normal (1x)

        function changePlaybackSpeed() {
            currentSpeedIndex = (currentSpeedIndex + 1) % speedLevels.length;
            video.playbackRate = speedLevels[currentSpeedIndex];
            console.log(`Velocidad de reproducción: ${speedLevels[currentSpeedIndex]}x`);
        }

        // Establecer velocidad inicial
        video.playbackRate = speedLevels[currentSpeedIndex];

        // Añadir evento de cambio de velocidad (por ejemplo, doble clic)
        video.addEventListener('dblclick', changePlaybackSpeed);

        // Manejo de errores
        video.addEventListener('error', (e) => {
            console.error('Error en la reproducción del video:', e);
        });

        console.log('Video-speed script loaded');
    } else {
        console.error('No video element found');
    }
});
