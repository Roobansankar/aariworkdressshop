export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Royal Maroon Aari Work Saree",
    category: "Traditional",
    price: 4500,
    description:
      "Exquisite hand-embroidered Aari work on premium silk with intricate floral patterns. Features traditional zari border and pallu with detailed craftwork. Perfect for weddings and special occasions.",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    featured: true,
  },
  {
    id: "2",
    name: "Golden Peacock Print Chudi",
    category: "Printed",
    price: 3200,
    description:
      "Beautiful peacock motif printed chudi saree with golden Aari embellishments. Lightweight and comfortable for all-day wear. Stunning color combination that stands out.",
    image:
      "https://i.pinimg.com/1200x/e7/19/b0/e719b03b6c9054c2e32fa5339f985430.jpg",
    featured: true,
  },
  {
    id: "3",
    name: "Elegant Cream Bridal Saree",
    category: "Bridal",
    price: 8500,
    description:
      "Premium bridal collection featuring extensive Aari work throughout. Heavy embroidery on pallu and border with stone work. Includes matching blouse piece with intricate design.",
    image:
      "https://i.pinimg.com/736x/33/0d/c0/330dc0b869ed00d025d996d5820bea38.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Traditional Red Festival Saree",
    category: "Festival",
    price: 3800,
    description:
      "Classic red saree with traditional Aari work patterns. Perfect for festivals and celebrations. Features beautiful border work and lightweight fabric.",
    image:
      "https://i.pinimg.com/736x/4d/01/00/4d0100ecb272ed59e401737348a784ba.jpg",
  },
  {
    id: "5",
    name: "Teal Blue Designer Chudi",
    category: "Designer",
    price: 4200,
    description:
      "Contemporary design meets traditional craftsmanship. Teal blue base with contrasting gold Aari work. Modern cut with traditional embroidery techniques.",
    image:
      "https://i.pinimg.com/1200x/16/d3/06/16d306d4cc0835329d777c4176f67489.jpg",
  },
  {
    id: "6",
    name: "Pink Floral Print Saree",
    category: "Printed",
    price: 2800,
    description:
      "Soft pink saree with delicate floral prints and subtle Aari work accents. Perfect for daytime events and casual gatherings. Comfortable cotton-silk blend.",
    image:
      "https://i.pinimg.com/1200x/a0/58/a1/a058a1d6dad55f4d1cc346b7f78de907.jpg",
  },
  {
    id: "7",
    name: "Burgundy Wedding Special",
    category: "Bridal",
    price: 7200,
    description:
      "Rich burgundy color with elaborate Aari embroidery. Heavy work on pallu featuring traditional South Indian motifs. Premium quality silk fabric.",
    image:
      "https://i.pinimg.com/736x/cc/86/f0/cc86f0c45a46b3a28bdf6a57913699cc.jpg",
  },
  {
    id: "8",
    name: "Orange Sunset Chudi Saree",
    category: "Traditional",
    price: 3500,
    description:
      "Vibrant orange saree with golden Aari work border. Lightweight and easy to drape. Perfect color for festive occasions and celebrations.",
    image:
      "https://i.pinimg.com/736x/20/d8/42/20d8422efbba89ea44c4386e3272f6d1.jpg",
  },
  {
    id: "9",
    name: "Green Emerald Print Saree",
    category: "Printed",
    price: 3100,
    description:
      "Rich emerald green with printed patterns and Aari work highlights. Beautiful combination of print and embroidery. Comfortable for all-day wear.",
    image:
      "https://i.pinimg.com/736x/5e/1f/46/5e1f46ca219778515d847b2f15f027f2.jpg",
  },
  {
    id: "10",
    name: "White Pearl Designer Saree",
    category: "Designer",
    price: 5200,
    description:
      "Elegant white saree with pearl-like Aari work embellishments. Contemporary design with traditional techniques. Perfect for modern brides and special events.",
    image:
      "https://i.pinimg.com/1200x/aa/30/e4/aa30e48ac64d3dcd91496a18ddde4b7a.jpg",
  },
  {
    id: "11",
    name: "Navy Blue Heritage Saree",
    category: "Traditional",
    price: 4800,
    description:
      "Deep navy blue with traditional temple border Aari work. Heritage design passed down through generations. Premium silk with rich texture.",
    image:
      "https://i.pinimg.com/736x/30/e9/4c/30e94cf2fb000864b6ab748e2d61f809.jpg",
  },
  {
    id: "12",
    name: "Magenta Festival Glory",
    category: "Festival",
    price: 3600,
    description:
      "Bright magenta saree with festive Aari work patterns. Eye-catching color perfect for celebrations. Lightweight fabric with comfortable draping.",
    image:
      "https://i.pinimg.com/1200x/6d/07/35/6d07355b48929b93a3647c3fd7ea247b.jpg",
  },
];

export const categories = [
  "All",
  "Traditional",
  "Printed",
  "Bridal",
  "Festival",
  "Designer",
];
