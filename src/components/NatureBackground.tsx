
import React from 'react';
import { Leaf, Flower2, TreePine, Droplets, Sun, Cloud } from 'lucide-react';

const NatureBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Enhanced floating nature elements */}
      <div className="absolute inset-0">
        {/* Top layer - Sky elements */}
        <div className="absolute top-10 left-[10%] w-16 h-16 opacity-20">
          <Sun className="w-full h-full text-yellow-400 gentle-sway" />
        </div>
        <div className="absolute top-20 right-[15%] w-12 h-12 opacity-15">
          <Cloud className="w-full h-full text-blue-300 wind-sway" />
        </div>
        
        {/* Middle layer - Trees and large elements */}
        <div className="absolute top-[20%] left-[5%] w-20 h-20 opacity-10">
          <TreePine className="w-full h-full text-green-600 gentle-sway" style={{animationDelay: '1s'}} />
        </div>
        <div className="absolute bottom-[30%] right-[8%] w-24 h-24 opacity-12">
          <TreePine className="w-full h-full text-green-700 gentle-sway" style={{animationDelay: '2s'}} />
        </div>
        
        {/* Floating leaves */}
        <div className="absolute top-[15%] left-[25%] w-8 h-8 opacity-25">
          <Leaf className="w-full h-full text-green-500 leaf-fall" />
        </div>
        <div className="absolute top-[40%] right-[30%] w-6 h-6 opacity-20">
          <Leaf className="w-full h-full text-green-400 leaf-fall" style={{animationDelay: '1.5s'}} />
        </div>
        <div className="absolute bottom-[40%] left-[35%] w-7 h-7 opacity-22">
          <Leaf className="w-full h-full text-emerald-500 leaf-fall" style={{animationDelay: '3s'}} />
        </div>
        <div className="absolute top-[60%] left-[60%] w-5 h-5 opacity-18">
          <Leaf className="w-full h-full text-green-600 leaf-fall" style={{animationDelay: '4s'}} />
        </div>
        
        {/* Flowers */}
        <div className="absolute top-[25%] right-[20%] w-10 h-10 opacity-30">
          <Flower2 className="w-full h-full text-pink-400 flower-bloom" />
        </div>
        <div className="absolute bottom-[25%] left-[20%] w-8 h-8 opacity-25">
          <Flower2 className="w-full h-full text-purple-400 flower-bloom" style={{animationDelay: '2s'}} />
        </div>
        <div className="absolute top-[50%] left-[70%] w-9 h-9 opacity-28">
          <Flower2 className="w-full h-full text-yellow-400 flower-bloom" style={{animationDelay: '1s'}} />
        </div>
        
        {/* Water droplets */}
        <div className="absolute top-[35%] left-[15%] w-4 h-4 opacity-35">
          <Droplets className="w-full h-full text-blue-400 dewdrop" />
        </div>
        <div className="absolute bottom-[50%] right-[25%] w-3 h-3 opacity-30">
          <Droplets className="w-full h-full text-cyan-400 dewdrop" style={{animationDelay: '2.5s'}} />
        </div>
        
        {/* Additional scattered leaves */}
        <div className="absolute top-[70%] right-[45%] w-6 h-6 opacity-20">
          <Leaf className="w-full h-full text-lime-500 leaf-fall" style={{animationDelay: '5s'}} />
        </div>
        <div className="absolute bottom-[60%] left-[45%] w-4 h-4 opacity-15">
          <Leaf className="w-full h-full text-teal-500 leaf-fall" style={{animationDelay: '6s'}} />
        </div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 via-transparent to-emerald-50/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-mint-green/5 to-transparent"></div>
      </div>
    </div>
  );
};

export default NatureBackground;
