import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HomeAndLiving from "./pages/HomeAndLiving";
import Fashion from "./pages/Fashion";
import ArtAndCrafts from "./pages/ArtAndCrafts";
import Tech from "./pages/Tech";
import Gifts from "./pages/Gifts";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Auth from "./pages/Auth";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

// Category Pages
import LivingRoom from "./pages/categories/LivingRoom";
import Kitchen from "./pages/categories/Kitchen";
import Bedroom from "./pages/categories/Bedroom";
import Bathroom from "./pages/categories/Bathroom";
import GardenOutdoor from "./pages/categories/GardenOutdoor";
import StorageOrganization from "./pages/categories/StorageOrganization";
import WomensFashion from "./pages/categories/WomensFashion";
import MensFashion from "./pages/categories/MensFashion";
import VintageRetro from "./pages/categories/VintageRetro";
import JewelryAccessories from "./pages/categories/JewelryAccessories";
import SustainableFashion from "./pages/categories/SustainableFashion";
import PlusSize from "./pages/categories/PlusSize";
import PaintingsPrints from "./pages/categories/PaintingsPrints";
import HandmadeCrafts from "./pages/categories/HandmadeCrafts";
import CraftSupplies from "./pages/categories/CraftSupplies";
import Sculpture3DArt from "./pages/categories/Sculpture3DArt";
import DigitalArt from "./pages/categories/DigitalArt";
import DIYKits from "./pages/categories/DIYKits";
import TechGadgets from "./pages/categories/TechGadgets";
import GiftIdeas from "./pages/categories/GiftIdeas";
import Product from "./pages/Product";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home-living" element={<HomeAndLiving />} />
          <Route path="/fashion" element={<Fashion />} />
          <Route path="/art-crafts" element={<ArtAndCrafts />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/account" element={<Account />} />
          
          {/* Category Routes */}
          <Route path="/category/living-room" element={<LivingRoom />} />
          <Route path="/category/kitchen" element={<Kitchen />} />
          <Route path="/category/bedroom" element={<Bedroom />} />
          <Route path="/category/bathroom" element={<Bathroom />} />
          <Route path="/category/garden-outdoor" element={<GardenOutdoor />} />
          <Route path="/category/storage-organization" element={<StorageOrganization />} />
          <Route path="/category/womens-fashion" element={<WomensFashion />} />
          <Route path="/category/mens-fashion" element={<MensFashion />} />
          <Route path="/category/vintage-retro" element={<VintageRetro />} />
          <Route path="/category/jewelry-accessories" element={<JewelryAccessories />} />
          <Route path="/category/sustainable-fashion" element={<SustainableFashion />} />
          <Route path="/category/plus-size" element={<PlusSize />} />
          <Route path="/category/paintings-prints" element={<PaintingsPrints />} />
          <Route path="/category/handmade-crafts" element={<HandmadeCrafts />} />
          <Route path="/category/craft-supplies" element={<CraftSupplies />} />
          <Route path="/category/sculpture-3d-art" element={<Sculpture3DArt />} />
          <Route path="/category/digital-art" element={<DigitalArt />} />
          <Route path="/category/diy-kits" element={<DIYKits />} />
          <Route path="/category/tech-gadgets" element={<TechGadgets />} />
          <Route path="/category/gift-ideas" element={<GiftIdeas />} />
          <Route path="/product/:id" element={<Product />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
