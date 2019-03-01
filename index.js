const { listEmotes, keysForEmote, capitalize } = require('./lib')

module.exports = (req, res) => {
  const emotes = listEmotes()
  console.log(keysForEmote('neutral'))
  const emotesHtml = emotes.map((emote) => `
    <div class='emote'>
      <img src='https://cfcf.now.sh/${emote}'>
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

  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Chipflake, Chipflake!</title>
        <style>
          ${css}
        </style>
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