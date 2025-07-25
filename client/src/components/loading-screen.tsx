import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressTimer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(progressTimer);
  }, []);

  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary"
    >
      <div className="text-center max-w-md px-8">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative w-20 h-20 mx-auto mb-6"
        >
          <div className="absolute inset-0 border-4 border-accent-cyan/30 rounded-full"></div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-4 border-transparent border-t-accent-cyan rounded-full"
          />
          <div className="absolute inset-3 bg-accent-cyan/20 rounded-full flex items-center justify-center">
            <span className="text-accent-cyan font-mono font-bold text-lg">&lt;/&gt;</span>
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 via-accent-cyan to-pink-500 bg-clip-text text-transparent font-mono"
        >
          &lt;Kapil.dev/&gt;
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground mt-3 mb-6"
        >
          Loading portfolio...
        </motion.p>
        
        <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-accent-cyan to-blue-500"
            animate={{ width: `${Math.min(progress, 100)}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="text-xs text-muted-foreground mt-3"
        >
          {Math.round(Math.min(progress, 100))}% Complete
        </motion.p>
      </div>
    </motion.div>
  );
}
