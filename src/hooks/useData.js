import { useEffect, useState } from 'react';
import data from '../data/projects.json';
import { useParams } from 'react-router-dom';

// data.json 파일에서 특정 id를 가진 데이터만 가져오는 함수
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
