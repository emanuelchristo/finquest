export const nth = function(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
  }
};
export const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const CoursePageData = {
  forex: {
    id: "forex",
    image: "/images/heroimage.png",
    toughness: "BEGINNER",
    title: "Trade Like an institution",
    description:
      "A 12 week course that equip you with skills for the success in forex trading. The course covers everything from the basics to the advanced strategies. Learn with interactive classes and community.",
    review: "Trusted by 800+ learners",
    rating: "4.7/5",
    duration: "12 weeks",
    deadline:'5 Apr 2023',
    weekend:'5 Apr 2023',
    details: [
      {
        heading: "10 Slots",
        content: "Available",
      },
      {
        heading: "Mal/Eng",
        content: "Language",
      },
      {
        heading: "12 weeks",
        content: "Duration",
      },
    ],
    newprice: "₹24,999",
    oldprice: "₹29,999",
    offprice: 18,

    features: [
      {
        imagepath: "/icons/scholar.png",
        content1: "Zero fee",
        content2: "challenge",
      },
      {
        imagepath: "/icons/chart.png",
        content1: "Small group session",
        content2: "(1:10)",
      },
      {
        imagepath: "/icons/bulb.png",
        content1: "Live trading &",
        content2: "flexible timing",
      },
    ],
   
    whatyouwilllearn: [
      {
        iconLink: "/images/course/icons/whatyouwilllearn-1.svg",
        title: "Ace the market with supply and demand ",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-2.svg",
        title: "Liquidity markups and Grabbing theory",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-3.svg",
        title: "How Break of structure influences the market?",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-4.svg",
        title: "Structure mapping",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-5.svg",
        title: "Understanding the controlling side of the market",
      },

      // {
      //   iconLink: "/images/course/icons/whatyouwilllearn-6.svg",
      //   title: "Psychology of forex Trading",
      // },
    ],
    cards: [
      {
        imagepath: "/icons/bulb.png",
        content1: "Zero fee",
        content2: "challenge",
      },
      {
        imagepath: "/icons/scholar.png",
        content1: "Small group session",
        content2: "(1:10)",
      },
      {
        imagepath: "/icons/chart.png",
        content1: "Live trading &",
        content2: "flexible timing",
      },
    ],
  
    whoisthisfor: [
      {
        iconLink: "/images/course/icons/whoisthisfor-1.svg",
        title: "Absolute Beginners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-6.svg",
        title: "Students & Freelancers",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-3.svg",
        title: "Entrepreneurs/Business Owners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-4.svg",
        title: "Salaried Employees",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-5.svg",
        title: "Finance Enthusiasts",
      },

      {
        iconLink: "/images/course/icons/whoisthisfor-2.svg",
        title: "Retirees",
      },
    ],
    howwillyouspendyourtime: [
      {
        duration: "6 Weeks",
        title: "Live Trading",
        content:
          "Practice & Compare strategies & trades with expert trades to trade confidently.",
        color: "buttonblue",
      },
      {
        duration: "12 Weeks",
        title: "Live Sessions",
        content:
          "We host live sessions for more specific & personalized learning throughout the first 12 weeks.",
        color: "buttongreen",
      },
      {
        duration: "8 Weeks",
        title: "Q&A session",
        content:
          "Get your doubts resolved during the live sessions in the easiest ways possible.",
        color: "buttonpink",
      },
      {
        duration: "Lifetime",
        title: "Community access",
        content:
          "Interact with 1000+ learners. Clear your doubts and exchange strategy ideas every day.",
        color: "buttonpurple",
      },
    ],

    emiavailable: false,
    message: "I would like to join the 'forex trading' plan",
    curriculumbuiltbythebest: {
      title: "Starter Program Launch Offer (Save ₹14,500)",
      point:
        "Enroll now and get bonuses worth ₹14,500 free. There was never a better time to grab this on-demand program.",
    },
    curriculum: {
      title: "Forex Trading",
      description:
        "The Programs lasts for 4 to 8 weeks. Once in, the students received One year access to loads of resources, live support and a community to help excel.",
      duration1: {
        title: ["Week 1", "Orientation + Basic Learning + Doubt Clearing"],
        points: [
          {
            title: "Monday - 7:30PM to 8:30PM",
            description: "Ice-breaking and Welcome Session",
          },
          {
            title: "Tuesday - 6:00PM to 8:00PM",
            description: "Live Classroom Training, Strategy Discussion",
          },
          {
            title: "Wednesday - 5:00PM to 7:00PM",
            description: "Screener Discussions",
          },
        ],
      },

      duration2: {
        title: [
          "Week 2 to Week 4",
          "Practical Community-based Learning + Live Trading",
        ],
        points: [
          {
            title: "Live Trading",
          },
          {
            title: "Premium Support and Community Access",
          },
          {
            title: "Access to all of our trades and analysis",
          },
          {
            title: "Weekly Catchup and Review Sessions",
          },
          {
            title: "Last Thursday 4 PM - 4 PM",
          },
        ],
      },
    },
    oursubscription:{
      emi:[
         {
    id: 1,
    plan: "one time",
    price: 399,
    mostenrolled: false,
    default: true,
  },
  {
    id: 2,
    plan: "two time",
    price: 599,
    mostenrolled: true,
    default: false,
  },
  {
    id: 3,
    plan: "three time",
    price: 6999,
    mostenrolled: false,
    default: false,
  },
      ]
    }
  },
  starter: {
    id: "starter",
    toughness: "Beginner",
    title: "Kickstart your Stock market journey in less than 6 weeks!",
    description:
      "A 6 week cohort-based program that will build your knowledge around Stock market, Personal finance, Money basics with a community that is a hub for the Stock market experts & enthusiasts.",
    review: "Trusted by 800+ learners",
    rating: "4.7/5",
    duration: "6 weeks",
    deadline:'13 Apr 2023',
    weekend:'16 Apr 2023',
    details: [
      {
        heading: "15 Slots",
        content: "Available",
      },
      {
        heading: "Malayalam",
        content: "Language",
      },
      {
        heading: "6 Weeks",
        content: "Duration",
      },
    ],
    newprice: "₹8,999",
    oldprice: "₹16,499",
    features: [
      {
        imagepath: "/icons/scholar.png",
        content1: "Zero fee",
        content2: "challenge",
      },
      {
        imagepath: "/icons/chart.png",
        content1: "Small group session",
        content2: "(1:10)",
      },
      {
        imagepath: "/icons/bulb.png",
        content1: "Live trading  &",
        content2: "flexible timing",
      },
    ],
    offprice: 47,
    cards: [
      {
        imagepath: "/icons/bulb.png",
        content1: "Zero fee",
        content2: "challenge",
      },
      {
        imagepath: "/icons/scholar.png",
        content1: "Small group session",
        content2: "(1:10)",
      },
      {
        imagepath: "/icons/chart.png",
        content1: "Live trading &",
        content2: "flexible timing",
      },
    ],
    lastdate: "29 June",
    upcomingcohort: "1 July",
    whoisthisfor: [
      {
        iconLink: "/images/course/icons/whoisthisfor-1.svg",
        title: "Absolute Beginners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-6.svg",
        title: "Students & Freelancers",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-3.svg",
        title: "Entrepreneurs/Business Owners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-4.svg",
        title: "Salaried Employees",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-5.svg",
        title: "Finance Enthusiasts",
      },

      {
        iconLink: "/images/course/icons/whoisthisfor-2.svg",
        title: "Retirees",
      },
    ],
    whatyouwilllearn: [
      {
        iconLink: "/images/course/icons/whatyouwilllearn-1.svg",
        title: "Train the candidate on Price Action",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-2.svg",
        title: "Profitable Intraday Strategies ",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-3.svg",
        title: "Reading Charts, Price Pattern Analysis.",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-4.svg",
        title: "How the Stock Market Works",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-5.svg",
        title: "Mastering Risk and Money management",
      },

      {
        iconLink: "/images/course/icons/whatyouwilllearn-6.svg",
        title: "Intelligent target and stop loss",
      },
    ],
    howwillyouspendyourtime: [
      {
        duration: "4 Weeks",
        title: "Live Trading",
        content:
          "Practice & Compare strategies & trades with expert trades to trade confidently.",
        color: "buttonblue",
      },
      {
        duration: "6 Weeks",
        title: "Live Sessions",
        content:
          "We host live sessions for more specific & personalized learning throughout the first 6 weeks.",
        color: "buttongreen",
      },
      {
        duration: "6 Weeks",
        title: "Q&A session",
        content:
          "Get your doubts resolved during the live sessions in the easiest ways possible.",
        color: "buttonpink",
      },
      {
        duration: "Lifetime",
        title: "Community access",
        content:
          "Interact with 1000+ learners. Clear your doubts and exchange strategy ideas every day.",
        color: "buttonpurple",
      },
    ],

    lastdate: "29 June",
    upcomingcohort: "1 July",
    whoisthisfor: [
      {
        iconLink: "/images/course/icons/whoisthisfor-1.svg",
        title: "Absolute Beginners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-6.svg",
        title: "Students & Freelancers",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-3.svg",
        title: "Entrepreneurs/Business Owners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-4.svg",
        title: "Salaried Employees",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-5.svg",
        title: "Finance Enthusiasts",
      },

      {
        iconLink: "/images/course/icons/whoisthisfor-2.svg",
        title: "Retirees",
      },
    ],
    emiavailable: true,
    message: "I would like to join the 'Starter' plan",
    curriculumbuiltbythebest: {
      title: "Starter Program Launch Offer (Save ₹7500)",
      point:
        "Enroll now and get bonuses worth ₹7,500 free. There was never a better time to grab this on-demand program.",
    },
    curriculum: {
      title: "Forex Trading",
      description:
        "The Programs lasts for 4 to 8 weeks. Once in, the students received One year access to loads of resources, live support and a community to help excel.",
      duration1: {
        title: ["Week 1", "Orientation + Basic Learning + Doubt Clearing"],
        points: [
          {
            title: "Monday - 7:30PM to 8:30PM",
            description: "Ice-breaking and Welcome Session",
          },
          {
            title: "Tuesday - 6:00PM to 8:00PM",
            description: "Live Classroom Training, Strategy Discussion",
          },
          {
            title: "Wednesday - 5:00PM to 7:00PM",
            description: "Screener Discussions",
          },
        ],
      },

      duration2: {
        title: [
          "Week 2 to Week 4",
          "Practical Community-based Learning + Live Trading",
        ],
        points: [
          {
            title: "Live Trading",
          },
          {
            title: "Premium Support and Community Access",
          },
          {
            title: "Access to all of our trades and analysis",
          },
          {
            title: "Weekly Catchup and Review Sessions",
          },
          {
            title: "Last Thursday 4 PM - 4 PM",
          },
        ],
      },
    },
    oursubscription:{
      emi:[
         {
    id: 1,
    plan: "one time",
    price: 399,
    mostenrolled: false,
    default: true,
  },
  {
    id: 2,
    plan: "two time",
    price: 599,
    mostenrolled: true,
    default: false,
  },
  {
    id: 3,
    plan: "three time",
    price: 6999,
    mostenrolled: false,
    default: false,
  },
      ]
    }
  },
  professional: {
    id: "professional",
    toughness: "beginner",
    title: "From beginner to PRO TRADER",
    description:
      "A Complete Masterclass from Market Experts where you will learn about in-depth Stock Trading and Unlock a new source of Income.",
    review: "Trusted by 800+ learners",
    rating: "4.7/5",
    duration: "8 Weeks",
    deadline:'13 Apr 2023',
    weekend:'16 Apr 2023',
    details: [
      {
        heading: "15 Slots",
        content: "Available",
      },
      {
        heading: "Malayalam",
        content: "Language",
      },
      {
        heading: "8 Weeks",
        content: "Duration",
      },
    ],
    newprice: "₹12,599",
    oldprice: "₹25699",
    features: [
      {
        imagepath: "/icons/scholar.png",
        content1: "Zero fee",
        content2: "challenge",
      },
      {
        imagepath: "/icons/chart.png",
        content1: "Small group session",
        content2: "(1:10)",
      },
      {
        imagepath: "/icons/bulb.png",
        content1: "Live trading",
        content2: "flexible timing",
      },
    ],
    offprice: 51,
    cards: [
      {
        imagepath: "/icons/bulb.png",
        content1: "Zero fee",
        content2: "challenge",
      },
      {
        imagepath: "/icons/scholar.png",
        content1: "Small group session",
        content2: "(1:10)",
      },
      {
        imagepath: "/icons/chart.png",
        content1: "Live trading &",
        content2: "flexible timing",
      },
    ],
    lastdate: "29 June",
    upcomingcohort: "1 July",
    whatyouwilllearn: [
      {
        iconLink: "/images/course/icons/whatyouwilllearn-1.svg",
        title: "IntraDay and Swing stratergies",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-2.svg",
        title: "Basics of forex Trading",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-3.svg",
        title: "Fundamentals of forex Trading",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-4.svg",
        title: "FNO strategies to increase profits",
      },
      {
        iconLink: "/images/course/icons/whatyouwilllearn-5.svg",
        title: "How to read forex chart & forex Chains?",
      },

      {
        iconLink: "/images/course/icons/whatyouwilllearn-6.svg",
        title: "Tried & Tested forex Strategies",
      },
    ],
    whoisthisfor: [
      {
        iconLink: "/images/course/icons/whoisthisfor-1.svg",
        title: "Absolute Beginners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-6.svg",
        title: "Students & Freelancers",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-3.svg",
        title: "Entrepreneurs/Business Owners",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-4.svg",
        title: "Salaried Employees",
      },
      {
        iconLink: "/images/course/icons/whoisthisfor-5.svg",
        title: "Finance Enthusiasts",
      },

      {
        iconLink: "/images/course/icons/whoisthisfor-2.svg",
        title: "Retirees",
      },
    ],
    lastdate: "29 June",
    upcomingcohort: "1 July",
    howwillyouspendyourtime: [
      {
        duration: "5 Weeks",
        title: "Live Trading",
        content:
          "Practice & Compare strategies & trades with expert trades to trade confidently.",
        color: "buttonblue",
      },
      {
        duration: "8 Weeks",
        title: "Live Sessions",
        content:
          "We host live sessions for more specific & personalized learning throughout the first 6 weeks.",
        color: "buttongreen",
      },
      {
        duration: "8 Weeks",
        title: "Q&A session",
        content:
          "Get your doubts resolved during the live sessions in the easiest ways possible.",
        color: "buttonpink",
      },
      {
        duration: "Lifetime",
        title: "Community access",
        content:
          "Interact with 1000+ learners. Clear your doubts and exchange strategy ideas every day.",
        color: "buttonpurple",
      },
    ],
    emiavailable: true,
    message: "I would like to join the 'Professional' plan",
    curriculumbuiltbythebest: {
      title: "Pro Trader Program Launch Offer (Save ₹15,799)",
      point:
        "Enroll now and get bonuses worth ₹15,799 free. There was never a better time to grab this on-demand program.",
    },
    
    curriculum: {
      title: "Forex Trading",
      description:
        "The Programs lasts for 4 to 8 weeks. Once in, the students received One year access to loads of resources, live support and a community to help excel.",
      duration1: {
        title: ["Week 1", "Orientation + Basic Learning + Doubt Clearing"],
        points: [
          {
            title: "Monday - 7:30PM to 8:30PM",
            description: "Ice-breaking and Welcome Session",
          },
          {
            title: "Tuesday - 6:00PM to 8:00PM",
            description: "Live Classroom Training, Strategy Discussion",
          },
          {
            title: "Wednesday - 5:00PM to 7:00PM",
            description: "Screener Discussions",
          },
        ],
      },

      duration2: {
        title: [
          "Week 2 to Week 4",
          "Practical Community-based Learning + Live Trading",
        ],
        points: [
          {
            title: "Live Trading",
          },
          {
            title: "Premium Support and Community Access",
          },
          {
            title: "Access to all of our trades and analysis",
          },
          {
            title: "Weekly Catchup and Review Sessions",
          },
          {
            title: "Last Thursday 4 PM - 4 PM",
          },
        ],
      },
    },
    oursubscription:{
      emi:[
         {
    id: 1,
    plan: "one time",
    price: 399,
    mostenrolled: false,
    default: true,
  },
  {
    id: 2,
    plan: "two time",
    price: 599,
    mostenrolled: true,
    default: false,
  },
  {
    id: 3,
    plan: "three time",
    price: 6999,
    mostenrolled: false,
    default: false,
  },
      ]
    }
  },
};

export default CoursePageData;
