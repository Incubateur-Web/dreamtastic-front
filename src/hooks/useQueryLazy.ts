import { AxiosRequestConfig } from "axios";
import { useState } from "react";

type Options = { options?: AxiosRequestConfig; data?: any };

export const useQueryLazy = (url: string, method: Function, opts?: Options) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [called, setCalled] = useState<boolean>(false);

  const query = (data?: any): void => {
    setCalled(true);
    setLoading(true);

    let promise = null;
    if (opts?.data) promise = method.call(this, url, opts.data, opts.options);
    else if (data) promise = method.call(this, url, data, opts?.options);
    else promise = method.call(this, url, opts?.options);
    promise
      .then(({ data: fetchedData }: { data: any }) => {
        setData(fetchedData);
      })
      .catch((e: any) => {
        console.log(e);
        setError(e);
      })
      .finally(() => setLoading(false));
  };

  return { query, data, error, loading, called };
};
