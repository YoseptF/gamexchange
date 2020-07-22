# <img src="https://i.imgur.com/NMlclGV.png" height="100" /> Game X Change
---
Game x Change is a ruby/react template to publish articles and vote for them.
![top image](https://i.imgur.com/sJiF5dV.png)

---
## How to run locally

1. Clone this repository
    ```
    $ git clone git@github.com:YoseptF/gamexchange.git
    ```
2. cd into the directory (you may need to checkout to other branch depending on what you are attempting to do)
    ```
    $ cd gamesxchange/
    ```
3. bundle
    ```
    $ bundle
    ```
4. yarn install
    ```
    $ yarn install --check-files
    ```
5. Migrate and seed
    ```
    $ rails db:migrate db:seed
    ```
6. Open you browser on `localhost:3000 or 127.0.0.1:3000`

7. (optional) This project uses Azure for active storage on production, if you want to use it, you need to add the following api keys in your `.env` file:
    ```
    AZURE_STORAGE_ACCOUNT_NAME=your_storage_account
    AZURE_STORAGE_ACCESS_KEY=your_access_key
    AZURE_STORAGE_CONTAINER=your_storage_container
    ```
    or you can change from `:azure` to `:local` in the `production.rb`
---

# Live demo
 There's a [live demo](https://gamesxchange.herokuapp.com/) if you wanna check it out before downloading, or you can dowload one of the desktop versions

# Features

## Hero
The top image to engage with your public
<div style="display: flex; justify-content: space-between; width: 100%;">
<img src="https://i.imgur.com/sJiF5dV.png" height="300" />
<img src="https://i.imgur.com/w7eMhUj.png" height="300" />
<img src="https://i.imgur.com/w7eMhUj.png" height="300" />
</div>

## Data Section
Show important topics and redirect the flow of your visitors
![Data Section](https://i.imgur.com/qeWbdMQ.png)

## Testimonials
Share the opinion of your clients
![article-chess](https://i.imgur.com/9QVLW5G.png)

## Search items
Search on the list of items and check the ones you like
![article view](https://i.imgur.com/xXO1KXs.png)

## Lightbox
View more closelly the item you like
![article-creation](https://i.imgur.com/98DvczS.png)

---
Created with:

- [Rails 6](https://rubyonrails.org/)
- [Fontawesome](https://fontawesome.com/)
- [Azure](https://azure.microsoft.com/en-us/)
- [React](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
---

Created by:

- 👤 [Joseph Flores](https://github.com/YoseptF)
