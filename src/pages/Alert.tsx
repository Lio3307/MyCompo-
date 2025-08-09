import ComponentHighlight from "../components/ComponentHighlight";

const Alert = () => {
  const codeAlert = `
    <div role="alert" class="rounded-md border border-gray-300 bg-white p-4 shadow-sm">
  <div class="flex items-start gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 text-green-600"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <div class="flex-1">
      <strong class="font-medium text-gray-900"> Changes saved </strong>

      <p class="mt-0.5 text-sm text-gray-700">Your product changes have been saved.</p>
    </div>

    <button
      class="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700"
      type="button"
      aria-label="Dismiss alert"
    >
      <span class="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>`;

  const codeAlertDark = `
    <div
  role="alert"
  class="rounded-md border border-gray-300 bg-white p-4 shadow-sm dark:border-gray-600 dark:bg-gray-800"
>
  <div class="flex items-start gap-4">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="size-6 text-green-600"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>

    <div class="flex-1">
      <strong class="font-medium text-gray-900 dark:text-white"> Changes saved </strong>

      <p class="mt-0.5 text-sm text-gray-700 dark:text-gray-200">
        Your product changes have been saved.
      </p>
    </div>

    <button
      class="-m-3 rounded-full p-1.5 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-200"
      type="button"
      aria-label="Dismiss alert"
    >
      <span class="sr-only">Dismiss popup</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-5"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</div>`;

  const codeAlertError = `
<div role="alert" class="border-s-4 border-red-700 bg-red-50 p-4">
  <div class="flex items-center gap-2 text-red-700">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
      <path
        fill-rule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clip-rule="evenodd"
      />
    </svg>

    <strong class="font-medium"> Something went wrong </strong>
  </div>

  <p class="mt-2 text-sm text-red-700">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo quasi assumenda numquam deserunt
    consectetur autem nihil quos debitis dolor culpa.
  </p>
</div>`;
  return (
    <>
      <ComponentHighlight sourceCode={codeAlert} title="Alert Component" />
      <ComponentHighlight sourceCode={codeAlertDark} title="Dark" />
      <ComponentHighlight sourceCode={codeAlertError} title="Error" />
    </>
  );
};

export default Alert;
