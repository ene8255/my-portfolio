import { useEffect, useState } from 'react';
import data from '../data/data.json';
import { useParams } from 'react-router-dom';

export function useData() {
    const [ project, setProject ] = useState(null);

    const { id } = useParams();

    useEffect(() => {
        data.projects.map(project => {
            project.id == id && setProject(project);
        })
    }, [id, project]);

    return project;
}
