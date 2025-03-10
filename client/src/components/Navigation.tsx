import { useLocation, useRoute } from "wouter";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigation = () => {
  const [location, setLocation] = useLocation();

  // Define the navigation order with organized categories
  const routes = [
    // 1. Company Purpose
    { path: "/", name: "COMPANY OVERVIEW" },
    { path: "/founder-vision", name: "FOUNDER & VISION" },
    
    // 2. Current Problem
    { path: "/supply-chain-challenges", name: "SUPPLY CHAIN CHALLENGES" },
    
    // 3. Solution
    { path: "/solution-overview", name: "SOLUTION OVERVIEW" },
    { path: "/dual-market-strategy", name: "DUAL MARKET STRATEGY" },
    
    // 4. Why Now
    { path: "/why-now", name: "WHY NOW" },
    
    // 5. Market Size
    { path: "/market-opportunity", name: "MARKET OPPORTUNITY" },
    
    // 6. Competition
    { path: "/competitive-landscape", name: "COMPETITIVE LANDSCAPE" },
    
    // 7. Product in more detail
    { path: "/defense-application", name: "DEFENSE APPLICATION" },
    { path: "/commercial-application", name: "COMMERCIAL APPLICATION" },
    { path: "/defense-user-experience", name: "DEFENSE USER EXPERIENCE" },
    { path: "/commercial-solution-showcase", name: "COMMERCIAL SOLUTION SHOWCASE" },
    { path: "/commercial-user-experience", name: "COMMERCIAL USER EXPERIENCE" },
    { path: "/token-economics", name: "TOKEN ECONOMICS" },
    { path: "/shell-token-architecture", name: "SHELL TOKEN ARCHITECTURE" },
    
    // 8. Business Model
    { path: "/early-traction", name: "EARLY TRACTION" },
    { path: "/business-model", name: "BUSINESS MODEL" },
    { path: "/go-to-market-strategy", name: "GO TO MARKET STRATEGY" },
    
    // 9. Financials
    { path: "/financial-projections", name: "FINANCIAL PROJECTIONS" },
    { path: "/development-progress", name: "DEVELOPMENT PROGRESS" },
    { path: "/roadmap", name: "ROADMAP" },
    
    // 10. Closing
    { path: "/call-to-action", name: "CALL TO ACTION" }
  ];

  // Find current index
  const currentIndex = routes.findIndex(route => route.path === location);

  // Calculate prev/next paths
  const prevPath = currentIndex > 0 ? routes[currentIndex - 1].path : routes[routes.length - 1].path;
  const nextPath = currentIndex < routes.length - 1 ? routes[currentIndex + 1].path : routes[0].path;

  const navigateToPrev = () => setLocation(prevPath);
  const navigateToNext = () => setLocation(nextPath);

  return (
    <nav className="fixed inset-x-0 top-1/2 -translate-y-1/2 z-50 pointer-events-none">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <button 
          onClick={navigateToPrev}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:border-purple-400"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <button 
          onClick={navigateToNext}
          className="pointer-events-auto flex items-center justify-center w-12 h-12 bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:border-purple-400"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
      
      <div className="fixed bottom-6 left-0 right-0 flex justify-center items-center">
        <div className="bg-white border border-gray-200 py-2 px-4 text-xs text-gray-600 font-mono tracking-wider shadow-sm">
          {currentIndex + 1} / {routes.length}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;