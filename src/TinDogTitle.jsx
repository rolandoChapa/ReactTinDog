import pup from './pup.jpg'
import apple from './apple-logo-svgrepo-com.svg'
import android from './icons8-google-play.svg'
export default function TinDogTitle() {
return (
<div className="font-raleway bg-tinder grid grid-cols-2 justify-center">
    <div className="text-center">
        <div class="mockup-phone scale-[0.38] md:scale-[1] lg:scale-[1.2] -my-40 md:my-0 lg:my-24 -ml-20 md:ml-0">
            <div class="camera"></div>
            <div class="display ">
                <div class="artboard artboard-demo phone-1 ">
                    <img src={pup} alt="hot Dog" class="grow" />
                </div>
            </div>
        </div>
    </div>
    <div className="">
        <div class="flex flex-col gap-2 py-8 md:py-20 md:leading-[4.5rem] lg:leading-[10rem]">
        <div className="text-center grow ">
            <span className="text-2xl md:text-[60px] lg:text-[120px] font-extrabold text-off-white">Meet new and interesting dogs nearby.</span>
        </div>
        	
        <button class="btn btn-outline ml-5 mr-5 lg:ml-48 lg:mr-48">
            <img src={apple} alt="apple logo" className="h-6 w-6" />
            <span className="font-bold font-sans text-off-white">Download</span>
        </button>

        <button class="btn btn-outline ml-5 mr-5 lg:ml-48 lg:mr-48">
            <img src={android} alt="android logo" className="h-6 w-6" />
            <span className="font-bold font-sans text-off-white">Download</span>
        </button>
        </div>
    </div>
</div>
)
}