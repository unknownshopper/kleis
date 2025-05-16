document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.video-bg');
    if (video) {
        let isReverse = true;
        let lastTime = video.duration;

        // Función para reproducir en reversa
        function playReverse() {
            console.log('Attempting to play in reverse');
            video.pause();
            video.currentTime = video.duration;
            isReverse = true;

            // Simular reproducción en reversa manualmente
            function reversePlayback() {
                if (isReverse && video.currentTime > 0) {
                    video.currentTime -= 0.05; // Ajusta esta velocidad según sea necesario
                    requestAnimationFrame(reversePlayback);
                } else if (video.currentTime <= 0) {
                    playForward();
                }
            }

            reversePlayback();
        }

        // Función para reproducir hacia adelante
        function playForward() {
            console.log('Attempting to play forward');
            video.pause();
            video.currentTime = 0;
            isReverse = false;

            // Simular reproducción hacia adelante manualmente
            function forwardPlayback() {
                if (!isReverse && video.currentTime < video.duration) {
                    video.currentTime += 0.05; // Ajusta esta velocidad según sea necesario
                    requestAnimationFrame(forwardPlayback);
                } else if (video.currentTime >= video.duration) {
                    playReverse();
                }
            }

            forwardPlayback();
        }

        // Comenzar en reversa
        playReverse();

        // Error handling
        video.addEventListener('error', function(e) {
            console.error('Video error:', e);
        });

        console.log('Video-speed script loaded');
    } else {
        console.error('No video element found');
    }
});
