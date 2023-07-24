/* import React from 'react'; */
import './Container.css';
import type { ContainerProps } from "./Container.types";

const containerStyles: ContainerProps = {
    wrapper: "container",
};

export function Container () {
    return (
        <div className={containerStyles.wrapper}>
            <h1>Container</h1>
        </div>
    );
}