import { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';

export function useData() {
    const [ project, setProject ] = useState(null);

    const { id } = useParams();
    const numId = Number(id);

    useEffect(() => {
        data.projects.map(project => {
            return project.id === numId && setProject(project);
        })
    }, [numId, project]);

    return project;
}
