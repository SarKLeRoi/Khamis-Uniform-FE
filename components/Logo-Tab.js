import { motion } from "framer-motion";
import Image from "next/image";
const fadeInUp = {
  hidden: { opacity: 0, y: 50, scaleY: 1.2 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

export default function LogoTab() {
  return (
    <motion.div
      className="logo-tab-section"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <Image
        src="/images/logo-white.png"
        alt="Triangle Logo"
        className="homepage-triangle-svg"
        width={100}
        height={100}
      />
    </motion.div>
  );
}
