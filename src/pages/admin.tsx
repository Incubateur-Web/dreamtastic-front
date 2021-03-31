import DefaultLayout from "../layouts/DefaultLayout";
import UserList from "../components/admin/UserList";
import DreamList from "../components/admin/DreamsList";

export default function AdminPage() {
  return (
    <DefaultLayout>
      <div className="text-center text-3xl mb-8">Page administrateur</div>
      <div className="flex flex-col md:flex-row">
        <UserList />
        <DreamList />
      </div>
    </DefaultLayout>
  );
}
