import React from 'react';

function ChildComponents(props) {
    // Function to update the parent component when a button is clicked
    const handleClick = () => {
        props.updateMessage('New message from child component');
    }

    return (
        <div>
            <button onClick={handleClick}>Update message in parent component</button>
        </div>
    );
}

export default ChildComponents;
