import { bootstrapApplication } from '@angular/platform-browser';
import { Login } from './app/login/login';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(Login, config);

export default bootstrap;
