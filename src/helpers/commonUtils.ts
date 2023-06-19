const defaultLanguage = "cn";
import i18next from "i18next";
/**
 * @function - gets the current language from the url
 * @param {string}url - string variable to be checked
 * @returns - the current language, blank if currently using the default language
 */
export const utilGetCurrentLanguage = (url: string) => {
  const languages = i18next.languages;
  for(var i = 0 ; i < languages.length ; i++){
    if(url.includes(`/${languages[i]}/`)){
      return "/"+languages[i];
    }
  }
  return "";

};
/**
 * @function - checks if url contains slug
 * @param {string} url - url to check if it contains slug
 * @param {string} slug - slug to be checked
 * @returns {boolean} - true if url contains slug, false otherwise
 */
export const utilCurrentPage = (url:string, slug:string) => {
  return url.includes(slug);
}
/**
 * 
 * @param url - url to be trimmed
 * @returns - url defaulted to default language
 */
export const trimLanguageFromLink = (url:string) => {
  const languages = i18next.languages;
  //language is found in the start of the url
  let links = url.split("/");
  links.pop();
  links.shift();
  

  if( links.length && languages.includes(links[0]) ){
    links.shift();
    
  }
  let joinedLink = links.join("/");
  return joinedLink;
}