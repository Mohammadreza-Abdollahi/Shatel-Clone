import CommentsSlider from "../sliders/CummentsSlider";
import SuggestionsSlider from "../sliders/CummentsSlider";

const Comments = () => {
    return ( 
        <>
            <section className="w-full pt-8 pb-5">
                <h2 className="text-2xl text-center text-slate-800 sans-bold">از زبان مشتریان</h2>
                <CommentsSlider/>
            </section>
        </>
     );
}
 
export default Comments;