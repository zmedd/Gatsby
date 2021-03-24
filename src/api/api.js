import react from React;

function getAllArticles() {
    return new Promise(async (res, rej) => {
      try {
        const articlesWithoutImage = await fetch(
          "http://lesemester.no/wp-json/wp/v2/posts/"
        ).then((response) => response.json());
        articlesWithoutImage.filter((article) =>
          article.categories.includes(7)
        );
        const image = await fetch(
          "http://lesemester.no/wp-json/wp/v2/media/" +
            articlesWithoutImage[0].featured_media
        ).then((response) => response.json());
        articlesWithoutImage[0].featured_image = image.source_url;
        const finalArticles = articlesWithoutImage
          .reverse()
          .map((article) => {
            return {
              title: article.title.rendered
                .toString()
                .replace(/(<p>)|(<\/p>)/g, "")
                .replace(/&#[0-9]{3,4};/gi, "-")
                .replace(/\n/g, "")
                .replace(/(&hellip;)/g, ""),
              excerpt: article.excerpt.rendered
                .toString()
                .replace(/(<p>)|(<\/p>)/g, "")
                .replace(/&#[0-9]{3,4};/gi, "-")
                .replace(/\n/g, "")
                .replace(/(&hellip;)/g, ""),
              link: article.link,
              ...(article.featured_image && {
                featured_image: article.featured_image,
              }),
            };
          });
        res(finalArticles);
      } catch (err) {
        rej(err);
      }
    });
  }

  async function getFinalArticles() {
    var articles = await getAllArticles();
    if (articles.length < 15) {
      for (let i = 15 - articles.length; i > 0; i--) {
        articles.push({
          title: "Titlu",
          pages: "1000page",
        });
      }
    }
    console.log(articles);
    articles.map((article, index) => {
      if (article.excerpt && article.featured_image === undefined) {
        printPastArticles(article, index + 1);
      } else if (article.featured_image !== undefined) {
        printCurrentArticle(article, index + 1);
      } else {
        printNextArticles(article, index + 1);
      }
    });
  }