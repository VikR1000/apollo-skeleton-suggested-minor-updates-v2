import React, {useState} from 'react';
import {useQuery, gql} from '@apollo/client';

const GET_LINK = gql`
    query GetLink($id: ID!) {
        getLink(id: $id) {
            url
        }
    }
`;

export const Hello = () => {
    const [counter, setCounter] = useState(0);
    const id='1234'
    const {loading, error, data} = useQuery(GET_LINK, {variables: { id }});

    if (loading) return <p>Loading...</p>;
    if (error) return `<p>${error}:(</p>`;

    const increment = () => {
        setCounter(counter + 1);
    };

    return (
        <div>
            <button onClick={increment}>Click Me</button>
            <p>You've pressed the button {counter} times.</p>

            <h3>{data.getLink.url}</h3>
            <a href={data.getLink.url}>Visit Link</a>
        </div>
    );
};
