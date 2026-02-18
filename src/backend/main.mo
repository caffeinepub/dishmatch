import Text "mo:core/Text";
import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Runtime "mo:core/Runtime";

actor {
  type Mode = {
    #Date;
    #Business;
  };

  type Category = {
    #Italian;
    #Kaiseki;
    #Sushi;
    #Yakiniku;
    #Steakhouse;
    #French;
    #Bar;
    #Vegan;
    #Casual;
    #Fusion;
    #Chinese;
    #Mexican;
    #Japanese;
  };

  type Neighborhood = {
    #Shinjuku;
    #Roppongi;
    #TokyoStation;
    #Atago;
    #Ginza;
    #Shibuya;
    #Akasaka;
    #Nihonbashi;
    #Aoyama;
    #Asakusa;
  };

  type Restaurant = {
    name : Text;
    mode : Mode;
    category : Category;
    priceRange : Text;
    rating : Float;
    details : Text;
    neighborhood : Neighborhood;
  };

  let restaurants : [Restaurant] = [
    {
      name = "TRATTORIA CREATTA";
      mode = #Business;
      category = #Italian;
      priceRange = "¥3,000~¥14,999";
      rating = 4.7;
      details = "Upscale Italian restaurant with a business casual atmosphere. Ideal for corporate dinners and client meetings.";
      neighborhood = #TokyoStation;
    },
    {
      name = "Mortons The Steakhouse Tokyo";
      mode = #Business;
      category = #Steakhouse;
      priceRange = "¥24,000~¥35,000";
      rating = 4.9;
      details = "Premium US steakhouse with an elegant, professional environment. Perfect for business dinners and celebrations.";
      neighborhood = #Roppongi;
    },
    {
      name = "Daigo";
      mode = #Date;
      category = #Kaiseki;
      priceRange = "¥4,900~¥36,300";
      rating = 4.8;
      details = "Traditional Japanese kaiseki restaurant with a serene ambiance. Great for romantic dates and special occasions.";
      neighborhood = #Atago;
    },
    {
      name = "Piacere";
      mode = #Date;
      category = #Italian;
      priceRange = "¥5,000~¥30,000";
      rating = 4.6;
      details = "Fine Italian dining with stunning city views. Ideal for romantic dinners and celebrations.";
      neighborhood = #Nihonbashi;
    },
    {
      name = "T's TanTan";
      mode = #Date;
      category = #Vegan;
      priceRange = "¥1,000~¥2,500";
      rating = 4.5;
      details = "Casual vegan ramen shop with a relaxed atmosphere. Perfect for casual dates and health-conscious diners.";
      neighborhood = #TokyoStation;
    },
    {
      name = "Mon cher ton ton";
      mode = #Business;
      category = #Steakhouse;
      priceRange = "¥13,000~¥31,000";
      rating = 4.8;
      details = "Teppanyaki steakhouse with a luxurious setting. Suitable for high-end business dinners and client entertainment.";
      neighborhood = #Roppongi;
    },
    {
      name = "Signature";
      mode = #Date;
      category = #French;
      priceRange = "¥5,000~¥29,000";
      rating = 4.7;
      details = "Upscale French restaurant with a romantic ambiance and panoramic city views. Perfect for special occasions.";
      neighborhood = #Shinjuku;
    },
    {
      name = "Nadaman";
      mode = #Business;
      category = #Kaiseki;
      priceRange = "¥8,000~¥48,000";
      rating = 4.9;
      details = "Renowned kaiseki restaurant with a professional atmosphere. Known for exceptional service and seasonal menus.";
      neighborhood = #Ginza;
    },
    {
      name = "Akasaka Rikyu";
      mode = #Business;
      category = #Chinese;
      priceRange = "¥18,000~¥30,000";
      rating = 4.8;
      details = "High-end Chinese cuisine in an elegant setting. Popular for business meetings and executive dining.";
      neighborhood = #Akasaka;
    },
    {
      name = "Sense";
      mode = #Date;
      category = #Chinese;
      priceRange = "¥8,000~¥20,000";
      rating = 4.6;
      details = "Modern Chinese restaurant with a stylish interior. Ideal for sophisticated dates and special celebrations.";
      neighborhood = #Ginza;
    },
    {
      name = "Uogashi Nihon-Ichi";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥2,000~¥8,000";
      rating = 4.5;
      details = "Traditional sushi bar with a casual yet professional environment. Great for quick business lunches and after-work meetings.";
      neighborhood = #Nihonbashi;
    },
    {
      name = "Shin-Yokohama Ramen Museum";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,000~¥3,000";
      rating = 4.7;
      details = "Interactive ramen museum with a fun, casual atmosphere. Perfect for casual dates and food enthusiasts.";
      neighborhood = #Nihonbashi;
    },
    {
      name = "Tapas Molecular Bar";
      mode = #Date;
      category = #Fusion;
      priceRange = "¥10,000~¥30,000";
      rating = 4.9;
      details = "Innovative fusion cuisine with a molecular gastronomy twist. Unique dining experience for adventurous couples.";
      neighborhood = #Nihonbashi;
    },
    {
      name = "Den";
      mode = #Business;
      category = #Kaiseki;
      priceRange = "¥20,000~¥40,000";
      rating = 4.8;
      details = "Award-winning kaiseki restaurant known for creativity and exceptional service. Ideal for high-level business dinners.";
      neighborhood = #Aoyama;
    },
    {
      name = "Butagumi";
      mode = #Date;
      category = #Casual;
      priceRange = "¥2,000~¥5,000";
      rating = 4.6;
      details = "Specialty tonkatsu restaurant in a traditional Japanese house. Rustic charm for intimate dates.";
      neighborhood = #Aoyama;
    },
    {
      name = "Sushi Saito";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥30,000~¥50,000";
      rating = 5.0;
      details = "Michelin-starred sushi restaurant with a focus on perfection. The pinnacle of sushi dining for special business occasions.";
      neighborhood = #Shibuya;
    },
    {
      name = "Ichiran Ramen";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,000~¥2,500";
      rating = 4.5;
      details = "Popular ramen chain with a unique solo dining concept. Great for casual dates and quick meals.";
      neighborhood = #Shibuya;
    },
    {
      name = "Tempura Kondo";
      mode = #Business;
      category = #Japanese;
      priceRange = "¥10,000~¥20,000";
      rating = 4.7;
      details = "Acclaimed tempura restaurant known for quality and precision. Suitable for professional business meals.";
      neighborhood = #Ginza;
    },
    {
      name = "Narisawa";
      mode = #Date;
      category = #French;
      priceRange = "¥25,000~¥40,000";
      rating = 4.9;
      details = "Innovative French-Japanese fusion with a romantic setting. Ideal for special occasions and anniversaries.";
      neighborhood = #Aoyama;
    },
    {
      name = "AFURI Ramen";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,000~¥2,000";
      rating = 4.6;
      details = "Modern ramen shop famous for its yuzu-based dishes. Lively atmosphere perfect for casual dates.";
      neighborhood = #Nihonbashi;
    },
    {
      name = "Kisoji";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥8,000~¥20,000";
      rating = 4.7;
      details = "Elegant shabu-shabu and sushi restaurant with a refined setting. Ideal for professional lunches and dinners.";
      neighborhood = #Shinjuku;
    },
    {
      name = "Kagaya";
      mode = #Date;
      category = #Sushi;
      priceRange = "¥20,000~¥40,000";
      rating = 4.8;
      details = "Exclusive omakase sushi experience in an intimate setting. Perfect for romantic dates and special occasions.";
      neighborhood = #Shibuya;
    },
    {
      name = "Butaniku Kitchen";
      mode = #Business;
      category = #Yakiniku;
      priceRange = "¥4,000~¥10,000";
      rating = 4.5;
      details = "Contemporary yakiniku restaurant popular for business dining. Offers a range of premium meats and set menus.";
      neighborhood = #Shinjuku;
    },
    {
      name = "Shima Sushi";
      mode = #Date;
      category = #Sushi;
      priceRange = "¥15,000~¥30,000";
      rating = 4.7;
      details = "Traditional sushi restaurant with a focus on quality and craftsmanship. Cozy atmosphere for intimate dates.";
      neighborhood = #Ginza;
    },
    {
      name = "Kyubey";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥10,000~¥30,000";
      rating = 4.8;
      details = "Renowned sushi restaurant with a professional, welcoming ambiance. Great for business gatherings and celebratory meals.";
      neighborhood = #Ginza;
    },
    {
      name = "Sushi Mizutani";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥30,000~¥40,000";
      rating = 4.9;
      details = "Michelin three-star sushi masterpiece. Legendary spot for exclusive business dining experiences.";
      neighborhood = #Roppongi;
    },
    {
      name = "Fuku Sushi";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥3,000~¥20,000";
      rating = 4.6;
      details = "Traditional sushi house known for its history and expertise. Recommended for business functions and celebrations.";
      neighborhood = #Asakusa;
    },
    {
      name = "Toraya";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥7,000~¥20,000";
      rating = 4.5;
      details = "Elegant sushi restaurant with a range of premium offerings. Suitable for business meetings and formal occasions.";
      neighborhood = #Shinjuku;
    },
    {
      name = "Osaka Ohsho";
      mode = #Business;
      category = #Casual;
      priceRange = "¥1,000~¥10,000";
      rating = 4.4;
      details = "Busy gyoza spot with friendly service. Good for quick business meals or team lunches.";
      neighborhood = #Shibuya;
    },
    {
      name = "Samurai";
      mode = #Business;
      category = #Bar;
      priceRange = "¥2,000~¥14,999";
      rating = 4.7;
      details = "Classic jazz bar with a mature ambiance. Ideal for corporate parties and after-work drinks.";
      neighborhood = #Ginza;
    },
    {
      name = "A5 Steak House";
      mode = #Business;
      category = #Steakhouse;
      priceRange = "¥8,000~¥20,000";
      rating = 4.8;
      details = "Premium steak house specializing in A5 wagyu. Upscale environment for important business dinners.";
      neighborhood = #Roppongi;
    },
    {
      name = "Kirin City";
      mode = #Business;
      category = #Bar;
      priceRange = "¥1,000~¥10,000";
      rating = 4.5;
      details = "Popular bar with a relaxed atmosphere and wide selection of beers. Suitable for business networking events.";
      neighborhood = #Ginza;
    },
    {
      name = "Shunbou";
      mode = #Business;
      category = #Kaiseki;
      priceRange = "¥8,000~¥22,000";
      rating = 4.6;
      details = "Modern kaiseki restaurant with a sophisticated ambiance. Excellent for professional meetings and client entertainment.";
      neighborhood = #Roppongi;
    },
    {
      name = "Le Monde Gyoza";
      mode = #Date;
      category = #French;
      priceRange = "¥5,000~¥12,000";
      rating = 4.6;
      details = "Contemporary French-Japanese fusion with a romantic ambiance. Perfect for special dates and gourmet experiences.";
      neighborhood = #Ginza;
    },
    {
      name = "YUNiCO";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥20,000~¥40,000";
      rating = 4.9;
      details = "High-end sushi omakase with a focus on creativity and quality. Prestigious brand known for excellence.";
      neighborhood = #Shinjuku;
    },
    {
      name = "Nakajiman";
      mode = #Business;
      category = #Bar;
      priceRange = "¥2,000~¥15,000";
      rating = 4.7;
      details = "Traditional bar with a refined yet welcoming environment. Suitable for professionals and business gatherings.";
      neighborhood = #Ginza;
    },
    {
      name = "BIANCA";
      mode = #Date;
      category = #Bar;
      priceRange = "¥3,000~¥7,000";
      rating = 4.5;
      details = "Chic cocktail bar with a romantic ambiance. Offers a variety of unique cocktails for sophisticated nights out.";
      neighborhood = #Shibuya;
    },
    {
      name = "Soba Dining Toji";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,600~¥6,000";
      rating = 4.5;
      details = "Soba noodle specialty restaurant with a modern twist. Ideal for casual lunches or dinners with friends or dates.";
      neighborhood = #TokyoStation;
    },
    {
      name = "Robata Umiro";
      mode = #Business;
      category = #Casual;
      priceRange = "¥800~¥2,500";
      rating = 4.6;
      details = "Modern izakaya with an array of Japanese and international dishes. Popular with business and office professionals.";
      neighborhood = #Ginza;
    },
    {
      name = "CROSTA Kitchen";
      mode = #Date;
      category = #Casual;
      priceRange = "¥2,000~¥7,000";
      rating = 4.6;
      details = "Contemporary Italian restaurant with wood-fired pizzas and authentic recipes. Great for casual dates or group outings.";
      neighborhood = #Ginza;
    },
    {
      name = "Mexican Donkey";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,200~¥4,500";
      rating = 4.7;
      details = "Bright and lively Mexican restaurant with creative dishes. Fun destination for festive celebrations and dates.";
      neighborhood = #Shibuya;
    },
    {
      name = "Oyaji BAKERY";
      mode = #Date;
      category = #French;
      priceRange = "¥2,000~¥4,000";
      rating = 4.6;
      details = "Casual bakery and cafe specializing in authentic French pastries and croissants. Ideal for lunch dates or breakfast stops.";
      neighborhood = #Ginza;
    },
    {
      name = "Zen Sushi";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥2,500~¥8,000";
      rating = 4.5;
      details = "Traditional sushi shop famous for seasonal fish. Recommended for business lunches and professional meetings.";
      neighborhood = #TokyoStation;
    },
    {
      name = "Salud";
      mode = #Date;
      category = #Bar;
      priceRange = "¥950~¥4,500";
      rating = 4.6;
      details = "Wine bar with a relaxed and cozy atmosphere. Great spot for intimate conversations and drinks after dinner.";
      neighborhood = #Shibuya;
    },
    {
      name = "Blunos";
      mode = #Date;
      category = #French;
      priceRange = "¥6,000~¥13,000";
      rating = 4.7;
      details = "Elegant French bistro known for its creativity and flavors. Popular for romantic dates and gourmet enthusiasts.";
      neighborhood = #Ginza;
    },
    {
      name = "Harro Taco";
      mode = #Date;
      category = #Mexican;
      priceRange = "¥2,000~¥7,000";
      rating = 4.6;
      details = "Vibrant taco shop with unique flavors and casual ambiance. Perfect for sharing good food and laughs with dates.";
      neighborhood = #Shibuya;
    },
    {
      name = "UME Asian Bistro";
      mode = #Business;
      category = #Fusion;
      priceRange = "¥8,000~¥22,000";
      rating = 4.8;
      details = "Upscale pan-Asian bistro with bold flavors and refined presentation. Excellent choice for business dining and celebrations.";
      neighborhood = #Ginza;
    },
    {
      name = "The Jazzy Table";
      mode = #Date;
      category = #Bar;
      priceRange = "¥3,000~¥6,000";
      rating = 4.5;
      details = "Classic jazz bar with a romantic ambiance. Offers live music and signature cocktails for passionate nights.";
      neighborhood = #Shibuya;
    },
    {
      name = "Flameyakitori";
      mode = #Business;
      category = #Bar;
      priceRange = "¥1,500~¥13,000";
      rating = 4.6;
      details = "Traditional yakitori shop with a focus on premium ingredients. Popular spot for business dinners and office gatherings.";
      neighborhood = #Nihonbashi;
    },
    {
      name = "Sun Shrimp Cafe";
      mode = #Date;
      category = #Casual;
      priceRange = "¥900~¥4,200";
      rating = 4.5;
      details = "Eco-themed casual cafe focused on sustainable seafood dishes. Great for eco-conscious diners and casual dates.";
      neighborhood = #Ginza;
    },
    {
      name = "Harajuku Burger";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,300~¥3,800";
      rating = 4.6;
      details = "Trendy burger joint with creative toppings and casual setting. Popular for quick meals and group lunches.";
      neighborhood = #Shibuya;
    },
    {
      name = "Chikuwabaco";
      mode = #Business;
      category = #Japanese;
      priceRange = "¥10,000~¥16,000";
      rating = 4.7;
      details = "Traditional Japanese cuisine with a focus on regional specialties. Popular for professional events and business meetings.";
      neighborhood = #Asakusa;
    },
    {
      name = "Ramen Abura";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,500~¥5,000";
      rating = 4.6;
      details = "Contemporary ramen shop with a fusion twist. Busy spot for quick dates or group meals.";
      neighborhood = #Shibuya;
    },
    {
      name = "The Vege Table";
      mode = #Date;
      category = #Vegan;
      priceRange = "¥900~¥3,000";
      rating = 4.5;
      details = "Vegan bistro focused on local produce and innovative dishes. Cozy atmosphere for conscious diners.";
      neighborhood = #Ginza;
    },
    {
      name = "Factory Moon";
      mode = #Business;
      category = #Bar;
      priceRange = "¥2,000~¥8,000";
      rating = 4.7;
      details = "Modern izakaya with an extensive drink menu. Great for unwinding after work and company events.";
      neighborhood = #Ginza;
    },
    {
      name = "Spicy Table";
      mode = #Date;
      category = #Casual;
      priceRange = "¥1,800~¥5,000";
      rating = 4.6;
      details = "Lively Thai fusion restaurant with a variety of spicy dishes. Perfect for adventurous eaters and casual diners.";
      neighborhood = #Shibuya;
    },
    {
      name = "SUSHIRI";
      mode = #Business;
      category = #Sushi;
      priceRange = "¥3,500~¥17,000";
      rating = 4.7;
      details = "Sushi bar with modern touches. Offers course meals and traditional favorites for business gatherings.";
      neighborhood = #Ginza;
    },
    {
      name = "Dura Sushi";
      mode = #Date;
      category = #Sushi;
      priceRange = "¥5,000~¥21,000";
      rating = 4.7;
      details = "Intimate sushi bar with a focus on quality. Cozy setting for romantic dinners and small celebrations.";
      neighborhood = #Shibuya;
    },
    {
      name = "Little Okinawa";
      mode = #Date;
      category = #Vegan;
      priceRange = "¥1,500~¥6,000";
      rating = 4.6;
      details = "Fusion vegan restaurant inspired by Okinawan cuisine. Great for unique dates and adventurous eaters.";
      neighborhood = #Shibuya;
    },
    {
      name = "Shooting Star";
      mode = #Business;
      category = #Bar;
      priceRange = "¥2,000~¥14,000";
      rating = 4.6;
      details = "Stylish bar with a business-friendly atmosphere. Known for speciality cocktails and exclusive events.";
      neighborhood = #Ginza;
    },
  ];

  public query ({ caller }) func getAllRestaurants() : async [Restaurant] {
    restaurants;
  };

  public query ({ caller }) func getByName(name : Text) : async ?Restaurant {
    restaurants.values().find(func(r) { r.name == name });
  };

  public query ({ caller }) func getByCategory(category : Category) : async [Restaurant] {
    restaurants.filter(func(r) { r.category == category });
  };

  public query ({ caller }) func getByMode(mode : Mode) : async [Restaurant] {
    restaurants.filter(func(r) { r.mode == mode });
  };

  public query ({ caller }) func getByNeighborhood(neighborhood : Neighborhood) : async [Restaurant] {
    restaurants.filter(func(r) { r.neighborhood == neighborhood });
  };
};
