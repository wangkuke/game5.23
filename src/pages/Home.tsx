import { useState } from "react";
import { featuredGames, popularGames, gameCategories } from "@/data/games";
import { GameCard } from "@/components/GameCard";
import { CategoryCard } from "@/components/CategoryCard";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 模拟搜索功能
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* 导航栏 */}
      <nav className="bg-white shadow-sm py-4 px-6 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            游戏乐园
          </h1>
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">首页</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">游戏</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">分类</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">关于</a>
          </div>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            发现你的下一款最爱游戏
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            探索数千款游戏，找到适合你的那一款
          </p>
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
            <div className="flex shadow-lg rounded-lg overflow-hidden">
              <input
                type="text"
                placeholder="搜索游戏..."
                className="flex-grow px-4 py-3 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 transition-colors"
              >
                <i className="fa-solid fa-magnifying-glass" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <main className="flex-grow container mx-auto px-4 py-12">
        {/* 特色游戏 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">特色游戏</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredGames.map((game, index) => (
              <GameCard 
                key={game.id} 
                game={game} 
                externalLink={index === 0 ? 'https://9696mm.club' : undefined}
              />
            ))}
          </div>
        </section>

        {/* 游戏分类 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">游戏分类</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {gameCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* 热门游戏 */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 mb-8">热门游戏</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGames.map((game) => (
              <GameCard key={game.id} game={game} aspectRatio="1/1" showRating />
            ))}
          </div>
        </section>
      </main>

      {/* 页脚 */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center text-gray-600">
          <p>© 2025 游戏乐园. 保留所有权利.</p>
        </div>
      </footer>
    </div>
  );
}