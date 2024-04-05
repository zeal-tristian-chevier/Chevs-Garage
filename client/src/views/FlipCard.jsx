import React, { useState } from "react";
import { Card } from "@mui/material";

const FlipCard = (props) => {
    const [flipCard, setFlipCard] = useState(false);

    return (
        <>
            {flipCard ? (
                <Card
                    className="col-lg-3 p-0 m-3"
                    onMouseEnter={() => setTimeout(setFlipCard(true), 1000)}
                    onMouseLeave={() => setFlipCard(false)}
                    onTouchStart={() => {
                        if (flipCard === true) {
                            setFlipCard(false);
                        } else {
                            setFlipCard(true);
                        }
                    }}
                >
                    <img
                        className="card-img"
                        src={require(`${props.project.beforeImgURL}`)}
                        alt=""
                    />
                    <div className="text-center mt-3">
                        <h3>BEFORE</h3>
                        <p className="">{props.project.name}</p>
                    </div>
                </Card>
            ) : (
                <Card
                    className="col-lg-3 p-0 m-3"
                    onMouseEnter={() => setFlipCard(true)}
                    onMouseLeave={() => setFlipCard(false)}
                    onTouchStart={() => {
                        if (flipCard === true) {
                            setFlipCard(false);
                        } else {
                            setFlipCard(true);
                        }
                    }}
                >
                    <img
                        className="card-img"
                        src={require(`${props.project.afterImgURL}`)}
                        alt=""
                    />
                    <div className="text-center mt-3">
                        <h3>AFTER</h3>
                        <p className="">{props.project.name}</p>
                    </div>
                </Card>
            )}
        </>
    );
};
export default FlipCard;
