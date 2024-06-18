import { useEffect, useState } from 'react';

const localCache = {};

export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null,
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null,
    });
  };

  const getFetch = async () => {
    if (localCache[url]) {
      console.log('Usando cache');
      setState({
        data: {
          id: localCache[url].id,
          name: localCache[url].name,
          sprites: localCache[url].sprites,
        },
        isLoading: false,
        hasError: false,
        error: null,
      });
      return;
    }
    setLoadingState();

    const resp = await fetch(url);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    if (!resp.ok) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText,
        },
      });
    }
    const data = await resp.json();
    console.log(data);
    setState({
      data: {
        id: data.id,
        name: data.name,
        sprites: data.sprites,
      },
      isLoading: false,
      hasError: false,
      error: null,
    });
    localCache[url] = data;
  };

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    setLoadingState,
  };
};
