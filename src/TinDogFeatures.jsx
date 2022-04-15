import heart from './redheart.svg'
import smile from './smile.svg'
import check from './check-circle.svg'

export default function TinDogFeatures() {
return (
<div className="font-raleway flex flex-col lg:flex-row lg:justify-center bg-off-white">
    <section>
        <div className=" text-center py-4">
            <img src={heart} class="w-12 md:w-16 lg:w-24 inline"  /> 
            
            <h1 className="font-semibold text-[32px] lg:text-[48px] text-tinder">Easy to Use</h1>
            <p className="text-[12px] lg:text-[24px] font-medium">So easy to use, even your dog could do it.</p>
        </div>
        <div className=" text-center py-4">
            <img src={smile} class="w-12 md:w-16 lg:w-24 inline" /> 
            
            <h1 className="font-semibold text-[32px] lg:text-[48px] text-tinder">Elite Clientele</h1>
            <p className="text-[12px] lg:text-[24px] font-medium">We have all the dogs, the greatest dogs.</p>
        </div>
        <div className=" text-center py-4">
            <img src={check} class="w-12 md:w-16 lg:w-24 inline" /> 
            
            <h1 className="font-semibold text-[32px] lg:text-[48px] text-tinder">We Promise</h1>
            <p className="text-[12px] lg:text-[24px] font-medium">Find the love of your dog's life, or get your money back.</p>
        </div>
    </section>
</div>
)
}