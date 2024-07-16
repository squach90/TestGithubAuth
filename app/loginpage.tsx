import { LoginButton } from "./AuthButtons";

export const LoginPage = () => {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gradient-to-br from-[#6366F1] to-[#EC4899] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-8 shadow-2xl">
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Connexion
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Entrez vos identifiants pour accéder à votre compte.
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#6366F1] focus:outline-none focus:ring-[#6366F1] sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Mot de passe
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#6366F1] focus:outline-none focus:ring-[#6366F1] sm:text-sm"
                />
              </div>
            </div>
            <div>
              <LoginButton />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
