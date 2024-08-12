export default function Login() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-xl">
                <h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
                <form className="space-y-6">
                <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                ID
            </label>
            <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                password
            </label>
            <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="w-full px-3 py-2 mt-1 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            </div>
            <div className="flex items-center justify-between">
            <div className="flex items-center">
            <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
            />
                <label htmlFor="remember-me" className="block ml-2 text-sm text-gray-900">
                Stay logged in
                </label>
            </div>
            <div className="text-sm">
                <a href="register" className="font-medium text-indigo-600 hover:text-indigo-500">
                Don't have an account?
                </a>
            </div>
            </div>
            <div>
            <button
                type="submit"
                className="flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
        Login
            </button>
            </div>
            </form>
        </div>
    </div>
    );
}
