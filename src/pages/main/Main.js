
import JejuWeather from "./JejuWeather";
import Recommend from "./Recommend";
import MainVisual from "./MainVisual";
import JejuFestival from "./Popular";
import Art from "./Art";
import Nobel from "./nobel";
import JejuStage from "./JejuStage";
import MainVisualSlide from "./MainVisualSlide";
import Popular from "./Popular";
import Children from "./Children";

export default function Main() {

    return (
        <div className='w-full'>
            <MainVisualSlide/>
            <Recommend/>
            <Nobel/>
            <Art/>
            <Popular />
            <Children/>
        </div>
    );
};