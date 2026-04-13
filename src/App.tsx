/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Project is Running!</h1>
      <p className="text-lg text-gray-600 max-w-md">
        This is a React web application environment. The development server runs automatically in the background.
      </p>
      <div className="mt-8 p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-md w-full">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">What's next?</h2>
        <p className="text-gray-600">
          Tell me what you'd like to build, and I'll write the code for you.
        </p>
      </div>
    </div>
  );
}
