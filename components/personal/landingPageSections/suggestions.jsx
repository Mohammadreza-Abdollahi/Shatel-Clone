import SuggestionsSlider from "../sliders/SuggestionsSlider";

const Suggestions = () => {
    return ( 
        <>
            <section className="w-full sug-bg">
                <h2 className="text-2xl text-center pt-16 text-slate-800 sans-bold">پیشنهاد ها</h2>
                <SuggestionsSlider/>
            </section>
        </>
     );
}
 
export default Suggestions;