const client = require("./client");
const {createUser,createProducts,createOrder,createUse,createOrdersProducts,createProductsUses,createPrice}=require('./');

async function dropTables() {
    console.log('---start dropping Tables---');
    // drop all tables, in the correct order
    try{
        await  client.query(`
        DROP TABLE IF EXISTS orders_products;
        DROP TABLE IF EXISTS products_uses;
        DROP TABLE IF EXISTS price;
        DROP TABLE IF EXISTS products;
        DROP TABLE IF EXISTS orders;
        DROP TABLE IF EXISTS uses;
        DROP TABLE IF EXISTS users;
        DROP TYPE IF EXISTS status;     
        `)
    console.log("---tables dropped---")
    }
    catch (error) {
        throw error; 
    }
}

async function createTables() {
    try {
        console.log("---start building tables---")
        // create all tables, in the correct order
    
        await client.query(`
        CREATE TABLE users(
        id  SERIAL PRIMARY KEY, 
        username VARCHAR(255) UNIQUE NOT NULL, 
        password VARCHAR(255) NOT NULL,
        email VARCHAR(255)
        )
        `) 
        await client.query(`
        CREATE TABLE products(
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) UNIQUE NOT NULL,
            sciname VARCHAR(255) UNIQUE NOT NULL,
            type VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            image TEXT,
            banner TEXT
        )
        `)
        await client.query(`
        CREATE TYPE status AS ENUM ('cart','checkout','ordered');
        CREATE TABLE orders(
            id SERIAL PRIMARY KEY,
            "usersId" INTEGER REFERENCES users(id),
            current_status status
        )
        `)
        await client.query(`
        CREATE TABLE orders_products(
          id SERIAL PRIMARY KEY,
          "orderId" INTEGER REFERENCES orders(id),
          "productId" INTEGER REFERENCES products(id),
          quantity INTEGER,
          size VARCHAR(255),
          "totalPrice" DECIMAL
        )`)
        await client.query(`
        CREATE TABLE uses(
            id SERIAL PRIMARY KEY,
            use VARCHAR(255) NOT NULL
        )
        `)
        await client.query(`
        CREATE TABLE products_uses(
            id SERIAL PRIMARY KEY,
            "productId" INTEGER REFERENCES products(id),
            "usesId" INTEGER REFERENCES uses(id)
        )
        `)
        await client.query(`
        CREATE TABLE price(
            id SERIAL PRIMARY KEY,
            "productId" INTEGER REFERENCES products(id),
            size VARCHAR(255),
            price DECIMAL
        )
        `)
        console.log("---tables built---")
      } catch (error) {
          throw error;
    }
}

async function createInitialUsers(){
    console.log('---start creating users---')
    try{
        const usersToCreate = [
            {username:'mason',password:'mason123',email:"mason@test.com"},
            {username:'testun01',password:'testpw01',email:"test01@test.com"},
            {username:'testun02',password:'testpw02',email:"test02@test.com"}
        ]
        const users = await Promise.all(usersToCreate.map(createUser))
        console.log('---users created---')
    }
    catch(error){
        console.log('error creating users')
    }
}

async function createInitialProducts(){
    console.log('---start creating products---')
    try{
        const productsToCreate = [
            {name:"Feverfew",
            sciname:"crysanthemum parthenium",
            type:"Herb",
            description:"An herbaceous perennial in the daisy family with small white flowers and pinnate leaves, Feverfew is native to Eurasia and has a long history of use in traditional European herbalism. The herb is typically tinctured, steeped as feverfew tea, or employed topically.",
            image:"https://files.nccih.nih.gov/feverfew-steven-foster-square.jpg",
            banner:"https://images-prod.healthline.com/hlcmsresource/images/AN_images/feverfew-1296x728-feature.jpg"
            },
            {name:"Chamomile",
            sciname:"chamaemelum nobile",
            type:"Herb",
            description:"Chamomile is a gentle herb known throughout most of the world which has been used continually for many centuries. It is often ingested as a tea for calming purposes and to soothe the digestive tract and is mild enough to be administered to babies. Chamomile is soothing to the skin and is often found in lotions and hair products.",
            image:"https://files.nccih.nih.gov/chamomile-steven-foster-square.jpg",
            banner:"https://www.gardeningknowhow.com/wp-content/uploads/2020/11/field-of-camomiles-blooming.jpg"
            },
            {name:"St Johns Wort",
            sciname:"hypericum perforatum",
            type:"Herb",
            description:"Native to Europe, Saint John’s wort has naturalized in temperate climates around the globe. Its bright yellow flowers are reminiscent of the sun and are traditionally harvested in the peak of summer between June and August. St. John’s wort has a long history of use in traditional Western herbal practices. Typical preparations include steeping as tea, oil infusion, and extract. St. John's Wort helps promote a healthy mood and emotional balance.",
            image:"https://files.nccih.nih.gov/st-john-s-wort-steven-foster-square.jpg",
            banner:"https://www.gardeningknowhow.com/wp-content/uploads/2020/12/flowers-of-stjohns-wort.jpg"
            },
            {name:"Cinnamon",
            sciname:"cinnamomum zeylanicum",
            type:"Herb",
            description:"Used as a spice for thousands of years, cinnamon comes from the bark of various species of cinnamon trees. The leaves, flowers, fruits, and roots of cinnamon trees have also been used in cooking and for medicinal purposes. There are differences in the chemical composition of cinnamon products produced from different species or parts of cinnamon trees.",
            image:"https://cdn.shopify.com/s/files/1/1820/1301/products/web_Saigon-Cinnamon-Bark-3_eff7038e-a937-4676-afba-f7fbfb4e7cbb.jpg?v=1592511599",
            banner:"https://media1.florihana.com/2365-large_default/cinnamon-bark-organic.jpg"
            },
            {name:"Ginger",
            sciname:"zingiber officinale",
            type:"Herb",
            description:"Ginger has been valued as a zesty spice and a reliable herb for centuries, with the first recorded uses found in ancient Sanskrit and Chinese texts. It has also been utilized in Greek, Roman, Arabic, and Unani Tibb traditional medicine practices and is now a widely known herb in most parts of the world. It is a flavoring agent in beer, soft drinks, candies, and a staple spice and condiment in many countries. Ginger essential oil has been used in a vast array of cosmetics and perfumes.",
            image:"https://files.nccih.nih.gov/ginger-thinkstockphotos-531052216-square.jpg",
            banner:"https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/265990_1100-1100x628.jpg"
            },
            {name:"Green Tea",
            sciname:"camellia sinensis",
            type:"Herb",
            description:"Considered the world’s most popular beverage after water, green tea has been consumed as a healthful and flavorful drink for millennia. Green tea has a history of cultivation throughout India, China, and Japan for at least 5,000 years. With truly ancient roots, green tea has withstood the test of time for the wellness support, perkiness, and enjoyable taste it delivers.",
            image:"https://files.nccih.nih.gov/green-tea-steven-foster-square.jpg",
            banner:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Csinensis.jpg/1200px-Csinensis.jpg"
            },
            {name:"Hawthorn",
            sciname:"cratagus oxyacantha",
            type:"Herb",
            description:"Hawthorn leaf, flower, and berry have been praised over the centuries for their heart elevating properties. Believed to uplift and strengthen both the physical and emotional heart, hawthorn, as it supports healthy cardiovascular function, was also revered for ceremonial and spiritual purposes. The flavorful red berries have been used in candies, jams, jellies, wines, and cordials and are widely available in many forms as dietary supplements.",
            image:"https://files.nccih.nih.gov/hawthorn-steven-foster-square.jpg",
            banner:"https://www.nature-and-garden.com/wp-content/uploads/2017/11/hawthorn-care.jpg"
            },
            {name:"Dandelion",
            sciname:"taraxacum offinale",
            type:"Herb",
            description:"Dandelion is a sunny, subtle, yet incredible plant that has been used for thousands of years in Traditional Chinese Medicine and is mentioned in traditional Arabian medicine in the tenth century. It has been used for centuries in traditional medicine practices all over the world as a restorative tonic, edible food, and in herbal beers and wines.Additionally, dandelion was traditionally used to support liver health, healthy urinary funtion and has mild diuretic action.",
            image:"https://files.nccih.nih.gov/dandelion-steven-foster-square.jpg",
            banner:"https://cdn-prod.medicalnewstoday.com/content/images/articles/324/324083/dandelions-in-a-field.jpg"
            },
            {name:"Valerian",
            sciname:"valeriana officinalis",
            type:"Herb",
            description:"Valeriana officinalis is a member of the Caprifoliaceae family and known for its general calming effects. Valerian has pleasant, sweet smelling flowers and pungently aromatic roots. Despite the strong odor, valerian root has been used since the times of ancient Greece and in traditional European folk practices. Commonly infused as valerian tea, the roots can also be mixed into herbal tea blends or tinctured.",
            image:"https://files.nccih.nih.gov/valerian-steven-foster-square.jpg",
            banner:"https://www.herbco.com/images/Category/large/c-133-valerian.jpg"
            },
            {name:"Sage",
            sciname:"salvia officinalis",
            type:"Herb",
            description:"The common garden sage is a low-growing evergreen shrub in the mint family that can be found worldwide. For centuries, Salvia officinalis has been a choice herb to flavor culinary dishes. Beyond its use as a kitchen seasoning, sage leaf was historically utilized in traditional European herbalism for its healthful properties. Sage leaves can be infused as tea, macerated as an extract, and used as a culinary spice.",
            image:"https://files.nccih.nih.gov/sage-steven-foster-square.jpg",
            banner:"https://cdn.shopify.com/s/files/1/0058/0252/4783/files/sage-salvia-officinalis-alternate.jpg"
            },
            {name:"Bilberry",
            sciname:"vaccinium myrtillus",
            type:"Herb",
            description:"The European bilberry bush is a close relative of American blueberries, cranberries, and huckleberries. It flourishes in damp acidic soil throughout temperate and sub-arctic regions of the world. The bilberry has a long history of traditional use. Bilberry antioxidant properties help maintain good health and fight free radicals.",
            image:"https://files.nccih.nih.gov/bilberry-steven-foster-square.jpg",
            banner:"https://plantinstructions.com/wp-content/uploads/2018/05/bilberry-1000x640.jpg"
            },
            {name:"Licorice",
            sciname:"glycyrrhiza glabra",
            type:"Herb",
            description:"Licorice has a long history of use in traditional western herbalism as well as Traditional Chinese Medicine. It is an herbaceous legume that is native to the Middle East, southern Europe, and India. The root has become popular worldwide as a sweetener in herbal infusions and a flavoring ingredient in candy and baked goods.",
            image:"https://files.nccih.nih.gov/licorice-root-steven-foster-square.jpg",
            banner:"https://www.annmariegianni.com/wp-content/uploads/2017/11/licorice-root.jpg"
            },
            {name:"Black Cohash",
            sciname:"actaea racemosa",
            type:"Herb",
            description:"It was a favorite herbal remedy for Native Americans. The name cohosh is from the Algonquian tribe, and means rough, referring to the feel of the rhizome. It was given the name bugbane because the flowers have such a strong odor and have been used to effectively repel insects. Other common names include black snakeroot and rheumatism weed.",
            image:"https://files.nccih.nih.gov/black-cohosh-steven-foster-square.jpg",
            banner:"https://cdn.accentuate.io/31919013999/5866445668463/black-cohosh-actaea-racemosa-alternate-v1561056443976.jpg?1275x856"
            },
            {name:"Red Clover",
            sciname:"Trifolium pratense",
            type:"Herb",
            description:"Red clover can be a common sight around meadows, parks, and fields during late spring. A low growing, short-lived perennial in the pea family, Trifolium pratense has three lobed leaves and dark pink, densely packed flower heads. Red clover herb is a blend of the aerial portions of the plant, perfect for tincturing and brewing a cup of red clover tea.",
            image:"https://files.nccih.nih.gov/red-clover-steven-foster-square.jpg",
            banner:"https://post.healthline.com/wp-content/uploads/2020/08/red-clover-1200x628-facebook-1200x628.jpg"
            },
            {name:"Peppermint",
            sciname:"menth piperita",
            type:"Herb",
            description:"The oil of peppermint offers its cool, refreshing flavor and unmistakable aroma to a wide variety of foods and beverages. In the western world it is a common ingredient for candies, toothpastes, ice creams, pies and other desserts. The peppermint leaf itself is muddled and added to cocktails and is a popular ingredient in herbal teas when dried.",
            image:"https://files.nccih.nih.gov/peppermint-steven-foster-square.jpg",
            banner:"https://www.gardeningknowhow.com/wp-content/uploads/2012/04/peppermint-1-1024x768.jpg"
            },
            {name:"Lavender",
            sciname:"lavandula officinalis",
            type:"Herb",
            description:"Lavender is an aromatic perennial evergreen shrub. Its woody stems bear lavender or purple flowers from late spring to early autumn. Lavender is native to the Mediterranean, but now cultivated in Europe and the Western United States. The use of Lavender goes back thousands of years, with the first recorded uses by the Egyptians during the mummification process. Both the Greeks and the Romans had many uses for it, the most popular being for bathing, cooking, and as an ingredient in perfume.",
            image:"https://files.nccih.nih.gov/lavender-steven-foster-square.jpg",
            banner:"https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=%5B920%2C885%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F24%2F2021%2F04%2F29%2FGettyImages-683827945-2000.jpg"
            },
            {name:"Ginkgo",
            sciname:"ginkgo biloba",
            type:"Herb",
            description:"Native to China, the ginkgo tree is beautiful and unique, both aesthetically and biologically. Having lived for over 225 million years, the ginkgo is one of the oldest known species on the planet. Wild populations of ginkgo are rare, existing only in two known regions of the Zhejiang province in China. Nevertheless, ginkgoes are heavily cultivated across China and in some parts of the United States, with naturalized populations located in parts of Asia. Ginkgo resides in the Ginkgoaceae family.",
            image:"https://files.nccih.nih.gov/ginkgo-biloba-thinkstockphotos-146806903-square.jpg",
            banner:"https://www.gardeningknowhow.com/wp-content/uploads/2019/04/feed-ginkgo.jpg"
            },
            {name:"Ginseng",
            sciname:"Panax ginseng",
            type:"Herb",
            description:"A literal translation of “ginseng” from Cantonese means “human root” referring to the root’s resemblance to a person. Panax ginseng has been used for centuries and is considered a revered herb in Traditional Chinese Medicine (TCM). According to TCM, ginseng root is a Qi (ch’i) herb tonic working primarily on the meridians of the spleen and stomach.",
            image:"https://files.nccih.nih.gov/asian-ginseng-thinkstockphotos-147082353-square.jpg",
            banner:"https://cdn.britannica.com/06/198806-050-4099B24F/roots-ginseng-market-Asian-Korean.jpg"
            },
            
        ]
        const products = await Promise.all(productsToCreate.map(createProducts))
        console.log('---users created---')
    }
    catch(error){
        console.log('error creating products')
    }
}

async function createInitialOrders(){
    console.log("---start creating orders---")
    try{
        const orderToCreate = [
            { usersId:1, status:"cart"},
            { usersId:1, status:"ordered"},
            { usersId:2, status:"cart"}
          ]
          const orders = await Promise.all(orderToCreate.map(createOrder))
          console.log('---orders created---')
    }
    catch(error){
        console.log('error creating orders')
    }
}

async function createInitialUses(){
    console.log('---start creating uses---')
    try{
        const usesToCreate = [
            {use:'Asthma'},
            {use:'Anxiety'},
            {use:'Arthritis'},
            {use:'Asthma'},
            {use:'Blood Pressure'},
            {use:'Anemia'},
            {use:'Blood Sugar'},
            {use:'Cholesterol'},
            {use:'Depression'},
            {use:'Inflammation'},
            {use:'Insomnia'},
            {use:'Irritable Bowel Syndrome'},
            {use:'Menopause'},
            {use:'Premenstrual Syndrome'},
            {use:'Stress'},
        ]
        const uses = await Promise.all(usesToCreate.map(createUse))
        console.log('---uses created---')
    }
    catch(error){
        console.log('error creating uses')
    }
}

async function createInitialOrdersProducts(){
    console.log('---start creating orders_products---') 
      try{
    const OP = [
        {  
            orderId:1,
            productId:1,
            quantity:1,
            size:"small",
            price:1.00
        },
        {
            orderId:2,
            productId:2,
            quantity:2,
            size:"large",
            price:6.00
        },
        {
            orderId:2,
            productId:4,
            quantity:1,
            size:"small",
            price:4.50
        },
        {
            orderId:3,
            productId:2,
            quantity:2,
            size:"small",
            price:3.00
        },
        {
            orderId:1,
            productId:4,
            quantity:8,
            size:"small",
            price: 36
        },
        {
            orderId:1,
            productId:2,
            quantity:3,
            size:"large",
            price: 4.50
        }
    ]
    const OSPS = await Promise.all(OP.map(createOrdersProducts))
    console.log('---orders_products created ---')
    
      }catch (error) {
        console.log('ERROR @ createInitialOrdersProducts')
        throw error
      }
}

async function createInitialProductsUses(){
    console.log('---start creating products_uses---') 
    try{
  const PU = [
      {  
        productId:1,
        usesId:1
      },
      {  
        productId:2,
        usesId:2
      },
      {  
        productId:3,
        usesId:2
      },
      {  
        productId:16,
        usesId:2
      },
      {  
        productId:2,
        usesId:3
      },
      {  
        productId:4,
        usesId:3
      },
      {  
        productId:1,
        usesId:3
      },
      {  
        productId:5,
        usesId:3
      },
      {  
        productId:1,
        usesId:4
      },
      {  
        productId:17,
        usesId:4
      },
      {  
        productId:5,
        usesId:5
      },
      {  
        productId:6,
        usesId:5
      },
      {  
        productId:7,
        usesId:5
      },
      {  
        productId:9,
        usesId:5
      },
      {  
        productId:8,
        usesId:6
      },
      {  
        productId:7,
        usesId:6
      },
      {  
        productId:18,
        usesId:7
      },
      {  
        productId:6,
        usesId:7
      },
      {  
        productId:10,
        usesId:7
      },
      {  
        productId:18,
        usesId:8
      },
      {  
        productId:5,
        usesId:8
      },
      {  
        productId:10,
        usesId:8
      },
      {  
        productId:18,
        usesId:9
      },
      {  
        productId:7,
        usesId:9
      },
      {  
        productId:16,
        usesId:9
      },
      {  
        productId:3,
        usesId:9
      },
      {  
        productId:11,
        usesId:10
      },
      {  
        productId:12,
        usesId:10
      },
      {  
        productId:10,
        usesId:10
      },
      {  
        productId:2,
        usesId:11
      },
      {  
        productId:12,
        usesId:11
      },
      {  
        productId:9,
        usesId:11
      },
      {  
        productId:11,
        usesId:12
      },
      {  
        productId:2,
        usesId:12
      },
      {  
        productId:5,
        usesId:12
      },
      {  
        productId:12,
        usesId:12
      },
      {  
        productId:15,
        usesId:12
      },
      {  
        productId:13,
        usesId:13
      },
      {  
        productId:14,
        usesId:13
      },
      {  
        productId:10,
        usesId:13
      },
      {  
        productId:13,
        usesId:14
      },
      {  
        productId:2,
        usesId:14
      },
      {  
        productId:8,
        usesId:14
      },
      {  
        productId:2,
        usesId:15
      },
      {  
        productId:17,
        usesId:15
      },
      {  
        productId:18,
        usesId:15
      },
      {  
        productId:12,
        usesId:15
      },
      {  
        productId:15,
        usesId:15
      },
      
  ]
  //console.log("PU: ",PU)
  const productUsesSeed = await Promise.all(PU.map(createProductsUses))
  console.log('---products_uses created---')
    }
    catch (error) {
      console.log('ERROR @ createInitialProductsUses')
      throw error
    }
}

async function createInitialPrices(){
    console.log('---start creating prices---') 
    try{
  const prices = [
    {  
        productId:1,
        size:"small",
        price:1.00
    },
    {  
        productId:1,
        size:"large",
        price:2.00
    },
    {  
        productId:2,
        size:"small",
        price:1.50
    },
    {  
        productId:2,
        size:"large",
        price:3.00
    },
    {  
        productId:3,
        size:"small",
        price:1.11
    },
    {  
        productId:3,
        size:"large",
        price:2.22
    },
    {  
        productId:4,
        size:"small",
        price:1.10
    },
    {  
        productId:5,
        size:"small",
        price:1.00
    },
    {  
        productId:5,
        size:"medium",
        price:2.00
    },
    {  
        productId:5,
        size:"large",
        price:3.00
    },
    {  
        productId:6,
        size:"small",
        price:2.00
    },
    {  
        productId:6,
        size:"large",
        price:4.00
    },
    {  
        productId:7,
        size:"small",
        price:1.2
    },
    {  
        productId:8,
        size:"small",
        price:1.2
    },
    {  
        productId:8,
        size:"medium",
        price:2.4
    },
    {  
        productId:8,
        size:"large",
        price:4.8
    },
    {  
        productId:9,
        size:"small",
        price:4.00
    },
    {  
        productId:9,
        size:"large",
        price:9.00
    },
    {  
        productId:10,
        size:"small",
        price:1.00
    },
    {  
        productId:10,
        size:"large",
        price:2.00
    },
    {  
        productId:11,
        size:"large",
        price:6.00
    },
    {  
        productId:12,
        size:"small",
        price:3.00
    },
    {  
        productId:12,
        size:"large",
        price:6.00
    },
    {  
        productId:13,
        size:"small",
        price:1.00
    },
    {  
        productId:13,
        size:"large",
        price:3.00
    },
    {  
        productId:14,
        size:"small",
        price:1.5
    },
    {  
        productId:14,
        size:"medium",
        price:3.5
    },
    {  
        productId:14,
        size:"large",
        price:4.5
    },
    {  
        productId:15,
        size:"small",
        price:.9
    },
    {  
        productId:15,
        size:"medium",
        price:1.8
    },
    {  
        productId:15,
        size:"large",
        price:4.6
    },
    {  
        productId:16,
        size:"large",
        price:7.00
    },
    {  
        productId:17,
        size:"small",
        price:2.00
    },
    {  
        productId:17,
        size:"large",
        price:4.00
    },
    {  
        productId:18,
        size:"small",
        price:2.00
    },
  ]
  //console.log("prices:",prices)
  const priceSeed = await Promise.all(prices.map(createPrice))
  console.log('---prices created---')
    }
    catch (error) {
      console.log('ERROR @ createInitialPrices')
      throw error
    }
}

async function rebuildDB(){
    try{
        client.connect(),
        await dropTables(),
        await createTables(),
        await createInitialUsers(),
        await createInitialProducts(),
        await createInitialOrders(),
        await createInitialUses(),
        await createInitialOrdersProducts(),
        await createInitialProductsUses(),
        await createInitialPrices()
    }
    catch(error){
        console.log("---error rebuildDb---")
        throw(error)
    }
}

module.exports = {
    rebuildDB
}