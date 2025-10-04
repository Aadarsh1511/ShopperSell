import { 
  Search, ShoppingCart, Heart, User, 
  LayoutGrid,Grid, Home, Shirt, Brush, Cpu, Gift, 
  Sparkles, Star, 
  MenuSquare,
  Table2,
  AppWindow,
  Menu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, 
  DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel 
} from '@/components/ui/dropdown-menu';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const location = useLocation();
  const { itemCount } = useCart();

  const categories = [
    { name: 'Home & Living', path: '/home-living', icon: <Home className="h-4 w-4 mr-2" /> },
    { name: 'Fashion', path: '/fashion', icon: <Shirt className="h-4 w-4 mr-2" /> },
    { name: 'Art & Crafts', path: '/art-crafts', icon: <Brush className="h-4 w-4 mr-2" /> },
    { name: 'Tech', path: '/tech', icon: <Cpu className="h-4 w-4 mr-2" /> },
    { name: 'Gifts', path: '/gifts', icon: <Gift className="h-4 w-4 mr-2" /> }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur border-b border-border">
      <div className="container flex h-16 items-center justify-between gap-4">
        
        {/* Left - Logo + Categories Dropdown */}
        <div className="flex items-center space-x-4 flex-shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="group">
                <Menu className="h-5 w-5 transition-transform group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="bg-background border-border shadow-lg w-64 p-2">
              <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">Categories</DropdownMenuLabel>
              {categories.map((category) => (
                <DropdownMenuItem key={category.path} asChild>
                  <Link 
                    to={category.path}
                    className="flex items-center cursor-pointer hover:bg-accent focus:bg-accent rounded-md px-2 py-1.5 text-sm"
                  >
                    {category.icon}
                    <span>{category.name}</span>
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator className="my-1" />
              <DropdownMenuLabel className="px-2 py-1.5 text-sm font-semibold">Featured</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link to="/new-arrivals" className="flex items-center hover:bg-accent px-2 py-1.5 text-sm rounded-md">
                  <Sparkles className="h-4 w-4 mr-2" />
                  <span>New Arrivals</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/best-sellers" className="flex items-center hover:bg-accent px-2 py-1.5 text-sm rounded-md">
                  <Star className="h-4 w-4 mr-2" />
                  <span>Best Sellers</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/">
            <h1 className="text-2xl font-bold text-gradient cursor-pointer whitespace-nowrap">ShopperSell</h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {categories.map((category) => (
            <Link 
              key={category.path}
              to={category.path} 
              className={`transition-colors font-medium whitespace-nowrap ${
                location.pathname === category.path 
                  ? 'text-primary' 
                  : 'text-foreground hover:text-primary'
              }`}
            >
              {category.name}
            </Link>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="flex-1 max-w-md mx-8 hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Search for anything..." 
              className="pl-10 bg-muted border-border focus:border-primary"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Link to="/wishlist">
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-5 w-5" />
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-accent text-accent-foreground text-xs rounded-full flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-background border-border shadow-lg w-48">
              <DropdownMenuItem asChild>
                <Link to="/auth" className="cursor-pointer hover:bg-accent px-2 py-1.5 text-sm rounded-md">
                  Sign In / Register
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/account" className="cursor-pointer hover:bg-accent px-2 py-1.5 text-sm rounded-md">
                  My Account
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuItem asChild>
                <Link to="/settings" className="cursor-pointer hover:bg-accent px-2 py-1.5 text-sm rounded-md">
                  Settings
                </Link>
              </DropdownMenuItem>
            
              <DropdownMenuItem asChild>
                <Link to="/profile-update" className="cursor-pointer hover:bg-accent px-2 py-1.5 text-sm rounded-md">
                  Profile Update
                </Link>
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
