 export const utilGetCurrentLangauge = (url: string) => {
  // Determine current lang
  const languages = ["en"];
  let currentLanguage = "cn";
  languages.forEach((language) => {
    if (url.includes(`/${language}/`)) currentLanguage = language;
  });
  return "/"+currentLanguage;
};