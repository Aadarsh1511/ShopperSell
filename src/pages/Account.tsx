import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { User, Package, Heart, MapPin, Settings, LayoutGrid, Star, ShoppingCart, Bell, Edit } from 'lucide-react';

import productMugImage from '@/assets/product-mug.jpg';
import productJewelryImage from '@/assets/product-jewelry.jpg';
import productScarfImage from '@/assets/product-scarf.jpg';
import fashionImage from '@/assets/category-fashion.jpg';
import homeKitchenImage from '@/assets/category-home-kitchen.jpg';

const Account = () => {
  const recentOrders = [
    { id: "ORD-001", date: "2024-01-15", status: "Delivered", total: 89.99, items: 2 },
    { id: "ORD-002", date: "2024-01-10", status: "In Transit", total: 156.50, items: 3 },
    { id: "ORD-003", date: "2024-01-05", status: "Processing", total: 42.00, items: 1 },
  ];

  const addresses = [
    { id: 1, type: "Home", name: "John Doe", address: "123 Main St, New York, NY 10001", isDefault: true },
    { id: 2, type: "Work", name: "John Doe", address: "456 Office Ave, New York, NY 10002", isDefault: false },
  ];

  const userStats = { followers: 1250, following: 340, itemsLoved: 280 };

  const collections = [
    { id: 1, name: "Cozy Morning Essentials", items: 12, image: productMugImage },
    { id: 2, name: "Minimalist Silver Jewelry", items: 8, image: productJewelryImage },
    { id: 3, name: "Autumn Wardrobe Picks", items: 25, image: fashionImage },
    { id: 4, name: "Handmade Home Decor", items: 15, image: homeKitchenImage },
  ];

  const lovedItems = [
    { id: 1, title: "Handwoven Alpaca Wool Scarf", image: productScarfImage },
    { id: 2, title: "Handcrafted Ceramic Coffee Mug", image: productMugImage },
    { id: 3, title: "Sterling Silver Minimalist Necklace", image: productJewelryImage },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container py-4 md:py-8 px-4">
        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-12">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-background ring-2 ring-primary">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">John Doe</h1>
            <p className="text-muted-foreground mt-1">@johndoe</p>
            <p className="max-w-xl text-foreground/80 mt-3 text-sm leading-relaxed">
              Curator of handcrafted goods and lover of all things vintage. Finding beauty in the everyday.
            </p>
            <div className="flex justify-center md:justify-start items-center gap-6 mt-4">
              <div className="text-center">
                <p className="font-bold text-lg">{userStats.itemsLoved}</p>
                <p className="text-xs text-muted-foreground">Items Loved</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">{userStats.followers.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">Followers</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-lg">{userStats.following}</p>
                <p className="text-xs text-muted-foreground">Following</p>
              </div>
            </div>
          </div>
          <Button>Edit Profile</Button>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-7 h-auto">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
            <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
            <TabsTrigger value="addresses">Addresses</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="profile-update" className="flex items-center gap-1">
              <Edit className="h-3 w-3" /> <span>Profile Update</span>
            </TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader><CardTitle>Featured Collections</CardTitle></CardHeader>
                  <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {collections.slice(0, 2).map(c => (
                      <div key={c.id} className="relative group overflow-hidden rounded-lg">
                        <img src={c.image} alt={c.name} className="w-full h-48 object-cover group-hover:scale-105 transition-transform" />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-0 left-0 p-4">
                          <h3 className="text-white font-bold text-lg">{c.name}</h3>
                          <p className="text-white/90 text-sm">{c.items} items</p>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
              <div>
                <Card>
                  <CardHeader><CardTitle>Recently Loved</CardTitle></CardHeader>
                  <CardContent className="space-y-4">
                    {lovedItems.map(item => (
                      <div key={item.id} className="flex items-center gap-4">
                        <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded-md" />
                        <p className="text-sm font-medium flex-1">{item.title}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Orders */}
          <TabsContent value="orders" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Order History</CardTitle>
                <CardDescription>View and track your recent orders</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentOrders.map(order => (
                  <div key={order.id} className="flex flex-col sm:flex-row justify-between p-4 border rounded-lg gap-3">
                    <div>
                      <h4 className="font-medium">Order {order.id}</h4>
                      <p className="text-sm text-muted-foreground">{order.date} • {order.items} items</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant={order.status === 'Delivered' ? 'default' : order.status === 'In Transit' ? 'secondary' : 'outline'}>
                        {order.status}
                      </Badge>
                      <span className="font-medium">${order.total}</span>
                      <Button variant="outline" size="sm">View Details</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Collections */}
          <TabsContent value="collections" className="mt-6">
            <Card>
              <CardHeader><CardTitle>My Collections</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {collections.map(c => (
                  <div key={c.id} className="relative group overflow-hidden rounded-lg border">
                    <img src={c.image} alt={c.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-bold text-xl">{c.name}</h3>
                      <p className="text-white/90 text-sm">{c.items} items</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Wishlist */}
          <TabsContent value="wishlist" className="mt-6">
            <Card>
              <CardHeader><CardTitle>Wishlist</CardTitle></CardHeader>
              <CardContent className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[...lovedItems, ...collections].map((item, i) => (
                  <Card key={i} className="group">
                    <CardContent className="p-0">
                      <div className="relative aspect-square">
                        <img src={item.image} alt={'title' in item ? item.title : item.name} className="w-full h-full object-cover rounded-t-lg" />
                        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="icon" variant="secondary" className="h-8 w-8"><ShoppingCart className="h-4 w-4" /></Button>
                          <Button size="icon" variant="secondary" className="h-8 w-8"><Heart className="h-4 w-4" /></Button>
                        </div>
                      </div>
                      <div className="p-3">
                        <h4 className="text-sm font-medium truncate">{'title' in item ? item.title : item.name}</h4>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Addresses */}
          <TabsContent value="addresses" className="mt-6">
            <Card>
              <CardHeader><CardTitle>Shipping Addresses</CardTitle></CardHeader>
              <CardContent className="space-y-4">
                {addresses.map(addr => (
                  <div key={addr.id} className="p-4 border rounded-lg">
                    <div className="flex flex-col sm:flex-row justify-between gap-3">
                      <div className="flex-1">
                        <h4 className="font-medium">{addr.type}</h4>
                        {addr.isDefault && <Badge variant="secondary">Default</Badge>}
                        <p className="text-sm text-muted-foreground">{addr.name}</p>
                        <p className="text-sm text-muted-foreground">{addr.address}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">Edit</Button>
                        <Button variant="outline" size="sm">Delete</Button>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">Add New Address</Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings */}
          <TabsContent value="settings" className="mt-6">
            <Card>
              <CardHeader><CardTitle>Account Settings</CardTitle></CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium mb-4">Notifications</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between"><span>Order updates</span><Button variant="outline" size="sm">Enable</Button></div>
                    <div className="flex justify-between"><span>Promotional emails</span><Button variant="outline" size="sm">Disable</Button></div>
                    <div className="flex justify-between"><span>New arrivals</span><Button variant="outline" size="sm">Enable</Button></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-4">Security</h4>
                  <div className="space-y-3">
                    <Button variant="outline">Change Password</Button>
                    <Button variant="outline">Two-Factor Authentication</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          {/* Profile Update */}
          <TabsContent value="profile-update" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Update Profile</CardTitle>
                <CardDescription>Change your profile information and avatar.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center gap-4">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User Avatar" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button variant="outline">Change Avatar</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="john.doe@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Bio</Label>
                  <Input id="bio" placeholder="Write something about yourself..." defaultValue="Vintage lover and curator." />
                </div>
                <Button className="w-full">Save Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>




        </Tabs>
      </main>

      <Footer />
    </div>
  );
};

export default Account;
