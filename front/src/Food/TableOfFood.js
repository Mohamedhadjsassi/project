//table of more than 100 dishs , everyone it has an id , name , category , price , recipe , image
const TableOfFood=[
    {
        id: 1,
        name: "Pizza Margherita",
        category: "Italian",
        price: "$10",
        recipe: "margherita pizza features a bubbly crust, crushed San Marzano tomato sauce, fresh mozzarella and basil, a drizzle of olive oil, and a sprinkle of salt",
        image: "https://www.stefanofaita.com/wp-content/uploads/2022/04/pizzamargherita.jpg"
      },
      {
        id: 2,
        name: "Spaghetti Carbonara",
        category: "Italian",
        price: "$12",
        recipe: "spaghetti (long thin strands of pasta) with bacon and a creamy sauce made from eggs, Pecorino or Parmesan and black pepper.",
        image: "https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-square640-v2.jpg"
      },
     
      {
        id: 3,
        name: "Lasagna",
        category: "Italian",
        price: "$16",
        recipe: "A rich and creamy whole-wheat pasta dish filled layer by layer with refreshingly fresh onions and garlic, lathered in a succulent sauce and topped with imported, premium quality mozzarella.",
        image: "https://recipes.net/wp-content/uploads/2023/05/worlds-best-lasagna_77cffded4a42334c8707bc9de200f26d.jpeg"
      },
      {
        id: 4,
        name: "Tiramisu",
        category: "Italian",
        price: "$8",
        recipe: "Tiramisu is an elegant and rich layered Italian dessert made with delicate ladyfinger cookies, espresso or instant espresso, mascarpone cheese, eggs, sugar, Marsala wine, rum and cocoa powder.",
        image: "https://odelices.ouest-france.fr/images/recettes/tiramisu_aux_speculoos.jpg"
      },
      {
        id: 5,
        name: "Fettuccine Alfredo",
        category: "Italian",
        price: "$8",
        recipe: "Recipe for Fettuccine Alfredo...",
        image: "https://www.modernhoney.com/wp-content/uploads/2019/04/Chicken-Fettucine-Alfredo-6.jpg"
      },
      {
        id: 6,
        name: "Caprese Salad",
        category: "Italian",
        price: "$8",
        recipe: "Recipe for Fettuccine Alfredo...",
        image: "https://natashaskitchen.com/wp-content/uploads/2019/08/Caprese-Salad-6.jpg"
      },
      
      {
        id: 8,
        name: "Gnocchi",
        category: "Italian",
        price: "$8",
        recipe: "Recipe for Fettuccine Alfredo...",
        image: "https://www.chronodrive.com/le-studio/wp-content/uploads/2022/06/Salade-de-gnocchis-au-thon-500x500.jpg"
      },
      {
        id: 9,
        name: "Cannoli",
        category: "Italian",
        price: "$8",
        recipe: "Recipe for Fettuccine Alfredo...",
        image: "https://thecrumbykitchen.com/wp-content/uploads/2018/03/Cannoli-Recipe-4-scaled.jpg"
      },
      {
        id: 10,
        name: "Coq au Vin",
        category: "French",
        price: "$15",
        recipe: "Recipe for Coq au Vin...",
        image: "https://www.oliviascuisine.com/wp-content/uploads/2022/02/coq-au-vin.jpg"
      },
      {
        id: 11,
        name: "Beef Bourguignon",
        category: "French",
        price: "$18",
        recipe: "Recipe for Beef Bourguignon...",
        image: "https://i0.wp.com/www.pardonyourfrench.com/wp-content/uploads/2021/01/Classic-French-Beef-Bourguignon-34.jpg?fit=1200%2C1798&ssl=1"
      },
      {
        id: 12,
        name: "Croissant",
        category: "French",
        price: "$3",
        recipe: "Recipe for Croissant...",
        image: "https://youcancookit.fr/wp-content/uploads/2023/05/Recette-croissant-500x500.jpg"
      },
      {
        id: 13,
        name: "Ratatouille",
        category: "French",
        price: "$11",
        recipe: "Recipe for Ratatouille...",
        image: "https://media.chefdehome.com/740/0/0/ratatouille/ratatouille-casserole.jpg"
      },
      {
        id: 14,
        name: "Crème Brûlée",
        category: "French",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.recipetineats.com/wp-content/uploads/2016/09/Creme-Brulee_8-SQ.jpg"
      },
      
      {
        id: 16,
        name: "Quiche Lorraine",
        category: "French",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://jemangefrancais.com/img/cms/Photos%20Blog/quiche%20lorraine_1.jpg"
      },
      {
        id: 17,
        name: "Bouillabaisse",
        category: "French",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://static01.nyt.com/images/2017/05/16/dining/16COOKING-BITTMAN-BOUILLABAISSE/16COOKING-BITTMAN-BOUILLABAISSE-square640-v2.jpg"
      },
      {
        id: 18,
        name: "Beef Wellington",
        category: "French",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.marionskitchen.com/wp-content/uploads/2021/12/Sichuan-and-Shiitake-Beef-Wellington-03.jpg"
      },
      {
        id: 19,
        name: "Mousse au Chocolat",
        category: "French",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://img.cuisineaz.com/660x660/2022/07/29/i184912-shutterstock-1033452436-min.jpeg"
      },
      {
        id: 20,
        name: "Paella",
        category: "Spanish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://img.cuisineaz.com/660x660/2013/12/20/i18894-paella-valenciana.jpeg"
      },
     
      {
        id: 21,
        name: "Tortilla Española",
        category: "Spanish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://mccormick.widen.net/content/qr9rgjqhwa/original/tortilla_espanola_recipes_800x800.jpg"
      },
      {
        id: 22,
        name: "Patatas Bravas",
        category: "Spanish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://vikalinka.com/wp-content/uploads/2023/05/Patatas-Bravas-10-Edit.jpg"
      },
      {
        id: 23,
        name: "Churros con Chocolate",
        category: "Spanish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://assets.afcdn.com/story/20190717/2016434_w4800h4800c1cx2400cy1600cxt0cyt0cxb4800cyb3200.jpg"
      },
      
      {
        id: 24,
        name: "Pulpo a la Gallega",
        category: "Spanish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.justspices.de/media/recipe/Pulpo-a-la-gallega.jpg"
      },
      {
        id: 25,
        name: "Gambas al Ajillo",
        category: "Spanish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://norecipes.com/wp-content/uploads/2018/09/gambas-al-ajillo_005.jpg"
      },
   
      {
        id: 26,
        name: "Crema Catalana",
        category: "Spanish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://spanishsabores.com/wp-content/uploads/2023/08/Crema-Catalana-Featured.jpg"
      },
      {
        id: 27,
        name: "Sushi",
        category: "Japanese",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://cdn.shopify.com/s/files/1/0613/0437/3481/articles/ebi_sushi.jpg?v=1683724176"
      },
      {
        id: 28,
        name: "Pad Thai",
        category: "Thai",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.bettybossi.ch/rdbimg/bb_bbzb220215_0006a/bb_bbzb220215_0006a_r01_v005_x0010.jpg"
      },
      {
        id: 29,
        name: "Butter Chicken",
        category: "Indian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://cravinghomecooked.com/wp-content/uploads/2020/06/butter-chicken-1.jpg"
      },
      {
        id: 30,
        name: "Ramen",
        category: "Japanese",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://img.cuisineaz.com/660x660/2018/12/30/i145407-ramen-au-poulet.jpeg"
      },
    
      {
        id: 31,
        name: "Pho",
        category: "Vietnamese",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://odelices.ouest-france.fr/images/recettes/suzi-wan-soupe-pho-bo-500x667.jpg"
      },
      {
        id: 32,
        name: "Dumplings",
        category: "Chinese",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://twoplaidaprons.com/wp-content/uploads/2020/05/Chinese-pork-dumplings-picking-up-a-dumpling-with-chopsticks.jpg"
      },
   
      {
        id: 33,
        name: "Biryani",
        category: "Indian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://assets.afcdn.com/recipe/20170531/33507_w1024h1024c1cx3432cy2574.webp"
      },
      {
        id: 34,
        name: "Peking Duck",
        category: "Chinese",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://whattocooktoday.com/wp-content/uploads/2015/03/peking-duck-2-1.jpg"
      },
      {
        id: 35,
        name: "Doner Kebab",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.jocooks.com/wp-content/uploads/2023/04/chicken-doner-kebab-1.jpg"
      },
      {
        id: 36,
        name: "Baklava",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://macuisineturque.fr/wp-content/uploads/2020/06/20230609_133829-800x840.jpg"
      },
      {
        id: 37,
        name: "Meze Platter",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.halfbakedharvest.com/wp-content/uploads/2017/04/Middle-Eastern-Roasted-Red-Pepper-Meze-Platter-1.jpg"
      },
      {
        id: 38,
        name: "Lahmacun",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://cookingorgeous.com/wp-content/uploads/2021/11/homemade-turkish-lahmacun-recipe-26.jpg"
      },
      {
        id: 39,
        name: "Kofte",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.foodandwine.com/thmb/E2JSsaKs2ZNWEJsUEDAOzMf9YAU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/200805-r-xl-grilled-beef-and-lamb-kofte-b28ade388d724d8b8de050df67756928.jpg"
      },
      {
        id: 40,
        name: "Manti",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.thehungerdiaries.com/wp-content/uploads/2022/12/tomato-chili-mini-manti-1.jpeg"
      },
      {
        id: 41,
        name: "Börek",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://img.cuisineaz.com/660x660/2018/04/13/i139332-borek.jpeg"
      },
      
      {
        id: 43,
        name: "Pide",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.themediterraneandish.com/wp-content/uploads/2022/12/vegetarian-turkish-pide-recipe-5.jpg"
      },
      {
        id: 44,
        name: "Turkish Delight",
        category: "Turkish",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://silkroadrecipes.com/wp-content/uploads/2021/09/Traditional-Turkish-Delight-Lokum-square.jpg"
      },
      {
        id: 45,
        name: "Hummus",
        category: "Arabic",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://theloopywhisk.com/wp-content/uploads/2018/09/How-To-Make-Hummus_730px-featured_1.jpg"
      },
      {
        id: 46,
        name: "Falafel",
        category: "Arabic",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://tastythriftytimely.com/wp-content/uploads/2023/06/Falafel-Pita-FEATURED.jpg"
      },
      {
        id: 47,
        name: "Shawarma",
        category: "Arabic",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://bakchich.info/wp-content/uploads/2023/05/poulet-shawarma.jpg"
      },
      {
        id: 48,
        name: "Kunafa",
        category: "Arabic",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://recipetale.com/wp-content/uploads/2023/04/Kunafa-11.jpg"
      },
      {
        id: 49,
        name: "Mansaf",
        category: "Arabic",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://tastegreatfoodie.com/wp-content/uploads/2022/05/Ouzi-1.jpg"
      },
     
      {
        id: 50,
        name: "Fatayer",
        category: "Arabic",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.carolinescooking.com/wp-content/uploads/2022/04/spinach-fatayer-featured-pic-sq.jpg"
      },
      {
        id: 51,
        name: "Kabsa",
        category: "Arabic",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.thedeliciouscrescent.com/wp-content/uploads/2023/06/Chicken-Kabsa-3.jpg"
      },
     
      
      {
        id: 52,
        name: "Couscous",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://static.wixstatic.com/media/7565d3_2ace077ac56c4f5ab3ef45bc4465570d~mv2.jpg/v1/fill/w_640,h_854,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7565d3_2ace077ac56c4f5ab3ef45bc4465570d~mv2.jpg"
      },
      {
        id: 53,
        name: "Brik",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://parisalep.files.wordpress.com/2010/08/imgp7319_2.jpg"
      },
      {
        id: 54,
        name: "Lablabi",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.themediterraneandish.com/wp-content/uploads/2023/02/Lablabi-recipe-10.jpg"
      },
      {
        id: 55,
        name: "Mloukhia",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://i.pinimg.com/736x/a4/c2/00/a4c20029612a23d5bebe4edf52ac4d11.jpg"
      },
      {
        id: 56,
        name: "Ojja",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://mytastycuisine.com/wp-content/uploads/2017/11/ojja-merguez.png"
      },
      {
        id: 57,
        name: "Mechouia",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://static1.squarespace.com/static/580bb690d1758e509eb28292/580bb7aa46c3c4e1c73dacc8/59598bf8e110eb5ab0629921/1501348926100/slata+mechouia.jpeg?format=1500w"
      },
      {
        id: 58,
        name: "Tajine",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://image.over-blog.com/eoHt4gwZYyOIC5--1IbQ2YZPoRI=/filters:no_upscale()/image%2F0908728%2F20220412%2Fob_c159e4_12042022-tagine-tunisien.jpg"
      },
      {
        id: 59,
        name: "Makroudh",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.196flavors.com/wp-content/uploads/2016/06/makroud-4-FP.jpg"
      },
      {
        id: 60,
        name: "Assida",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.onamangepourvous.tn/wp-content/uploads/2019/11/1-12.jpg"
      },
      {
        id: 61,
        name: "Kefteji",
        category: "Tunisian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://linstant-m.tn//uploads/6959.png"
      },
      {
        id: 62,
        name: "Kebab Halabi",
        category: "Syrian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/04/7a/e5/ee/wafi-gourmet.jpg"
      },
     
      
      {
        id: 63,
        name: "Kibbeh",
        category: "Syrian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://feelgoodfoodie.net/wp-content/uploads/2020/10/Kibbeh-Balls-7.jpg"
      },
      {
        id: 64,
        name: "Fattoush",
        category: "Syrian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://littlespicejar.com/wp-content/uploads/2016/08/Lebanese-Fattoush-Salad-10.jpg"
      },
      {
        id: 65 ,
        name: "Maqluba",
        category: "Syrian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://foreignfork.com/wp-content/uploads/2023/06/Maqluba-19.jpg"
      },
      {
        id: 66,
        name: "Arayes",
        category: "Syrian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://urbanfarmandkitchen.com/wp-content/uploads/2023/11/arayes-meat-stuffed-pitas-5.jpg"
      },
      
      
      {
        id: 67,
        name: "Basbousa",
        category: "Syrian",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://thecookandhim.com/wp-content/uploads/2023/02/J2A6381.jpg"
      },
      {
        id: 68,
        name: "Hamburger",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://img.cuisineaz.com/660x660/2013/12/20/i9380-hamburger.jpeg"
      },
      {
        id: 69,
        name: "BBQ Ribs",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.spendwithpennies.com/wp-content/uploads/2022/06/Oven-Baked-Ribs-SpendWithPennies-4.jpg"
      },
      {
        id: 70,
        name: "Macaroni and Cheese",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://mariefoodtips.com/wp-content/uploads/2022/08/mac-and-cheese-gratin-de-macaroni-au-fromage-4-scaled.jpg"
      },
      {
        id: 71,
        name: "Clam Chowder",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.crumbsnatched.com/wp-content/uploads/2022/05/clam-chowder-bread-bowl-featured.jpg"
      },
      {
        id: 72,
        name: "Apple Pie",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.bhg.com/thmb/uUnhiZNf_742Ou8BCfu_33eaH5c=/2652x0/filters:no_upscale():strip_icc()/Apple-pie-AQUoSCYHa7HBCZVOKNKAyV-58451a55556f4384b518162342770819.jpg"
      },
      {
        id: 73,
        name: "Fried Chicken",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.recipetineats.com/wp-content/uploads/2020/01/Fried-Chicken_2-SQ.jpg"
      },
      {
        id: 74,
        name: "Hot Dog",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.painsjacquet.com/wp-content/uploads/fly-images/239479/Hot-dog-BD-576x728-c.jpg"
      },
      {
        id: 75,
        name: "Pancakes",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.delscookingtwist.com/wp-content/uploads/2022/01/Easy-Fluffy-American-Pancakes_1.jpg"
      },
     
      {
        id: 76,
        name: "Key Lime Pie",
        category: "American",
        price: "$7",
        recipe: "Recipe for Crème Brûlée...",
        image: "https://www.billyparisi.com/wp-content/uploads/2019/06/key-lime-pie-6.jpg"
      }
    ,{
    id: 77,
    name: "Currywurst",
    price: 12.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://www.wholekitchensink.com/wp-content/uploads/2021/08/whole30-currywurst-6.jpg"
  },
  {
    id: 78,
    name: "Apfelstrudel",
    price: 14.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/f3dd9719bbfcd25d2d5522416ca58b9e/Derivates/84e5750bc4f106473196459530e681c91c8d3643.jpg"
  },
  {
    id: 79,
    name: "Rouladen",
    price: 9.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://www.theallergenfreekitchen.com/wp-content/uploads/2022/08/Dairy-Free-German-Beef-Rouladen.jpg"
  },
  {
    id: 80,
    name: "Kartoffelsalat",
    price: 18.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://www.s-kueche.com/wp-content/uploads/2023/07/Griechischer-Kartoffelsalat-1.jpg"
  },
  {
    id: 81,
    name: "Sauerbraten",
    price: 10.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://www.saveur.com/uploads/2012/10/10-230829-SAVEUR-MHALL-SAUERBRATEN-050-scaled.jpg?auto=webp"
  },
  {
    id: 82,
    name: "Pretzel",
    price: 8.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://bluebowlrecipes.com/wp-content/uploads/2024/02/homemade-soft-pretzels-9534.jpg"
  },
  {
    id: 83,
    name: "Schnitzel",
    price: 11.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://www.lilvienna.com/wp-content/uploads/Recipe-Viennese-Pork-Schnitzel.jpg"
  
  },
  {
    id: 84,
    name: "Black Forest Cake",
    price: 24.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://www.sainsburysmagazine.co.uk/media/4577/download/black-forest-gateau-560.jpg?v=1"
  },
  
 
  {
    id: 85,
    name: "Bratwurst",
    price: 10.99,
    recipe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    category: "German", 
    image: "https://tillmansmeats.com/cdn/shop/products/096---Bratwurst_2048x.jpg?v=1560267092"
  }
  ,
 {
   id: 86,
   name: "Tacos al Pastor",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://thestayathomechef.com/wp-content/uploads/2019/07/Tacos-al-Pastor-4.jpg"
 }
 ,
 {
   id: 87,
   name: "Guacamole",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://cuisinovores.com/wp-content/uploads/2023/05/photo_guacamole_facile_midjourney.jpg"
 }    
 ,
 {
   id: 88,
   name: "Enchiladas",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://thecookingjar.com/wp-content/uploads/2024/02/beef-enchiladas-7.jpg"
 }  
 ,
 {
   id: 89,
   name: "Chiles Rellenos",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://dinnerthendessert.com/wp-content/uploads/2022/05/Chile-Relleno-18-hero.jpg"
 }  
 
 
 ,
 {
   id: 90,
   name: "Quesadillas",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.kikkoman.fr/fileadmin/_processed_/8/1/csm_1056-recipe-page-Easy-cheese-quesadillas-with-mushrooms_mobile_b0b03cf7a9.webp"
 }
 ,
 {
   id: 91,
   name: "Mole Poblano",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://eu.tastescdns.net/thumbor/OD4OltrUU-uKcFUv-L4XvfKcHiU=/1050x1050/filters:quality(65):brightness(2):contrast(2):rgb(2,-2,0):sharpen(0.2,0.2,true)/fr/recipe/vBy-jmHFJ4qLZKr6PqC_/4de6caeab692f727f817e45a9cf242.png"
 }  
  
 ,
 {
   id: 92,
   name: "Chilaquiles",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.chocolatesandchai.com/wp-content/uploads/2023/10/Breakfast-Chilaquiles-Rojos-Featured.jpg"
 }  
 ,
 {
   id: 93,
   name: "Fish and Chips",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.maspatule.com/blog/wp-content/uploads/2022/06/RECETTE-FISH-AND-CHIPS-VER-1-1440x1980.jpg"
 } 
 ,
 {
   id: 94,
   name: "Roast Beef with Yorkshire Pudding",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.simplybeefandlamb.co.uk/media/1610/roast-beef-with-yorkshire-puddings.jpg?width=550&height=570&mode=crop"
 }  
 ,
 {
   id: 95,
   name: "Full English Breakfast",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://cookingsessions.com/wp-content/uploads/2023/04/Traditional-English-Breakfast-Recipe-1.jpeg.jpeg"
 } 
 ,
 {
   id: 96,
   name: "Shepherd's Pie",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.onceuponachef.com/images/2019/02/Shepherds-Pie-1200x1500.jpg"
 } 
 ,
 {
   id: 97,
   name: "Bangers and Mash",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://i0.wp.com/chefandsteward.com/wp-content/uploads/2021/05/Bangers-and-Mash-4.jpg?fit=735%2C1102&ssl=1"
 } 
 ,
 {
   id: 98,
   name: "Chicken Tikka Masala",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.jocooks.com/wp-content/uploads/2019/06/instant-pot-chicken-tikka-masala-1-4.jpg"
 } 
 ,
 {
   id: 99,
   name: "Cornish Pasty",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://warrensbakery.co.uk/content/uploads/2016/08/TraditionalCP-Medium.jpg"
 } 
 ,
 
 {
   id: 100,
   name: "Sticky Toffee Pudding",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.daringgourmet.com/wp-content/uploads/2022/12/Sticky-Toffee-Pudding-2.jpg"
 } 
 ,
 {
   id: 101,
   name: "Eton Mess",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://liliebakery.fr/wp-content/uploads/2021/04/Eton-mess-aux-fraises-la-recette-Lilie-Bakery.jpg"
 } 
 ,
 {
   id: 102,
   name: "English Breakfast Tea",
   category: "British",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://tucsontea.com/cdn/shop/files/SP-scottish-breakfast-tea-1000x1000_grande.jpg?v=1705533468"
 } 
 ,
 {
   id: 103,
   name: "Mexican Hot Chocolate",
   category: "Mexican",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://preppykitchen.com/wp-content/uploads/2022/12/Mexican-Hot-Chocolate-Feature.jpg"
 } 

 ,
 {
   id: 105,
   name: "Milkshake",
   category: "American",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://houseofnasheats.com/wp-content/uploads/2023/01/Oreo-Milkshake-Square-1.jpg"
 } 
 ,
 {
   id: 106,
   name: "Iced Tea",
   category: "American",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://twosleevers.com/wp-content/uploads/2017/06/instant-pot-iced-tea-feature.jpg"
 } 
 ,
 {
   id: 107,
   name: "Jouejem",
   category: "Tunisian",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.cuisinetunisienne.tn/wp-content/uploads/2021/12/Recette-Jwajem-Cocktail-sfaxien.jpg"
 } 
 ,
 {
   id: 108,
   name: "Arabic Coffee",
   category: "Arabic",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://www.arabamerica.com/wp-content/uploads/2023/06/87BB81B7-4DBB-485B-9D10-E0BACB4955FF.webp"
 } 
 ,
 {
   id: 109,
   name: "Espresso",
   category: "Italian",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://static1.squarespace.com/static/5887b936bebafbea4c31e6e8/5887be2ae48aeebc2d12b5d4/5887be97e48aeebc2d12d909/1485291159840/IMG_0314.jpg?format=original"
 } 
 ,
 {
   id: 110,
   name: "Mochito",
   category: "Spanish",
   price: "$7",
   recipe: "Recipe for Crème Brûlée...",
   image: "https://media-cdn.tripadvisor.com/media/photo-s/08/be/8d/19/russian-restaurant-winter.jpg"
 } 


]
export default TableOfFood