import Echo from 'laravel-echo';
import { io, Socket } from 'socket.io-client';

interface App {
  // define properties of app object
}

interface Env {
  // define properties of env object
}

interface Inject {
  (key: string, value: any): void;
}

export default ({ app, env }: { app: App, env: Env }, inject: Inject): void => {
  const echo: Echo = new Echo({
    broadcaster: 'socket.io',
    client: io as unknown as Socket,
    host: `http://127.0.0.1:6001`,
  });

  inject('echo', echo);
}
