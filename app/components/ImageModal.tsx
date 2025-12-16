"use client";

import { motion } from "framer-motion";

interface ImageModalProps {
  image: string;
  onClose: () => void;
}

export default function ImageModal({ image, onClose }: ImageModalProps) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.img
        src={image}
        alt="Preview"
        className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}
