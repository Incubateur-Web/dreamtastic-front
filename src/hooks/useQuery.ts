import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";

type Options = { options?: AxiosRequestConfig; data?: any };

export const useQuery = (url: string, method: Function, opts?: Options) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let promise = null;
    if (opts?.data) promise = method.call(this, url, opts.data, opts.options);
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
  }, [url, opts, method]);

  return { data, error, loading };
};
