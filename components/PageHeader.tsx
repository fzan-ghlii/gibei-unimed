// components/PageHeader.tsx
'use client';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
      <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a4162] mb-3">{title}</h1>
      <p className="text-lg text-[#333333] max-w-2xl mx-auto">{subtitle}</p>
    </motion.div>
  );
}
