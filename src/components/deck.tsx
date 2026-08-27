"use client";

import { useState } from "react";
import { Children } from "react";
import { motion } from "motion/react";

type DeckProps = {
  children: React.ReactNode;
};

const positions = ["left", "center", "right"] as const;

export default function Deck({ children }: DeckProps) {
  const cards = Children.toArray(children);
  const [cardOrder, setCardOrder] = useState(() =>
    cards.map((_, index) => index),
  );

  function moveToCenter(index: number) {
    const centerIndex = cardOrder.indexOf(index);
    if (centerIndex === 1) return;

    const nextOrder = [...cardOrder];
    [nextOrder[centerIndex], nextOrder[1]] = [
      nextOrder[1],
      nextOrder[centerIndex],
    ];
    setCardOrder(nextOrder);
  }

  return (
    <div className="relative mx-[calc(50%-50vw)] my-4 h-[clamp(30rem,65vw,30rem)] overflow-x-clip ">
      {cardOrder.slice(0, 3).map((cardIndex, positionIndex) => {
        const card = cards[cardIndex];
        const position = positions[positionIndex];
        const isCenter = position === "center";
        const offset =
          position === "left" ? "-108%" : position === "right" ? "12%" : "-50%";
        const rotation =
          position === "left" ? -16 : position === "right" ? 16 : 0;

        return (
          <motion.button
            key={cardIndex}
            type="button"
            aria-label={isCenter ? "Current project" : "View project"}
            className={`absolute top-16 left-1/2 w-[min(62%,24rem)] text-left ${
              isCenter ? "z-20 cursor-default" : "z-10 cursor-pointer"
            }`}
            animate={{
              x: offset,
              rotate: rotation,
              scale: isCenter ? 1 : 0.92,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            whileHover={isCenter ? { y: -8, scale: 1.04 } : { scale: 0.96 }}
            onClick={() => moveToCenter(cardIndex)}
          >
            {card}
          </motion.button>
        );
      })}
    </div>
  );
}
