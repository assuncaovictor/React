import React from "react";

const Quote = ({ author, children, date, url }) => (
    <blockquote cite={url}>
        <p style={{ textDecoration: "italic" }}>"{children}"</p>
        <p>
            {author}, {date}
        </p>
    </blockquote>
);

export default Quote;
