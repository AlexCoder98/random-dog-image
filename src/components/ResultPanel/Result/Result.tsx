import { useContext } from "react";
import { BreedContext } from "../../../context/breed-context";

import './styles.css';

const Result = () => {
    const breedResult = useContext(BreedContext);
    const { breed, dogImages } = breedResult;

    return (
        <section className="dog-image__result">
            <h3 className="dog-image__breed-name">{breed}</h3>
            <ul className="dog-image__dog-images-list">
                {dogImages.map((img, i) => (
                    <li key={i} className="dog-image__img-wrapper">
                        <img src={img} alt={`${breed} ${i + 1}`} />
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Result;