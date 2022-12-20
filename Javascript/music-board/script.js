const sounds = ['applause','boo','gasp','tada','victory','wrong']

sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerHTML = sound

    btn.addEventListener('click', () => {

        //stop the sound
        stopSongs()
        document.getElementById(sound).onplay()
    })

    document.getElementById('buttons').appendChild(btn)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.onpause()
        song.currentTime = 0
    })
}