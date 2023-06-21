import React, { useMemo } from 'react';

export function FilteredList({ list }) {
    const filterList = useMemo(() => {
        return list.filter(el => el.age > 18)
    }, [list])

    return (
        <div>
            <h1>Lista</h1>
            <ul>
                {filterList.map(el => (
                    <li key={el.id}> {el.name} {el.age}</li>
                ))}
            </ul>
        </div>
    );
}

