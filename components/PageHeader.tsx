import { motion } from 'framer-motion';

type PageHeaderProps = {
  title: string;
  subtitle: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <motion.div 
      className="text-center mb-12 sm:mb-16"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1a4162] mb-3 sm:mb-4">
        {title}
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-[#333333] max-w-3xl mx-auto">
        {subtitle}
      </p>
    </motion.div>
  );
}

