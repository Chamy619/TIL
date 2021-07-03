import { createContext, useContext } from 'react';

const PreloadContext = createContext(null);
export default PreloadContext;

interface IPreloader {
  resolve: any;
}

export const Preloader = ({ resolve }: IPreloader) => {
  const preloadContext = useContext<any>(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;

  preloadContext.promises.push(Promise.resolve(resolve()));
  return null;
};

export const usePreloader = (resolve: any) => {
  const preloadContext = useContext<any>(PreloadContext);
  if (!preloadContext) return null;
  if (preloadContext.done) return null;
  preloadContext.promises.push(Promise.resolve(resolve()));
};
