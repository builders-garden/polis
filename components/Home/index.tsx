/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerDescription } from "@/components/ui/drawer";
import Scene from "../game/Scene";

const resources = [
  { name: "Wood", icon: "/assets/log1.png", amount: 1234, max: 8000 },
  { name: "Brick", icon: "/assets/brick1.png", amount: 1234, max: 8000 },
  { name: "Stone", icon: "/assets/rock1.png", amount: 1234, max: 8000 },
  { name: "Wheat", icon: "/assets/wheat1.png", amount: 1234, max: 8000 },
];

const footerButtons = [
  { name: "Inventory", icon: "📦" },
  { name: "Crafting", icon: "⚒️" },
  { name: "Map", icon: "🗺️" },
  { name: "Quests", icon: "📜" },
  { name: "Settings", icon: "⚙️" },
];

export default function Home() {
  const [openDrawer, setOpenDrawer] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-green-200 p-4 pt-20">
      <nav className="fixed top-0 left-0 right-0 flex justify-center items-center w-full bg-brown-900/80 backdrop-blur-sm h-16 p-2 z-10">
        <div className="flex gap-1">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center bg-white rounded-lg p-1 px-2 gap-1 shadow-lg"
            >
              <img className="w-6" src={resource.icon || "/placeholder.svg"} alt={resource.name} />
              <div className="text-white">
                <span className="font-bold text-black text-sm">{resource.amount}</span>
                <span className="text-[9px] text-gray-600">/{resource.max}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </nav>

      <Scene />

      <footer className="fixed bottom-0 left-0 right-0 flex justify-center items-center w-full bg-brown-900/80 backdrop-blur-sm py-2 px-6 z-10">
        <div className="flex w-full justify-between space-x-4">
          {footerButtons.map((button, index) => (
            <motion.button
              key={button.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setOpenDrawer(button.name)}
              className="bg-brown-700 hover:bg-brown-600 text-white rounded-full p-3 shadow-lg focus:outline-none"
            >
              <span className="text-2xl">{button.icon}</span>
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
