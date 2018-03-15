import v1Router from './V1/router';

const apiRoutes = (app) => {
  app.use('/api', v1Router);
};

export default apiRoutes;

