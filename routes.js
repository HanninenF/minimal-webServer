const routes = {
  "/": {
    title: "Start - Min Server",
    content: `
      Välkommen till startsidan!
      Detta är en minimal Node.js server med enkel routing.
  
    `,
  },
  "/about": {
    title: "Om oss - Min Server",
    content: `  
      Om oss: <br>  
      Vi är ett litet team som bygger enkla webblösningar.
      Den här servern använder bara Node.js inbyggda moduler!
    `,
  },
  "/contact": {
    title: "Kontakt - Min Server",
    content: `
      Kontakta oss <br>
      E-Post: hello@exampel.se <br>
      Telefon: 123-123 45 67 <br>
    `,
  },

  "/404": {
    title: "Sidan finns inte - Min Server",
    content: `
    Hoppsan! Sidan du försökte nå finns inte.
  `,
  },
};
export default routes;
