const Showcase = () => {
    return (
        <div className="flex flex-col bg-[#2F2F2F] py-20 px-20 gap-2 font-body">
            <div className="text-3xl text-white">Experience the Future of Parking</div>
            <div className="h-1 w-16 bg-[#F8D73A] rounded-full"></div>
            <div className="text-4xl text-white font-semibold pt-6">See our state-of-the-art parking systems in action through this 3d model.</div>
            <div className="mx-auto mt-20 rounded-lg" dangerouslySetInnerHTML={{__html: '<div class="sketchfab-embed-wrapper"> <iframe title="Time Machine" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="1080" height="608" src="https://sketchfab.com/models/a11c6d625e3f46dca26d6e4c4edf2a79/embed?autostart=1&ui_theme=dark&dnt=1"> </iframe> </div>'}} />
        </div>
    )
}

export default Showcase