# Advance Seals Web Project

Welcome to the Advance Seals Web Project Github repository. Here lies the documentation and definitions that you'll need to understand the project development.
<br/>
<br/>

# **Table of Contents**

## **Advance Seals Website**

You can check each of the links provided below for the original and the remade version

- [Original Site](http://www.advantageseal.cn/)
- [Remade Site](https://3cb3d79a.advantageseals-astro.pages.dev)

> Note: link is going to change throughout the development phase

## **Tech Stack**

The project uses various tech to build the website.

### **Main**

- [Astro](www.astro.build.com) with [Svelte Integration](https://docs.astro.build/en/guides/integrations-guide/svelte/) - for UI templates and interactivity
- [Tailwind CSS Integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/) - for designing web pages

### **SEO**

- [Astro-SEO](https://github.com/jonasmerlin/astro-seo#readme) - for Search Engine Optimizations

### **Image Compression and Optimizations**

- [Astro-Imagetools](https://astro-imagetools-docs.vercel.app/en/components-and-apis) - for image optimization

### **Translation**

- [Astro-i18next](https://github.com/yassinedoghri/astro-i18next#readme) - for setting-up manual translations

## **🚀 Project Structure**

Inside of your Astro project, you'll see the following folders and files:

```
/
├── data/
│   ├── pages/
│   │   └──...
│   └──...
├── public/
│   ├── images/
│   │   └──...
│   └── locales/
│       ├── cn/
│       │   └──...
│       └── en/
│           └──...
├── src/
│   ├── components/
│   │   ├─── theme/
│   │   │   ├── navbar/
│   │   │   │   └── ...
│   │   │   └── footer/
│   │   │       └── ...
│   │   └── ...
│   ├── customTypes/
│   │   ├─── seo/
│   │   │   └── ...
│   │   └── ...
│   ├── helpers/
│   │   └─── ...
│   ├── layouts/
│   │   └─── ...
│   └── pages/
│       ├── [auto-generated language-directory]
│       └── ...
└── ...
```

## **Directory Definition**

- data/
  - contains JSON files full of references for the translation tech to work. More details how it is used in [Translations and How to set it up](#)
- public/
  - contains images folder (for images) and locales (for literal translations) that is being referenced from JSON files in `data/` folder
  - locales folder **MUST** contain all the translation files you're trying to support.
- src/components/
  - contains all the `web components` being used on layouts and pages
- src/customTypes/
  - contains TypeScript Types that are being reused such as types used for SEO
- src/helpers/
  - contains all the utility files used in the project
- src/layouts/
  - contains all layout files (templates)
- src/pages
  - base directory will contain the necessary files for the base language. `Translation` section will explain how to create the pages for the other supported languages.
