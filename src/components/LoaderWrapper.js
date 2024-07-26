import React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

// Define keyframes for the animations
const circleOuter135 = keyframes`
  0% { stroke-dashoffset: 25; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 301; }
  80% { stroke-dashoffset: 276; }
  100% { stroke-dashoffset: 276; }
`;

const circleMiddle6123 = keyframes`
  0% { stroke-dashoffset: 17; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 204; }
  80% { stroke-dashoffset: 187; }
  100% { stroke-dashoffset: 187; }
`;

const circleInner162 = keyframes`
  0% { stroke-dashoffset: 9; }
  25% { stroke-dashoffset: 0; }
  65% { stroke-dashoffset: 106; }
  80% { stroke-dashoffset: 97; }
  100% { stroke-dashoffset: 97; }
`;

const textAnimation76 = keyframes`
  0% { clip-path: inset(0 100% 0 0); }
  50% { clip-path: inset(0); }
  100% { clip-path: inset(0 0 0 100%); }
`;

const LoaderWrapper = ({ open, children }) => {
  return (
    <>
      {open && (
        <Box
          id="wifi-loader"
          sx={{
            "--background": "rgb(220, 161, 0)",
            "--front-color": "rgb(220, 161, 0)",
            "--back-color": "rgba(220, 161, 0, 0.5)",
            "--text-color": "rgba(220, 161, 0, 0.9)",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              component="svg"
              className="circle-outer"
              viewBox="0 0 86 86"
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="circle"
                className="back"
                cx="43"
                cy="43"
                r="40"
                sx={{
                  fill: "none",
                  strokeWidth: "6px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transform: "rotate(-100deg)",
                  transformOrigin: "center",
                  stroke: "var(--back-color)",
                  strokeDasharray: "62.75 188.25",
                  animation: `${circleOuter135} 1.8s ease infinite 0.3s`,
                }}
              />
              <Box
                component="circle"
                className="front"
                cx="43"
                cy="43"
                r="40"
                sx={{
                  fill: "none",
                  strokeWidth: "6px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transform: "rotate(-100deg)",
                  transformOrigin: "center",
                  stroke: "var(--front-color)",
                  strokeDasharray: "62.75 188.25",
                  animation: `${circleOuter135} 1.8s ease infinite 0.15s`,
                }}
              />
            </Box>

            <Box
              component="svg"
              className="circle-middle"
              viewBox="0 0 60 60"
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="circle"
                className="back"
                cx="30"
                cy="30"
                r="27"
                sx={{
                  fill: "none",
                  strokeWidth: "6px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transform: "rotate(-100deg)",
                  transformOrigin: "center",
                  stroke: "var(--back-color)",
                  strokeDasharray: "42.5 127.5",
                  animation: `${circleMiddle6123} 1.8s ease infinite 0.25s`,
                }}
              />
              <Box
                component="circle"
                className="front"
                cx="30"
                cy="30"
                r="27"
                sx={{
                  fill: "none",
                  strokeWidth: "6px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transform: "rotate(-100deg)",
                  transformOrigin: "center",
                  stroke: "var(--front-color)",
                  strokeDasharray: "42.5 127.5",
                  animation: `${circleMiddle6123} 1.8s ease infinite 0.1s`,
                }}
              />
            </Box>

            <Box
              component="svg"
              className="circle-inner"
              viewBox="0 0 34 34"
              sx={{
                position: "absolute",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                component="circle"
                className="back"
                cx="17"
                cy="17"
                r="14"
                sx={{
                  fill: "none",
                  strokeWidth: "6px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transform: "rotate(-100deg)",
                  transformOrigin: "center",
                  stroke: "var(--back-color)",
                  strokeDasharray: "22 66",
                  animation: `${circleInner162} 1.8s ease infinite 0.2s`,
                }}
              />
              <Box
                component="circle"
                className="front"
                cx="17"
                cy="17"
                r="14"
                sx={{
                  fill: "none",
                  strokeWidth: "6px",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  transform: "rotate(-100deg)",
                  transformOrigin: "center",
                  stroke: "var(--front-color)",
                  strokeDasharray: "22 66",
                  animation: `${circleInner162} 1.8s ease infinite 0.05s`,
                }}
              />
            </Box>

            <Box
              className="text"
              sx={{
                position: "absolute",
                bottom: "-40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textTransform: "lowercase",
                fontWeight: 500,
                fontSize: "14px",
                letterSpacing: "0.2px",
                "&::before": {
                  content: '"Loading..."',
                  color: "var(--text-color)",
                },
                "&::after": {
                  content: '"Loading..."',
                  color: "var(--front-color)",
                  animation: `${textAnimation76} 3.6s ease infinite`,
                  position: "absolute",
                  left: 0,
                },
              }}
            />
          </Box>
        </Box>
      )}
      {children}
    </>
  );
};

export default LoaderWrapper;
