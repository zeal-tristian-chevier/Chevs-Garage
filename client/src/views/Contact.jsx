import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";

const Contact = (props) => {
    const [theme, setTheme] = useState(props.theme);
    const [isSent, setIsSent] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        setTheme(props.theme);
    }, [props.theme]);

    let themeOpposite = "black";
    if (theme === "light") {
        themeOpposite = "black";
        document.body.classList.add("bg-light");
        document.body.classList.remove("bg-dark");
    } else {
        themeOpposite = "white";
        document.body.classList.add("bg-dark");
        document.body.classList.remove("bg-light");
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "name":
                setFormData({
                    ...formData,
                    name: e.target.value,
                });
                if (e.target.value.length < 1) {
                    setErrors({
                        ...errors,
                        name: "Name is required ",
                    });
                }
                if (e.target.value.length > 0) {
                    setErrors({
                        ...errors,
                        name: "",
                    });
                }
                break;
            case "email":
                setFormData({
                    ...formData,
                    email: e.target.value,
                });
                let regex =
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                let email = e.target.value.toLowerCase();
                setErrors({
                    ...errors,
                    email: "Invalid Email ",
                });
                if (e.target.value.length < 1) {
                    setErrors({
                        ...errors,
                        email: "Email is required",
                    });
                }
                if (email.match(regex)) {
                    setErrors({
                        ...errors,
                        email: "",
                    });
                }
                break;
            case "message":
                setFormData({
                    ...formData,
                    message: e.target.value,
                });
                if (e.target.value.length > 0) {
                    setErrors({
                        ...errors,
                        message: "Message must be at least 10 characters",
                    });
                }
                if (e.target.value.length >= 10) {
                    setErrors({
                        ...errors,
                        message: "",
                    });
                }
                break;
            default:
                break;
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (formData.name.length === 0) {
            setErrors({
                name: "Name is required",
            });
        }
        if (formData.email.length === 0) {
            setErrors({
                email: "Email is required",
            });
        }
        if (formData.message.length === 0) {
            setErrors({
                message: "Message is required",
            });
        }
        if (
            errors.name.length === 0 &&
            errors.email.length === 0 &&
            errors.message.length === 0 &&
            formData.name.length > 0 &&
            formData.email.length > 0 &&
            formData.message.length > 0
        ) {
            emailjs
                .sendForm(
                    "service_9jqamxm",
                    "template_ff4q1f6",
                    e.target,
                    "ZNqOJhp6SxlmkYlrL"
                )
                .then(
                    (result) => {
                        setIsSent(true);
                    },
                    (error) => {
                        console.log(error);
                    }
                );
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        }
    };

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center mt-3">
                <div className="row flex-wrap">
                    <div className="col-lg-7 justify-content-center d-flex flex-column p-5 pt-0">
                        <div className="mb-3">
                            {document.body.clientWidth > 768 ? (
                                <h1 className={`display-3 ${theme}`}>
                                    How can we Help?
                                </h1>
                            ) : (
                                <h1 className={`display-4 ${theme} mb-3`}>
                                    How can we Help?
                                </h1>
                            )}
                            <h5 className={`h4 ${theme}`}>
                                Email or call us for any concerns.
                            </h5>
                        </div>
                        <form onSubmit={sendEmail} method="POST">
                            {document.body.clientWidth > 768 ? (
                                <>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="name"
                                                placeholder="Name"
                                                onChange={handleChange}
                                                value={formData.name}
                                            />
                                            {errors.name ? (
                                                <p style={{ color: "red" }}>
                                                    {errors.name}
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>

                                        <div className="col">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="email"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                value={formData.email}
                                            />
                                            {errors.email ? (
                                                <p style={{ color: "red" }}>
                                                    {errors.email}
                                                </p>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                    <div className="d-flex mb-3 justify-content-around align-items-center">
                                        <h3 className={`${theme}`}>
                                            Choose Two:
                                        </h3>
                                        <div className="form-check">
                                            <input
                                                className={`${theme} form-check-input`}
                                                type="checkbox"
                                                value="Quality"
                                                name="quality"
                                                id="quality"
                                            />
                                            <label
                                                className={`${theme} form-check-label`}
                                                htmlFor="quality"
                                            >
                                                Quality
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className={`${theme} form-check-input`}
                                                type="checkbox"
                                                value="Cheap"
                                                name="cheap"
                                                id="cheap"
                                            />
                                            <label
                                                className={`${theme} form-check-label`}
                                                htmlFor="cheap"
                                            >
                                                Cheap
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className={`${theme} form-check-input`}
                                                type="checkbox"
                                                value="Fast"
                                                name="fast"
                                                id="fast"
                                            />
                                            <label
                                                className={`${theme} form-check-label`}
                                                htmlFor="fast"
                                            >
                                                Fast
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            cols="30"
                                            rows="5"
                                            placeholder="Enter a message..."
                                            name="message"
                                            onChange={handleChange}
                                            value={formData.message}
                                        ></textarea>
                                        {errors.message ? (
                                            <p style={{ color: "red" }}>
                                                {errors.message}
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            className="btn w-50 p-2"
                                            style={{
                                                backgroundColor:
                                                    "rgb(13,43,228)",
                                                color: "white",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Send {">"}
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            onChange={handleChange}
                                            value={formData.name}
                                        />
                                        {errors.name ? (
                                            <p style={{ color: "red" }}>
                                                {errors.name}
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div className="mb-3">
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Email"
                                            name="email"
                                            onChange={handleChange}
                                            value={formData.email}
                                        />
                                        {errors.email ? (
                                            <p style={{ color: "red" }}>
                                                {errors.email}
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>

                                    <div className="d-flex mb-3 justify-content-around align-items-center">
                                        <div className="form-check">
                                            <input
                                                className={`${theme} form-check-input`}
                                                type="checkbox"
                                                value="Quality"
                                            />
                                            <label
                                                className={`${theme} form-check-label`}
                                            >
                                                Quality
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className={`${theme} form-check-input`}
                                                type="checkbox"
                                                value="Cheap"
                                            />
                                            <label
                                                className={`${theme} form-check-label`}
                                            >
                                                Cheap
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input
                                                className={`${theme} form-check-input`}
                                                type="checkbox"
                                                value="Fast"
                                            />
                                            <label
                                                className={`${theme} form-check-label`}
                                            >
                                                Fast
                                            </label>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <textarea
                                            className="form-control"
                                            name="message"
                                            id=""
                                            cols="30"
                                            rows="5"
                                            placeholder="Enter a message..."
                                            onChange={handleChange}
                                            value={formData.message}
                                        ></textarea>
                                        {errors.message ? (
                                            <p style={{ color: "red" }}>
                                                {errors.message}
                                            </p>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                    <div>
                                        <button
                                            className="btn w-100"
                                            style={{
                                                backgroundColor:
                                                    "rgb(13,43,228)",
                                                color: "white",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Send {">"}
                                        </button>
                                    </div>
                                </>
                            )}
                        </form>
                    </div>
                    {document.body.clientWidth > 768 && isSent ? (
                        <div
                            className={`bg-${themeOpposite} position-absolute w-100`}
                            style={{ top: "25%", opacity: "85%" }}
                        >
                            <div className="text-center p-5">
                                <h1 className="text-success">
                                    Your message was sent!
                                </h1>
                                <p className="text-success">
                                    We will get back to you as soon as possible!
                                </p>
                                <button
                                    className="btn btn-success mt-3"
                                    onClick={() => setIsSent(false)}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {document.body.clientWidth < 768 && isSent ? (
                        <div
                            className={`bg-${themeOpposite} position-absolute w-100`}
                            style={{ top: "40%", opacity: "85%" }}
                        >
                            <div className="text-center p-5">
                                <h1 className="text-success">
                                    Your message was sent!
                                </h1>
                                <p className="text-success">
                                    We will get back to you as soon as possible!
                                </p>
                                <button
                                    className="btn btn-success mt-3"
                                    onClick={() => setIsSent(false)}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    ) : (
                        ""
                    )}
                    {document.body.clientWidth > 768 ? (
                        <div className="col-lg-5 text-center justify-center d-flex flex-column p-5 pt-0">
                            <div className="mb-4 mt-4 flex flex-col items-center">
                                <h1 className={`display-5 ${theme} mb-3`}>
                                    Contact Info
                                </h1>
                                <p className={`${theme}`}>
                                    We believe in getting the help you need.
                                    Please feel free to email or call us with
                                    any questions.
                                </p>
                                <img
                                    className="image-fluid mt-3 mb-3"
                                    style={{ width: "300px", height: "150px" }}
                                    src={require("./imgs/icontransparent2.png")}
                                    alt=""
                                />

                                <div>
                                    <h3 className={`${theme}`}>
                                        chevs.llc@gmail.com
                                    </h3>
                                    <h3 className={`${theme}`}>817-360-5322</h3>
                                    <a
                                        className={`${theme}`}
                                        href="https://www.google.com/maps/place/13261+Willow+Creek+Dr,+Haslet,+TX+76052/@32.9711953,-97.4037582,17.35z/data=!4m13!1m7!3m6!1s0x864dddb7bf8a84c1:0x815f369a67b19062!2sWillow+Creek+Dr,+Texas+76052!3b1!8m2!3d32.972291!4d-97.4036024!3m4!1s0x864dddc8367db65f:0x44c464fd2f79efea!8m2!3d32.9708021!4d-97.4033607"
                                        target={"_blank"}
                                        rel="noreferrer"
                                    >
                                        <box-icon
                                            color={themeOpposite}
                                            type="solid"
                                            name="been-here"
                                        ></box-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="col-lg-5 text-center d-flex flex-column pt-5">
                            <h1 className={`display-5 ${theme} mb-3`}>
                                Contact Info
                            </h1>
                            <p className={`${theme}`}>
                                We believe in getting you the help you need.
                                Please feel free to email or call us with any
                                questions.
                            </p>
                            <div className="text-center">
                                <img
                                    className="image-fluid mt-3 mb-3"
                                    style={{ width: "300px", height: "150px" }}
                                    src={require("./imgs/icontransparent2.png")}
                                    alt=""
                                />
                            </div>
                            <div className="mb-3">
                                <h3 className={`${theme}`}>
                                    chevs.llc@gmail.com
                                </h3>
                                <h3 className={`${theme}`}>817-360-5322</h3>
                                <a
                                    className={`${theme}`}
                                    href="https://www.google.com/maps/place/13261+Willow+Creek+Dr,+Haslet,+TX+76052/@32.9711953,-97.4037582,17.35z/data=!4m13!1m7!3m6!1s0x864dddb7bf8a84c1:0x815f369a67b19062!2sWillow+Creek+Dr,+Texas+76052!3b1!8m2!3d32.972291!4d-97.4036024!3m4!1s0x864dddc8367db65f:0x44c464fd2f79efea!8m2!3d32.9708021!4d-97.4033607"
                                    target={"_blank"}
                                    rel="noreferrer"
                                >
                                    <box-icon
                                        color={themeOpposite}
                                        type="solid"
                                        name="been-here"
                                    ></box-icon>
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
export default Contact;
