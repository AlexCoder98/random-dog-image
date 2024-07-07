import { useState } from 'react';

import Button from './components/Button/Button';
import ResultPanel from './components/ResultPanel/ResultPanel';

import { BreedContext } from './context/breed-context';

import { BreedType, DogImagesType } from './types';

import { breeds } from './helpers/breeds-list';

import './App.css';

const App = () => {
  const [breed, setBreed] = useState<BreedType | ''>('');
  const [dogImages, setDogImages] = useState({} as DogImagesType)

  const fetchDogImages = async () => {
    const randomBreed = breeds[Math.floor(Math.random() * breeds.length)];
    let finalBreedName = randomBreed.includes('/') ? randomBreed.split('/').join(' ') : randomBreed;
    setBreed(finalBreedName);

    const url = `https://dog.ceo/api/breed/${randomBreed}/images`;
    try {
      const res = await fetch(url);
      const data: DogImagesType = await res.json();
      setDogImages(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div id="dog-image" className="dog-image">
      <header className="dog-image__header">
        <h1 className="dog-image__title">Random Dog Image App</h1>
        <div className="dog-image__btn-container">
          <Button
            className={'generate-dog-image'}
            content={'Generate a Dog Image'}
            method={fetchDogImages}
          />
        </div>
      </header>
      <hr />
      <main className="dog-image__main">
        <BreedContext.Provider value={{ breed: breed, dogImages: dogImages.message }}>
          <ResultPanel />
        </BreedContext.Provider>
      </main>
    </div>
  );
}

export default App;
