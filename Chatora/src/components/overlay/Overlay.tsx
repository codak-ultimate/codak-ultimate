import { motion } from "framer-motion";
import { ReactNode, useEffect } from "react";
import "./styles.css";
import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
interface OverlayProps {
  isOpen: boolean;
  children?: ReactNode;
  text: string;
}

export function Overlay({ isOpen, children, text }: OverlayProps) {
  const variants = {
    open: { opacity: 1, display: "block" },
    closed: { opacity: 0, display: "none" },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-50"
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 0.5 }}
      
    >
      <div className="absolute inset-0 flex items-center justify-center">
          <Box sx={{ display: "flex" }}>
            <CircularProgress className="text-white" size={70}/>
          </Box>
          {children}
      </div>
    </motion.div>
  );
}
