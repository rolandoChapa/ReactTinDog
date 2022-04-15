import bizinside from './bizinsider.png'
import mashable from './mashable.png'
import techcrunch from './TechCrunch.png'
import tnw from './tnw.png'

export default function TinDogPress() {
    return (
        <div className="flex justify-center items-center content-center flex-col md:flex-row bg-tinder pt-[1.5rem] pb-[1.5rem]">
        	
	        <img class="" src={bizinside} alt="tc-logo" />
	        <img class="" src={mashable} alt="tnw-logo" />
	        <img class="scale-[.7]" src={tnw} alt="biz-insider-logo" />
	        <img class="" src={techcrunch} alt="mashable-logo" />
	    
</div>
    )
}