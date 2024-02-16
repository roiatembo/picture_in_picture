const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt to select media stream and pass to video element
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        //catch error
    }
}
button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true;
    //start picture in picture
    await videoElement.requestPictureInPicture();
    // Enable Button
    button.disabled = false;
});
//On Load
selectMediaStream();