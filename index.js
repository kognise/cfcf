const { listEmotes, keysForEmote, capitalize } = require('./lib')

module.exports = (req, res) => {
  const emotes = listEmotes()
  console.log(keysForEmote('neutral'))
  const emotesHtml = emotes.map((emote) => `
    <div class='emote'>
      <img src='/${emote}'>
      <h2>${capitalize(emote)}</h2>
      <ul>
        ${keysForEmote(emote).map((key) => `
          <li>${key}</li>
        `).join('')}
      </ul>
    </div>
  `).join('')

  const css = `
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
      margin: 15px;
    }

    footer {
      margin-top: 15px;
    }

    code {
      position: relative;
      top: -1px;
      font-weight: bold;
    }

    strong, h2 {
      font-weight: 600;
    }

    h1 {
      font-weight: normal;
    }

    h2 {
      margin-bottom: 10px;
    }

    ul {
      margin: 0;
      padding-left: 10px;
      list-style-position: inside;
    }

    a {
      color: #3c84fc;
      text-decoration: none;
      transition: all 0.15s ease;
    }

    a:hover {
      border-bottom: 1px solid #3c84fc;
    }

    .emotes {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 15px;
    }

    .emote {
      background-color: #ffffff;
      border-radius: 5px;
      padding: 20px;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.12);
      transition: all 0.15s ease;
    }

    .emote:hover {
      transform: translateY(-1px);
      box-shadow: 0 7px 20px rgba(0, 0, 0, 0.12);
    }

    .emote img {
      width: 100%;
      object-fit: cover;
    }

    .content-centered {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    @media only screen and (max-width: 700px) {
      .emotes {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    @media only screen and (max-width: 540px) {
      .emotes {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media only screen and (max-width: 375px) {
      .emotes {
        grid-template-columns: 1fr;
      }
    }
  `

  const metaTags = `
    <meta name='description' content='Easily embeddable Chipflake emotes, entirely for free. I&apos;m pretty sure that&apos;s all that needs to be said, just go the site and get started.'>
    <meta charset='utf-8'>
    <title>Chipflake, Chipflake!</title>
    <meta name='description' content='Easily embeddable Chipflake emotes, entirely for free. I'm pretty sure that&apos;s all that needs to be said, just go the site and get started.'>
    <meta name='image' content='https://cfcf.now.sh/neutral'>
    <meta itemprop='name' content='Chipflake, Chipflake!'>
    <meta itemprop='description' content='Easily embeddable Chipflake emotes, entirely for free. I'm pretty sure that&apos;s all that needs to be said, just go the site and get started.'>
    <meta itemprop='image' content='https://cfcf.now.sh/neutral'>
    <meta name='twitter:card' content='summary'>
    <meta name='twitter:title' content='Chipflake, Chipflake!'>
    <meta name='twitter:description' content='Easily embeddable Chipflake emotes, entirely for free. I'm pretty sure that&apos;s all that needs to be said, just go the site and get started.'>
    <meta name='twitter:site' content='@ArchMaster666'>
    <meta name='twitter:image:src' content='https://cfcf.now.sh/neutral'>
    <meta name='og:title' content='Chipflake, Chipflake!'>
    <meta name='og:description' content='Easily embeddable Chipflake emotes, entirely for free. I'm pretty sure that&apos;s all that needs to be said, just go the site and get started.'>
    <meta name='og:image' content='https://cfcf.now.sh/neutral'>
    <meta name='og:url' content='https://cfcf.now.sh/'>
    <meta name='og:site_name' content='Chipflake, Chipflake!'>
    <meta name='og:locale' content='en_US'>
    <meta name='og:type' content='website'>
  `

  res.end(`
    <!DOCTYPE html>
    <html lang='en'>
      <head>
        <title>Chipflake, Chipflake!</title>
        <style>
          ${css}
        </style>
        ${metaTags}
      </head>
      <body>
        <h1>
          <strong>Chipflake, Chipflake!</strong> &mdash; Easily Embeddable Chipflake Emotes
        </h1>
        <div class='emotes'>
          ${emotesHtml}
          <div class='emote content-centered'>
            <h2>Something missing?</h2>
            <p>
              Want to suggest another emote? Feel free to contact me on <a href='https://twitter.com/ArchMaster666' target='_blank' rel='noopener'>Twitter</a> or at <code>archmaster#6356</code> on Discord.
            </p>
            <p>
              I'm always happy to add new Chipflakes and want to create a useful collection for all your Chipflake-emoting needs.
            </p>
          </div>
        </div>
        <footer>
          Made by <a href='https://twitter.com/ArchMaster666' target='_blank' rel='noopener'>Arch Master</a> on a whim. Request <code>/&lt;emote&gt;</code> to for a normal emote, and <code>/s/&lt;emote&gt;</code> for a small version.
        </footer>
      </body>
    </html>
  `)
}