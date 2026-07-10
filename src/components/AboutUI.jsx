import React from 'react'

export default function AboutUI() {
  return (
    <div className="font-mono text-gray-300">
      <div className="mb-6">
        <span className="text-[#7C3AED]">guest@shivani-lab</span>:<span className="text-[#06B6D4]">~</span> About_me :
      </div>

      <div className="space-y-4 pl-4 border-l-2 border-[#06B6D4]/30">
        <div>
          <h3 className="text-[#00FFB3] mb-1">NAME : </h3>
          <p className="text-white text-lg">Shivani Pal</p>
        </div>

        <div>
          <h3 className="text-[#00FFB3] mb-1">EDUCATION : </h3>
          <p>B.Tech in ELCE</p>
          <p className="text-gray-400 text-sm">ABES Engineering College , Ghaziabad</p>
        </div>

        <div>
          <h3 className="text-[#00FFB3] mb-1">MISSION : </h3>
          <p>To build immersive, interactive, and beautiful web experiences that bridge the gap between design and engineering.</p>
        </div>

        <div>
          <h3 className="text-[#00FFB3] mb-1">CURRENTLY LEARNING : </h3>
          <ul className="list-disc list-inside text-gray-400">
            <li>Web Development</li>
            <li>Machine Learning</li>
            <li>Data Structures and Algorithms</li>
            <li>Content Creation</li>
          </ul>
        </div>
      </div>

      <div className="mt-8">
        <span className="text-[#7C3AED]">guest@shivani-lab</span>:<span className="text-[#06B6D4]">~</span>$ <span className="animate-pulse">_</span>
      </div>
    </div>
  )
}
