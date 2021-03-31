import axios from "axios";
import { useContext } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../../contexts/UserContext";

type Props = { dreamId: string };

export function NewCommentForm({ dreamId }: Props) {
  const { user } = useContext(UserContext);
  const { go } = useHistory();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    try {
      const datas = new FormData(e.currentTarget);
      const content = datas.get("new-comment");

      await axios.post(`/dreams/${dreamId}/comments`, {
        content,
        author: user!.id,
      });
      go(0);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label htmlFor="new-comment" className="text-gray-500 font-semibold">
          Nouveau commentaire
        </label>
        <textarea
          name="new-comment"
          id="new-comment"
          placeholder="Ex: au millieu d'une jungle..."
          rows={3}
          className="border border-gray-300 p-2"
        />
      </div>

      <button
        type="submit"
        className="focus:outline-none bg-dark-violet hover:bg-light-violet rounded-full px-10 py-2 uppercase text-white font-semibold"
      >
        Publier
      </button>
    </form>
  );
}
