declare module "express" {
  interface App {
    use: (path: string, router: Router) => void;
    listen(port: number, cb?: () => void): void;
  }
  interface Router {
    get: (path: string, cb?: (req: any, res: any) => void) => {};
  }
  interface Express {
    (): App;
    Router(): Router;
  }

  const express: Express;
  export default express;
}
