import React, { useEffect, useState, useRef } from 'react';
import Pagination from './Pagination';

function Carousel(props) {

    const componentRef = useRef();
    const [slides, setSlides] = useState([]);
    const [activeId, setActiveId] = useState(0);
    const [x, setX] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchMove, setTouchMove] = useState(0);
    const [width, setWidth] = useState(0);
    const [dragging, setDragging] = useState(false);

    useEffect(() => {
        
        if(componentRef.current) {
            setSlides(componentRef.current.children);
        }
    }, [componentRef.current]);

    useEffect(() => {
        if(props.autoPlay) {
            if(slides.length !== 0) {
                autoPlay();
            }
        }
    }, [slides]);

    useEffect(() => {
        if(activeId == slides.length) {
            setX(0);
            setActiveId(0);
        } else {
            setX(activeId * width);
        }
    }, [activeId]);

    const handleTouchStart = (event) => {
        setTouchStart(event.touches[0].clientX);
        setWidth(componentRef.current.offsetWidth / slides.length);
    };

    const handleTouchMove = (event) => {
        setTouchMove(event.touches[0].clientX);
        setX(activeId* width + (touchStart - touchMove));
    };

    const handleTouchEnd = (event) => {
        const moved = touchStart - touchMove;
        if(moved > width/2) {
            setActiveId(activeId => activeId + 1);
            setX(activeId * width);
        } else if(moved < 0 && activeId !== 0) {
            setActiveId(activeId => activeId - 1);
            setX(activeId * width);
        } else {
            setActiveId(activeId);
            setX(activeId * width);
        }
    };

    const handleMouseDown = (event) => {
        setDragging(true);
        setTouchStart(event.clientX);
        setWidth(componentRef.current.offsetWidth / slides.length);
    };

    const handleMouseMove = (event) => {
        setTouchMove(event.clientX);
        if(dragging) {
            setX(activeId* width + (touchStart - touchMove));
        }
    };

    const handleMouseUp = (event) => {
        if(dragging) {
            const moved = touchStart - touchMove;
            if(moved > width/2) {
                setActiveId(activeId => activeId + 1);
                setX(activeId * width);
            } else if(moved < 0 && activeId !== 0) {
                setActiveId(activeId => activeId - 1);
                setX(activeId * width);
            } else {
                setActiveId(activeId);
                setX(activeId * width);
            }
        }
        setDragging(false);
    };

    const handleMouseLeave = (event) => {
        if(dragging) {
            const moved = touchStart - touchMove;
            if(moved > width/2) {
                setActiveId(activeId => activeId + 1);
                setX(activeId * width);
            } else if(moved < 0 && activeId !== 0) {
                setActiveId(activeId => activeId - 1);
                setX(activeId * width);
            } else {
                setActiveId(activeId);
                setX(activeId * width);
            }
        }
        setDragging(false);
    };

    const goToNext = () => {
        setWidth(componentRef.current.offsetWidth / slides.length);
        setActiveId(activeId => activeId + 1);
        setX(activeId * width);
    };

    const goToPrevious = () => {
        if(activeId !== 0) {
            setWidth(componentRef.current.offsetWidth / slides.length);
            setActiveId(activeId => activeId - 1);
            setX(activeId * width);
        }
    };

    const autoPlay = () => {
        setTimeout(() => {
            setWidth(componentRef.current.offsetWidth / slides.length);
            setActiveId(activeId => activeId + 1);
            setX(activeId * width);
            autoPlay();
        }, 3000);
    };

    return (
        <div className="carousel-container">
            <div 
                ref={componentRef}
                onTouchStart={touchStartEvent => handleTouchStart(touchStartEvent)}
                onTouchMove={touchMoveEvent => handleTouchMove(touchMoveEvent)}
                onTouchEnd={() => handleTouchEnd()}
                onMouseDown={mouseDownEvent => handleMouseDown(mouseDownEvent)}
                onMouseMove={mouseMoveEvent => handleMouseMove(mouseMoveEvent)}
                onMouseUp={() => handleMouseUp()}
                onMouseLeave={() => handleMouseLeave()}
                style={{ transform: "translateX(-" + x + "px)", display: "flex", transition: 'transform 0.6s' }}
            >
                {props.children}
            </div>
            {props.showArrows &&
                <div className="arrow-nav">
                    <a id="next" onClick={() => goToNext()} >{">"}</a>
                    <a id="prev" onClick={() => goToPrevious()} >{"<"}</a>
                </div>
            }
            {props.showPagination &&
                <Pagination data={slides} active={activeId}/>
            }
        </div>
    );
}
export default Carousel;