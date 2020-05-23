import React, { useState, useRef, useEffect, cloneElement } from 'react'

export default function Carousel(props) {
    const [active, setActive] = useState(0);
    let scrollInterval = null;
    const style = {
        carousel: {
            position: 'relative'
        },
        carouselItem: {
            position: 'absolute',
            visibility: 'hidden'
        },
        visible: {
            visibility: 'visible'
        }
    };

    useEffect(() => {
        scrollInterval = setTimeout(() => {
            const { carouselItems, ...rest } = props;
            setActive((active + 1) % carouselItems.length);
        }, 2000);
    });
    const { carouselItems, ...rest } = props;
    return (
        <div style={style.carousel}>
            {carouselItems.map((item, index) => {
                const activeStyle = active === index ? style.visible : {};
                return cloneElement(item, {
                    ...rest,
                    style: {
                        ...style.carouselItems,
                        ...activeStyle
                    }
                })
            })}
        </div>
    )
}