# GitHub Blog

A personal blog built with React.js + TypeScript + GitHub API. It is the third challenge of [Rocketseat's](https://www.rocketseat.com.br/) React.js course. It is deployed [here](https://github-blog-bernardodemarco.netlify.app/).

![homepage-image](https://github.com/bernardodemarco/coffee-delivery/assets/115510880/96c5eb94-f48c-48be-aee5-92f0b3be0902)

## About the project

On the application's main page, there is a card with my GitHub profile data. It contains my photo, name, short description, GitHub username, organization, number of followers and a link to my profile. All of this data has been fetched using the [GitHub Users API](https://docs.github.com/pt/rest/users/users).

Below the profile card, there is a form in which the user can search for posts, followed by the posts grid. The filtering has been done using the [GitHub Search API](https://docs.github.com/pt/rest/search), as well as the fetching of post data.

![searching-posts-action](https://github.com/bernardodemarco/coffee-delivery/assets/115510880/e64bd8c4-ff9e-4e07-8e7d-1afce1a42a4d)

Whenever the user clicks on a post card, they are redirected to the corresponding post page. There is all the information related to the post, like title, author, number of comments, and, most importantly, the content. The [GitHub Issues API](https://docs.github.com/pt/rest/issues/issues) has been used to retrieve all of this data.

![post-details-1](https://github.com/bernardodemarco/coffee-delivery/assets/115510880/b8857fbf-73f9-4c87-98b1-76fdccadee00)

![post-details-2](https://github.com/bernardodemarco/coffee-delivery/assets/115510880/d7cfa6e8-6abc-4021-b7e7-7bba9f04c24a)

All of the posts are [issues](https://github.com/bernardodemarco/github-blog/issues) from this repository that have the label **_blog-post_**.

## 🛠️ Built With

- **React.js**
- **TypeScript**
- **Styled Components**
- **Axios**
- **React Router**
- **React Markdown**

## 🚀 Setup

Clone this repository:

```bash
  # clone this repository
  git clone https://github.com/bernardodemarco/github-blog.git
```

Go to the project's folder and run the following commands:

```bash
  # install dependencies
  npm i

  # runs web app on http://localhost:5173/
  npm run dev
```

**_Bernardo De Marco Gonçalves, June 2023._**
