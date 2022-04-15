import apple from './apple-logo-svgrepo-com.svg'
import android from './icons8-google-play.svg'
export default function TinDogCTA() {
return(
<div className="flex justify-center items-center content-center flex-col bg-off-white ">
    <div className="inline-block">
        <h3 className="text-4xl  font-bold text-center pt-[1.5rem] pb-[1.5rem] text-tinder">
            Find the True Love of Your Dog's Life Today.
        </h3>
    </div>
    <div className="self-auto pb-[1.5rem] ">
        <button class="btn btn-outline  ">
            <img src={apple} alt="apple logo" className="h-6 w-6" />
            <span className="font-bold font-sans text-tinder">Download</span>
        </button>
        <button class="btn btn-outline ">
            <img src={android} alt="android logo" className="h-6 w-6" />
            <span className="font-bold font-sans text-tinder">Download</span>
        </button>
    </div>
    
</div>
)
}