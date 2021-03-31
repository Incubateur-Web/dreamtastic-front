import DefaultLayout from "../layouts/DefaultLayout";

/**
 * display a single dream
 */
export default function DreamPage() {
  return (
    <DefaultLayout>
      <div className="relative container mx-auto px-2 z-20">
        <div className="md:w-7/12 mx-auto">
          <div className="space-y-2">
            <h1 className="text-6xl text-title-cyan font-semibold">
              Des ananas par milliers
            </h1>
            {/* Info */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex justify-between items-center space-x-3">
                <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                <div className="">Théo</div>
              </div>

              <span>Rêve lucide &bull; Publié le 17 mars 2021 à 11:16</span>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1527487253850-19ea84ee398e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"
                alt=""
                className="h-32 md:h-72 w-full object-cover object-bottom"
              />
            </div>

            <div className="text-justify py-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
              provident eum nihil quod iure id tempore delectus mollitia. Atque
              quo minima voluptas facilis inventore aliquam qui numquam
              repellat, in dolorum! Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Incidunt illo expedita dolores quae asperiores
              quisquam, sit tenetur corrupti rerum molestiae dolore sequi?
              Blanditiis consequatur consectetur modi corrupti tempore magni
              officia. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Commodi illum nulla maiores sapiente et. Adipisci pariatur
              voluptate inventore, neque aut quaerat iste voluptatem eos
              eligendi doloremque, ab iure, delectus dicta. Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Neque, id provident.
              Recusandae ex iure libero, saepe nesciunt natus dolores minima
              molestias, sunt impedit quia corporis, quidem illo facere
              voluptatum! Sapiente!
            </div>
          </div>

          <div className="py-4">
            <h3 className="font-bold text-dark-violet uppercase text-lg pb-4">
              Commentaires
            </h3>

            <div id="comment-card" className="space-y-2 mb-8">
              <div className="flex justify-between items-center text-sm">
                <div className="flex justify-between items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  <div className="">Éléonore</div>
                </div>

                <span>Publié le 17 mars 2021 à 11:16</span>
              </div>
              <div className="bg-white shadow-comment-card p-4 rounded-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                doloremque minima illo itaque ullam autem beatae distinctio
                laboriosam cum optio excepturi ad rem, similique voluptatem?
                Tempore est numquam laborum nihil? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Corrupti earum ex dignissimos
                magni. Temporibus quod labore blanditiis eos impedit illo
                possimus fuga quisquam voluptas? Eveniet debitis deleniti maxime
                asperiores animi.
              </div>
            </div>

            <div id="comment-card" className="space-y-2 mb-8">
              <div className="flex justify-between items-center text-sm">
                <div className="flex justify-between items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-400 rounded-full"></div>
                  <div className="">Éléonore</div>
                </div>

                <span>Publié le 17 mars 2021 à 11:16</span>
              </div>
              <div className="bg-white shadow-comment-card p-4 rounded-lg">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                doloremque minima illo itaque ullam autem beatae distinctio
                laboriosam cum optio excepturi ad rem, similique voluptatem?
                Tempore est numquam laborum nihil? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Corrupti earum ex dignissimos
                magni. Temporibus quod labore blanditiis eos impedit illo
                possimus fuga quisquam voluptas? Eveniet debitis deleniti maxime
                asperiores animi.
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col">
                <label
                  htmlFor="new-comment"
                  className="text-gray-500 font-semibold"
                >
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
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
