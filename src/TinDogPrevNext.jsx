import lady from './lady-img.jpg'
import dog1 from './dog-img.jpg'
import dog2 from './dog-img2.jpg'

export default function TinDogPrevNext() {
return(
<div className="flex justify-center flex-wrap items-center content-center md:content-stretch md:flex-row md:space-x-16 space-y-4 flex-col bg-tinder pt-[1.5rem] pb-[1.5rem]">
    <div className="inline-block">
        <div class="card card-compact md:self-stretch w-72 bg-off-white shadow-xl ">
            <figure><img src={lady} alt="Woman" /></figure>
            <div class="card-body">
                <h2 class="card-title text-tinder">My dog used to be so lonely, but with TinDog's help, they've found the love of their life.</h2>
                <em>Pebbles, New York</em>
            </div>
        </div>
    </div>
    <div class="inline-block">
        <div class="card card-compact md:self-stretch w-72 bg-off-white shadow-xl">
            <figure><img src={dog1} alt="pup 1" /></figure>
            <div class="card-body">
                <h2 class="card-title text-tinder">I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog.</h2>
                <em>Beverly, Illinois</em>
            </div>
        </div>
    </div>
    <div class="inline-block">
        <div class="card card-compact md:self-stretch w-72 bg-off-white shadow-xl">
            <figure><img src={dog2} alt="pup 2" /></figure>
            <div class="card-body">
                <h2 class="card-title text-tinder">BARK! BARK! WOOF! WOOF! BARK! BARK! WOOF! WOOF! 10/10 🙏 </h2>
                <em>Malibu, California</em>
            </div>
        </div>
    </div>
</div>
)
}