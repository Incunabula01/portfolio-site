"use client";
import { ReactElement, useEffect, useState } from 'react';
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

import Spinner from '../spinner';

interface CarouselProps {
    alt: string;
    src: string;
};

type CarouselArray = Array<ReactElement<CarouselProps>>;

function Arrow(props: {
    disabled: boolean
    left?: boolean
    onClick: (e: any) => void
}) {
    const disabled = props.disabled ? " arrow--disabled" : ""
    return (
        <svg
            onClick={props.onClick}
            className={`arrow ${props.left ? "arrow--left fill-cyan-600" : "arrow--right  fill-cyan-600"
                } ${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    )
}

function Carousel({ children }: { children: CarouselArray }) {
    const [carouselImages, setCarouselImages] = useState<JSX.Element[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        slides: {
            spacing: 15
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true);
        },
    });

    useEffect(() => {
        if (children && carouselImages.length === 0) {
            const mapImagesToJSX = (children: CarouselArray): JSX.Element[] => {
                const result: JSX.Element[] = [];
                let index = 0;
                children.forEach(element => {
                    if (typeof element !== 'string') {
                        index++;
                        const { alt, src } = element.props;
                        result.push(

                            <div key={alt} className={`keen-slider__slide number-slide${index}`}>
                                <img src={src} alt={alt} />
                            </div>

                        );
                    }
                })

                return result;
            }
            setCarouselImages(mapImagesToJSX(children));

        }
    }, [children]);

    useEffect(() => {
        if (carouselImages.length > 0) {
            instanceRef?.current?.update();
        }
    }, [carouselImages]);

    if (carouselImages.length > 0) {
        return (
            <div className="relative">
                <div ref={sliderRef} className="keen-slider">
                    {carouselImages}
                </div>

                {loaded && instanceRef.current && (
                    <>
                        <Arrow
                            left
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.prev()
                            }
                            disabled={currentSlide === 0}
                        />

                        <Arrow
                            onClick={(e: any) =>
                                e.stopPropagation() || instanceRef.current?.next()
                            }
                            disabled={
                                currentSlide ===
                                instanceRef.current.track.details?.slides.length - 1
                            }
                        />
                    </>
                )}

            </div>
        )
    }

    return (
        <Spinner />
    );
}

export default Carousel;