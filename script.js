document.getElementById('cameraBtn').addEventListener('click', async () => {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.getElementById('cameraFeed');
        video.srcObject = stream;
    } catch (error) {
        alert('Error accessing camera: ' + error.message);
    }
});

document.getElementById('locationBtn').addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const locationOutput = document.getElementById('locationOutput');
                locationOutput.textContent = `Your location: Latitude ${position.coords.latitude}, Longitude ${position.coords.longitude}`;
            },
            (error) => {
                alert('Error getting location: ' + error.message);
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
});
