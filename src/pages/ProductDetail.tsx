// import { useParams, Link } from "react-router-dom";
// import { ArrowLeft, ShoppingCart } from "lucide-react";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";
// import { products } from "@/data/products";
// import { toast } from "sonner";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const product = products.find((p) => p.id === id);

//   if (!product) {
//     return (
//       <div className="min-h-screen flex flex-col">
//         <Navbar />
//         <main className="flex-1 flex items-center justify-center">
//           <div className="text-center">
//             <h1 className="text-2xl font-bold mb-4">Product not found</h1>
//             <Button asChild>
//               <Link to="/products">Back to Products</Link>
//             </Button>
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
//   }

//   const handleAddToCart = () => {
//     toast.success("Added to cart!", {
//       description: `${product.name} has been added to your cart.`,
//     });
//   };

//   return (
//     <div className="min-h-screen flex flex-col">
//       <Navbar />

//       <main className="flex-1 py-12">
//         <div className="container mx-auto px-4">
//           {/* Back Button */}
//           <Button variant="ghost" asChild className="mb-8">
//             <Link to="/products">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Products
//             </Link>
//           </Button>

//           {/* Product Details */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             {/* Product Image */}
//             <div className="space-y-4">
//               <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             </div>

//             {/* Product Info */}
//             <div className="space-y-6">
//               <div>
//                 <Badge className="mb-4">{product.category}</Badge>
//                 <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-primary">
//                   {product.name}
//                 </h1>
//                 <p className="text-3xl font-bold text-primary">
//                   ₹{product.price.toLocaleString()}
//                 </p>
//               </div>

//               <div className="border-t pt-6">
//                 <h2 className="font-serif text-xl font-semibold mb-3">
//                   Description
//                 </h2>
//                 <p className="text-muted-foreground leading-relaxed">
//                   {product.description}
//                 </p>
//               </div>

//               <div className="border-t pt-6">
//                 <h2 className="font-serif text-xl font-semibold mb-3">
//                   Product Details
//                 </h2>
//                 <ul className="space-y-2 text-muted-foreground">
//                   <li>• Handcrafted Aari work embroidery</li>
//                   <li>• Premium quality fabric</li>
//                   <li>• Includes matching blouse piece</li>
//                   <li>• Dry clean recommended</li>
//                   <li>• Made to order: 2-3 weeks delivery</li>
//                 </ul>
//               </div>

//               <div className="border-t pt-6 space-y-4">
//                 <Button size="lg" className="w-full" onClick={handleAddToCart}>
//                   <ShoppingCart className="mr-2 h-5 w-5" />
//                   Add to Cart
//                 </Button>
//                 <p className="text-sm text-muted-foreground text-center">
//                   Free shipping on orders above ₹5000
//                 </p>
//               </div>

//               <div className="border-t pt-6 bg-muted/30 p-6 rounded-lg">
//                 <h3 className="font-semibold mb-2">Need help?</h3>
//                 <p className="text-sm text-muted-foreground mb-4">
//                   Contact us for size consultations, custom orders, or any
//                   questions about this saree.
//                 </p>
//                 <Button variant="outline" asChild>
//                   <Link to="/contact">Contact Us</Link>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default ProductDetail;

import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product not found</h1>
            <Button asChild>
              <Link to="/products">Back to Products</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // WhatsApp redirect
  const handleBuyNow = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in buying "${
        product.name
      }" priced at ₹${product.price.toLocaleString()}.`
    );
    window.open(`https://wa.me/919944381709?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1 py-10">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </Link>
          </Button>

          {/* Product Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative aspect-[3/3.5] overflow-hidden rounded-lg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4">{product.category}</Badge>
                <h1 className="font-serif text-3xl font-bold mb-3 text-primary">
                  {product.name}
                </h1>
                <p className="text-2xl font-semibold text-primary">
                  ₹{product.price.toLocaleString()}
                </p>
              </div>

              <div className="border-t pt-4">
                <h2 className="font-serif text-lg font-semibold mb-2">
                  Description
                </h2>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {product.description}
                </p>
              </div>

              <div className="border-t pt-4">
                <h2 className="font-serif text-lg font-semibold mb-2">
                  Product Details
                </h2>
                <ul className="space-y-1.5 text-muted-foreground text-sm">
                  <li>• Handcrafted Aari work embroidery</li>
                  <li>• Premium quality fabric</li>
                  <li>• Includes matching blouse piece</li>
                  <li>• Dry clean recommended</li>
                  <li>• Made to order: 2–3 weeks delivery</li>
                </ul>
              </div>

              <div className="border-t pt-4 space-y-3">
                <Button
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700"
                  onClick={handleBuyNow}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Buy Now on WhatsApp
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Free shipping on orders above ₹5000
                </p>
              </div>

              <div className="border-t pt-4 bg-muted/30 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Need help?</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Contact us for size consultations, custom orders, or any
                  questions about this saree.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
