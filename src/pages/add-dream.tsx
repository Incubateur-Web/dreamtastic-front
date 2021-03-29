import { useRequireUser } from "../hooks/useRequireUser";
import DefaultLayout from "../layouts/DefaultLayout";

export default function AddDreamPage() {
  useRequireUser();

  return (
    <DefaultLayout>
      <div className="container mx-auto">
        <span className="uppercase">Raconte-nous ton rêve</span>
        <form onSubmit={(e) => e.preventDefault()}></form>
      </div>
    </DefaultLayout>
  );
}
