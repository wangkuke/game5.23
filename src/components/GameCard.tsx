import { cn } from "@/lib/utils";
import { FeaturedGame, PopularGame } from "@/data/games";
import { useNavigate } from "react-router-dom";

interface GameCardProps {
  game: FeaturedGame | PopularGame;
  aspectRatio?: '4/3' | '1/1';
  showRating?: boolean;
  className?: string;
  externalLink?: string;
}

export function GameCard({ game, aspectRatio = '4/3', showRating = false, className, externalLink }: GameCardProps) {
  const navigate = useNavigate();

  return (
    <div 
      className={cn(
        "bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer",
        className
      )}
      onClick={() => externalLink ? window.location.href = externalLink : navigate(`/game/${game.id}`)}
    >
      <div className={`aspect-[${aspectRatio}] w-full overflow-hidden`}>
        <img 
          src={game.coverImage} 
          alt={game.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{game.title}</h3>
        <p className="text-sm text-gray-600 mb-2">{game.description}</p>
        {showRating && 'rating' in game && (
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <i 
                key={i} 
                className={`fa-solid fa-star ${i < game.rating ? 'text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
        )}
        {'category' in game && (
          <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full mt-2">
            {game.category}
          </span>
        )}
      </div>
    </div>
  );
}
