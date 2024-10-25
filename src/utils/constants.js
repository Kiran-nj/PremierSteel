import jswLogo from '../assets/images/partners/jsw-logo.png';
import amnsLogo from '../assets/images/partners/amns-logo.png';
import jspLogo from '../assets/images/partners/jsp-logo.jpg';
import sailLogo from '../assets/images/partners/sail-logo.png';
import vizagLogo from '../assets/images/partners/vizag-logo.jpg';
import apolloLogo from '../assets/images/partners/apollo-logo.png';
import steelAngles from '../assets/steelangles.jpg';
import channel from '../assets/channel.jpg';
import sheet from '../assets/sheet.jpg';
import angles from '../assets/angles.jpg';
import flats from '../assets/steelangles.jpg'; // Update if it's a different image
import rounds from '../assets/round.jpg';
import squareAndRound from '../assets/squareandround.jpg';
import sheet2 from '../assets/sheet2.jpg';
import founderImg from '../assets/founder.jpeg';

export const moreList = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export const partners = [
  { name: 'JSW', logo: jswLogo },
  { name: 'AM/NS India', logo: amnsLogo },
  { name: 'Jindal Steel & Power', logo: jspLogo },
  { name: 'SAIL', logo: sailLogo },
  { name: 'Vizag Steel', logo: vizagLogo },
  { name: 'APL Apollo', logo: apolloLogo }
];


export const productsList = [
    { title: 'MS Joints', category: 'Energy / Tools', imageSrc: steelAngles },
    { title: 'MS Channels', category: 'Energy / Tools', imageSrc: channel },
    { title: 'MS Plates', category: 'Energy / Tools', imageSrc: sheet },
    { title: 'MS Angles', category: 'Energy / Tools', imageSrc: angles },
    { title: 'MS Flats', category: 'Energy / Tools', imageSrc: flats },
    { title: 'MS Rounds', category: 'Energy / Tools', imageSrc: rounds },
    { title: 'MS Squares', category: 'Energy / Tools', imageSrc: squareAndRound },
    { title: 'MS Chequered Plates', category: 'Energy / Tools', imageSrc: sheet2 },
    { title: 'GP/MS Tubes & Pipes', category: 'Energy / Tools', imageSrc: squareAndRound },
  ];

  export const featuredProjects = [
      { id: '01', name: 'MS Joints', image: steelAngles, description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
      { id: '02', name: 'MS Channels', image: channel, description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
      { id: '03', name: 'MS Plates', image: sheet, description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
      { id: '04', name: 'GP/MS Tubes & Pipes', image: squareAndRound, description: 'Sponge iron is the key raw material required to manufacture high quality steel. It is quite versatile and can be used in both induction as well as electric arc furnaces.' },
  ];

  export const teamMembers = [
    {
      role: "Founder",
      name: "Mr. V A Mohamed Ashraf",
      description: [
        "Premier steels is established in 1982 by V A Mohamed Ashraf (Achu).",
        "Premier Steels started as a small business to become one of the most respected names in the Stainless Steel market.",
        "With a huge stock ranging from S.S Pipes, Sheets, Angles, and various other products all available at competitive prices, we also assure an exceptional quality of our products.",
        "We are also the authorised dealers of JNB Steels and as said above, quality is our first priority.",
        "Another product worth mentioning is the Coloured, PVD Coated Stainless Steel Sheet, which is in popular demand for its visual appeal and various other advantages.",
      ],
      image: founderImg // Image path for founder
    },
    {
      role: "CEO",
      name: "Mr. Zakir",
      description: [],
      image: founderImg // Image path for co-founder
    }
  ];

  export const blogPosts = [
    {
      id: 1,
      title: "What is Steel?",
      date: "October 24, 2024",
      summary: `STEEL, the world's foremost construction material, is an iron alloy that contains between 0.2% and 2% carbon by weight.The advent of commercial steel production came in the late 19th century and was a result of Sir Henry Bessemer's creation of an efficient way to lower the carbon content in cast iron. By lowering the amount of carbon in iron to about 2 percent, the much harder and more malleable metal product of steel is produced. However, for a 360 view of the history of steel, you'll have to go back 4,000 years to the beginning of the Iron Age. Steel has been with us for a very long time.`,
      link: "/factfile/what-is-steel",
    },
    {
      id: 2,
      title: "Steel Production Methods",
      date: "October 15, 2024",
      summary: `Today, most steel is produced by basic oxygen methods (also known as basic oxygen steel making or BOS). BOS derives its name from the process that requires oxygen to be blown into large vessels containing molten iron and scrap steel.

Although BOS accounts for the largest share of global steel production, the use of electric arc furnaces (EAF) has been growing since the early 20th century and now accounts for about one-third of all steel production.`,
      link: "/factfile/steel-production-methods",
    },
    {
      id: 3,
      title: "Steel Grades Explained",
      date: "September 30, 2024",
      summary: "According to the World Steel Association, there are over 3,500 different grades of steel, classified into four main groups: Carbon Steels (low, medium, and high carbon), Alloy Steels (with manganese, silicon, nickel, and chromium), Stainless Steels (containing about 10% chromium), and Tool Steels (alloyed with molybdenum and tungsten). Understanding these grades is crucial for selecting the right type for specific applications.",
      link: "/factfile/steel-grades-explained",
    },    
    {
      id: 4,
      title: "Applications of Stainless Steel",
      date: "September 15, 2024",
      summary: `It is steel's properties that have made it the most widely used and most recycled metal material on earth. From stainless and high-temperature steels to flat carbon products, steel's various forms and alloys offer different properties to meet a wide range of applications.

For these reasons, as well as the metal's combination of high strength and a relatively low production cost, steel is a durable and aesthetic metal used today in countless products. Besides the appliances in your kitchen, you will also find steel used in many applications in the automotive industry, building structures, aircraft, ships, pipelines, electrical transformers, and hundreds of other applications.`,
      link: "/factfile/stainless-steel-applications",
    },
    {
      id: 5,
      title: "The History of Steel",
      date: "August 20, 2024",
      summary: "Steel has a rich history dating back thousands of years, evolving from wrought iron to modern alloys. Understanding its history provides insight into its significance in human development and industry.",
      link: "/factfile/history-of-steel",
    },
    {
      id: 6,
      title: "Environmental Impact of Steel Production",
      date: "July 10, 2024",
      summary: "Steel production is energy-intensive and has environmental implications. However, advancements in recycling and sustainable practices are helping to reduce its carbon footprint.",
      link: "/factfile/environmental-impact-steel",
    },
    // Add more blog posts as needed
  ];

export const companyPhoneNo = '8589043416'
export const companyEmail = 'premiersteels0020@gmail.com'