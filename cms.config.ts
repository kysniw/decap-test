const config = {
  local_backend: {
    url: "http://localhost:8082/api/v1",
    allowed_hosts: ["192.168.0.1"],
  },

  backend: {
    name: "git-gateway",
    branch: "main",
  },
  load_config_file: false,

  media_folder: "src/assets/images",
  public_folder: "src/assets/images",

  collections: [
    {
      label: "Home page",
      name: "homepage",
      files: [
        {
          label: "Hero",
          name: "hero",
          file: "content/homepage/hero.md",
          fields: [
            { label: "Title", name: "title", widget: "string" },
            { label: "Subtitle", name: "subtitle", widget: "string" },
            {
              label: "Background Image",
              name: "backgroundImage",
              widget: "image",
              required: false,
            },
            {
              label: "Button Text",
              name: "buttonText",
              widget: "string",
            },
          ],
        },
      ],
    },
    {
      label: "Porfolio",
      name: "portfolio",
      folder: "content/portfolio",
      slug: "index",
      fields: [
        { label: "Tytuł", name: "title", widget: "string" },
        {
          label: "Paragrafy",
          name: "paragraphs",
          widget: "list",
          summary: "{{fields.paragraph}}",
          field: { label: "Tekst", name: "paragraph", widget: "text" },
        },
        {
          label: "Projekty",
          name: "projects",
          widget: "list",
          fields: [
            {
              label: "Tytuł",
              name: "title",
              widget: "string",
            },
            {
              label: "Opis",
              name: "description",
              widget: "text",
            },
            {
              label: "Lokalizacja",
              name: "location",
              widget: "string",
              required: false,
            },
            {
              label: "Data",
              name: "date",
              widget: "string",
              required: false,
            },
            {
              label: "Typ projektu",
              name: "project-type",
              widget: "string",
              required: false,
            },
            {
              label: "Zdjęcia",
              name: "images",
              widget: "list",
              summary: "{{fields.image}}",
              field: { label: "Obraz", name: "image", widget: "image" },
            },
          ],
        },
      ],
    },
  ],
};

export default config;
