export default function TinDogNavBar() {
return (
    <div className="flex flex-row flex-wrap justify-center gap-4 lg:gap-12 py-6 font-raleway text-sm bg-tinder lg:text-4xl tracking-tighter">
        <a className="z-10 font-bold text-off-white lowercase">tinDog</a>
        <a href="#contact" className="link link-hover text-lexicon hover:text-off-white lowercase">Contact</a>
        <a href="#pricing" className="link link-hover text-lexicon hover:text-off-white lowercase">Pricing</a>
        <a href="#download" className="link link-hover text-lexicon hover:text-off-white lowercase">Download</a>
    </div>
)
}