import React from 'react';
import Rating from '@material-ui/lab/Rating';

function ProductRating({ }) {
    const [value, setValue] = React.useState(2);
    return (
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />
    );
}

export default ProductRating;
