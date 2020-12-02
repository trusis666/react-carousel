import React, { useEffect, useState } from 'react';

function Pagination(props) {

    const [active, setActive] = useState(0);
    const [slides, setSlides] = useState(null);

    useEffect(() => {
        setSlides(props.data);
    }, [props.data]);

    const onPress = slide => {
        setActive(slide.id);
    };

    return (
        <div className="pagination">
            {slides !== null && Object.keys(slides).map( (slide, index) => {
                let className = 'pagination-item';
                if (props.active === index) {
                    className += ' active-pagination';
                }

                return (
                    <div key={index} className={className} onClick={() => onPress(slide)}>
                    </div>
                )
            })}
        </div>
    );
}
export default Pagination;