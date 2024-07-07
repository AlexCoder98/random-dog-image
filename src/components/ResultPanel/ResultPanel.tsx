import { useContext } from "react";

import Result from "./Result/Result";
import { BreedContext } from "../../context/breed-context";

import './styles.css';

const ResultPanel = () => {
    const breedResult = useContext(BreedContext);
    const { breed, dogImages } = breedResult;

    return (
        <div className="dog-image__result-panel">
            {breed && dogImages ? (
                <Result />
            ) : (
                <h2 className="dog-image__no-result-h2">No results yet</h2>
            )}
        </div>
    )
}

export default ResultPanel;