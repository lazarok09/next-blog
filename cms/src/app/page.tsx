import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen   pb-20 gap-16 p-4 font-[family-name:var(--font-geist-sans)]">
      <main>
        <section className="grid grid-cols-2 gap-8">
          <div className="border h-max flex relative justify-center min-h-max">
            <Image
              src="/door.jpg"
              title="Anamorphic room Princessehof Leeuwarden - Leon Keer"
              alt="A picture of the art  Anamorphic room Princessehof Leeuwarden by Leon Keer"
              fill
              priority
            />
          </div>
          <form>
            <fieldset>
              <legend>Bem vindo de volta</legend>
              <label>
                Email
                <input type="email" name="email" />
              </label>
              <label>
                Senha
                <input type="password" name="password" />
              </label>
              <button>Login</button>
              <button>Sign Up</button>
            </fieldset>
          </form>
        </section>
      </main>
    </div>
  );
}
