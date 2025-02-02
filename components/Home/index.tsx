/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";

const resources = [
  { name: "Wood", icon: "/assets/resources/log1.png", amount: 1234, max: 8000 },
  { name: "Brick", icon: "/assets/resources/brick1.png", amount: 1234, max: 8000 },
  { name: "Stone", icon: "/assets/resources/rock1.png", amount: 1234, max: 8000 },
  { name: "Wheat", icon: "/assets/resources/wheat2.png", amount: 1234, max: 8000 },
];

const footerButtons = [
  { name: "Inventory", icon: "📦" },
  { name: "Crafting", icon: "⚒️" },
  { name: "Map", icon: "🗺️" },
  { name: "Quests", icon: "📜" },
  { name: "Settings", icon: "⚙️" },
];

const overlayPoints = [
  { id: 1, value: 12, position: { top: "58%", left: "24%" } },
  { id: 2, value: 8, position: { top: "33%", left: "85%" } },
  { id: 3, value: 15, position: { top: "67%", left: "62%" } },
];

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  return (
    <div
      className="flex relative min-h-screen w-full items-center justify-center"
      style={{
        backgroundImage: "url('/assets/village/village6.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-center w-full bg-brown-900/80 backdrop-blur-sm h-14 p-2 z-10">
        <div className="flex justify-between items-center w-full">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex justify-center items-center gap-0.5"
            >
              <img className="w-5" src={resource.icon || "/placeholder.svg"} alt={resource.name} />
              <div className="text-white">
                <span className="font-bold text-white text-[13px]">{resource.amount}</span>
                <span className="text-[9px] text-white">/{resource.max}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </nav>

      {overlayPoints.map((point) => (
        <div
          key={point.id}
          className="absolute bg-white shadow-lg border-2 border-black rounded-full px-1.5 py-1
          transform -translate-x-1/2 -translate-y-1/2 text-xs cursor-pointer
          hover:scale-110 transition-transform"
          style={{
            top: point.position.top,
            left: point.position.left,
          }}
        >
          {point.value}
        </div>
      ))}

      <audio autoPlay loop>
        <source src="/assets/music/adventure-music.mp3" type="audio/mp3" />
      </audio>

      <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full bg-brown-900/80 backdrop-blur-sm py-2 px-6 z-10">
        <div className="flex w-full justify-between space-x-4">
          {footerButtons.map((button) => (
            <motion.button
              key={button.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenDrawer(button.name)}
              className="bg-brown-700 hover:bg-brown-600 text-white rounded-full p-2 shadow-lg focus:outline-none"
            >
              <span className="text-xl">{button.icon}</span>
            </motion.button>
          ))}
        </div>
      </footer>

      <AnimatePresence>
        {openDrawer && (
          <Drawer open={true} onOpenChange={() => setOpenDrawer(null)}>
            <DrawerContent className="bg-brown-800 h-[91%] text-white">
              <DrawerHeader>
                <DrawerTitle className="text-2xl font-bold">{openDrawer}</DrawerTitle>
                <DrawerDescription className="text-gray-300">
                  This is the {openDrawer.toLowerCase()} drawer content.
                </DrawerDescription>
              </DrawerHeader>
              <div className="p-4">
                <p className="text-lg">Content for {openDrawer} goes here.</p>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </AnimatePresence>
    </div>
  );
}
