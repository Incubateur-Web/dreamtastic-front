import { useLocation } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

type Props = { code: number; error: Error };

export default function ErrorPage() {
  const { state } = useLocation<Props>();

  return (
    <DefaultLayout>
      <div className="text-6xl text-white text-center mt-16">
        {state.code} {state.error?.message}
      </div>
    </DefaultLayout>
  );
}
