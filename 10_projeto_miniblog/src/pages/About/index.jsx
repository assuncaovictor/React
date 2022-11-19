import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import React from "react";

const About = () => {
    return (
        <Box>
            <Typography variant="h5" component="h1">
                Sobre o Mini{" "}
                <Typography variant="h5" component="span" fontWeight={900} textTransform="uppercase">
                    blog
                </Typography>
            </Typography>
            <Box sx={{ margin: (theme) => `${theme.spacing(3)} 0` }}>
                <Typography variant="body1">
                    Este projeto consiste em um blog feito com React no front-end e Firebase no back-end
                </Typography>
            </Box>

            <Link href="https://github.com/assuncaovictor/React" target="_blank">
                Ver no github
            </Link>
        </Box>
    );
};

export default About;
