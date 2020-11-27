import React, { useEffect, useState } from 'react';

function Pagination(props) {

    const slides = props.data;
    const [active, setActive] = useState(null);

    useEffect(() => {
        setActive(slides[0]);
    });

    const onPress = slide => {
        console.log(slide);
        setActive(slide.id);
    };

    if(active === null) {
        return (
            <div>Loading</div>
        )
    }

    return (
        <div className="pagination">
            {slides.map( slide => {

                let className = 'pagination-item';
                if (props.active === slide.id-1) {
                    className += ' active-pagination';
                }

                return (
                    <div key={slide.id} className={className} onClick={() => onPress(slide)}>
                    </div>
                )
            })}
        </div>
    );
}
export default Pagination;