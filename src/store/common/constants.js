 const BASE_URL = "https://convrtx.com/convertx_app/api";
 //const BASE_URL = "https://mmfinfotech.co/convertx_app/api";

 const AUTHORIZATION = "Authorization";
 const COOKIE_EXPIRED = 60 * 60 * 24 * 365;
 const APIs = {
     SEND_CONTACT_QUERY: "/contactUs",
     GET_ALL_PORTFOLIOS: "/getPortfolioList",
     GET_PORTFOLIO_DETAIL: "/getPortfolioDetail",
     GET_ALL_EVENTS: "/geteventList",
     GET_EVENT_DETAIL: "/geteventDetail",
     GET_PARTNERS: "/getpartnershipList",
     GET_BLOG_DETAIL: "/getBlogDetails",
     GET_ALL_BLOGS: "/getBlogList",
     GET_BLOG_EVENT_PORTFOLIO: "/homePageApi",

     CREATE_PARTNER_LEAD: "/createPartnerLead",
     CREATE_PITCH_OFF_COMPETITION: "/createPitchOffCompetition",
     CREATE_PITCH_DUCK: "/createPitchDuck",
     ADD_NEWSLETTER: "/addNewsLatter",
 };

 export { BASE_URL, COOKIE_EXPIRED, APIs, AUTHORIZATION };