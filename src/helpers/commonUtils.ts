const defaultLanguage = "cn";
import i18next from "i18next";
export const utilGetCurrentLangauge = (url: string) => {
  const languages = i18next.languages;
  for(var i = 0 ; i < languages.length ; i++){
    if(url.includes(`/${languages[i]}/`)){
      return "/"+languages[i];
    }
  }
  return "";

};