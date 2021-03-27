import Nullstack from 'nullstack';
import './Application.scss';
import Home from './Home';

class Application extends Nullstack {

  static async start(context) {
    await this.startProject(context);
    await this.startServer(context);
  }

  static async startServer({ server }) {
    server.less = true
  }

  static async startProject({ project }) {
    project.name = 'Nullstack Vercel Example';
    project.domain = 'localhost';
    project.color = '#D22365';
  }

  renderHead() {
    return (
      <head>
        <link 
          href="https://fonts.gstatic.com" rel="preconnect" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet" />
      </head> 
    )
  }

  render() {
    return (
      <main>
        <Head />
        <Home route="/" />
      </main>
    )
  }

}

export default Application;