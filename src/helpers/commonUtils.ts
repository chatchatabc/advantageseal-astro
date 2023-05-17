export const utilGetCurrentLangauge = (url: string) => {
  // Determine current lang
  const languages = ["en"];
  let defaultLanguage = "cn";
  let currentLanguage = "cn";
  var text="";
  languages.forEach((language) => {
    if (url.includes(`/${language}/`)) currentLanguage = language;
  });
  (defaultLanguage === currentLanguage)? text =  "" : text =  "/"+currentLanguage;
  // return defaultLanguage:
  return text;
};