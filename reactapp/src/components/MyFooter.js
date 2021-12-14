import React from "react";
import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const MyFooter = () => {
    return (
        <Box>
            <h1 className="py-3 ml-5 mb-0" style={{
                color: "white"
            }}>
                StriveBooks <span style={{
                    color: "grey",
                    fontSize: "0.5em",
                    textAlign: "right"
                }}>Read and Enjoy</span>
            </h1>
        </Box>
    );
};
export default MyFooter;