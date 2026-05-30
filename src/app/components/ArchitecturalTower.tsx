import { motion, useTransform, MotionValue } from "motion/react";

interface TowerProps {
  scrollProgress: MotionValue<number>;
  currentFloor: number;
}

export function ArchitecturalTower({ scrollProgress, currentFloor }: TowerProps) {
  const rotateY = useTransform(scrollProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.98]);

  return (
    /* hidden klassi qo'shildi — bino endi ekranda ko'rinmaydi, lekin xatolik ham bermaydi */
    <div className="hidden fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
      <motion.div
        style={{
          rotateY,
          scale,
          transformPerspective: 2000,
        }}
        className="relative"
      >
        {/* Main Tower Structure */}
        <div className="relative w-[280px] h-[600px]">
          {/* Tower Base - Concrete Foundation */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[40px] bg-[#B5AFA4]/30 rounded-sm" />

          {/* Main Building Body */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D4CEC1]/90 via-[#E8E4DC]/95 to-[#B5AFA4]/80 border border-[#3B3A36]/20 shadow-2xl">
            {/* Subtle texture overlay */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]" />

            {/* Floor Divisions */}
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="absolute left-0 right-0 h-[1px] bg-[#3B3A36]/15"
                style={{ top: `${(i + 1) * 20}%` }}
              />
            ))}

            {/* Windows - Floor 1 */}
            <motion.div
              className="absolute top-[10%] left-1/2 -translate-x-1/2 flex gap-8"
              animate={{
                opacity: currentFloor === 0 ? 1 : 0.3,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-12 h-16 bg-[#3B3A36]/70 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-12 h-16 bg-[#3B3A36]/70 border border-[#2B2B2B]/30 shadow-inner" />
            </motion.div>

            {/* Windows - Floor 2 */}
            <motion.div
              className="absolute top-[30%] left-1/2 -translate-x-1/2 flex gap-6"
              animate={{
                opacity: currentFloor === 1 ? 1 : 0.3,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-10 h-20 bg-[#3B3A36]/75 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-10 h-20 bg-[#3B3A36]/75 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-10 h-20 bg-[#3B3A36]/75 border border-[#2B2B2B]/30 shadow-inner" />
            </motion.div>

            {/* Windows - Floor 3 */}
            <motion.div
              className="absolute top-[50%] left-1/2 -translate-x-1/2 flex gap-8"
              animate={{
                opacity: currentFloor === 2 ? 1 : 0.3,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-14 h-14 bg-[#3B3A36]/70 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-14 h-14 bg-[#3B3A36]/70 border border-[#2B2B2B]/30 shadow-inner" />
            </motion.div>

            {/* Windows - Floor 4 */}
            <motion.div
              className="absolute top-[70%] left-1/2 -translate-x-1/2 flex gap-5"
              animate={{
                opacity: currentFloor === 3 ? 1 : 0.3,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-8 h-18 bg-[#3B3A36]/80 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-8 h-18 bg-[#3B3A36]/80 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-8 h-18 bg-[#3B3A36]/80 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-8 h-18 bg-[#3B3A36]/80 border border-[#2B2B2B]/30 shadow-inner" />
            </motion.div>

            {/* Windows - Floor 5 */}
            <motion.div
              className="absolute top-[88%] left-1/2 -translate-x-1/2 flex gap-10"
              animate={{
                opacity: currentFloor === 4 ? 1 : 0.3,
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-10 h-12 bg-[#3B3A36]/65 border border-[#2B2B2B]/30 shadow-inner" />
              <div className="w-10 h-12 bg-[#3B3A36]/65 border border-[#2B2B2B]/30 shadow-inner" />
            </motion.div>

            {/* Architectural details - Vertical columns */}
            <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#3B3A36]/15" />
            <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-[#3B3A36]/15" />
            <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-[#3B3A36]/8" />
            <div className="absolute right-1/3 top-0 bottom-0 w-[1px] bg-[#3B3A36]/8" />
          </div>

          {/* Shadow gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-[#3B3A36]/10 pointer-events-none" />
        </div>

        {/* Atmospheric glow */}
        <div className="absolute -inset-20 bg-gradient-radial from-[#F5F3EF]/30 via-transparent to-transparent blur-3xl opacity-60 -z-10" />
      </motion.div>
    </div>
  );
}