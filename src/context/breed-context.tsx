import { createContext } from 'react';

type BreedContextType = {
    breed: string;
    dogImages: string[];
};

export const BreedContext = createContext<BreedContextType>({} as BreedContextType);
