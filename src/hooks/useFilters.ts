import { useState, useCallback } from 'react';
import { Option } from '../types/vacancyTypes';

export const useFilters = () => {
    const [city, setCity] = useState<string>('');
    const [skills, setSkills] = useState<Option[]>([{
        label: 'Example Skill',
        value: 'example-skill'
    }]);

    const handleSearch = useCallback(() => {
        console.log(`City: ${city}, Skills: ${skills}`);
        // Call an API or perform filtering logic here.
    }, [city, skills]);

    const handleSetSkills = (newValue:Option) => {
        setSkills([...skills, newValue])
    }

    return { city, setCity, skills, setSkills, handleSearch, handleSetSkills };
};