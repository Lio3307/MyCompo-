import ComponentHighlight from "../components/ComponentHighlight";

const Breadcrumbs = () => {
  const code = `<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-1 text-sm text-gray-700">
    <li>
      <a href="#" class="block transition-colors hover:text-gray-900"> Home </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" class="block transition-colors hover:text-gray-900"> Category </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="size-4"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clip-rule="evenodd"
        />
      </svg>
    </li>

    <li>
      <a href="#" class="block transition-colors hover:text-gray-900"> Product </a>
    </li>
  </ol>
</nav>`;

  const code1 = `<nav aria-label="Breadcrumb">
  <ol class="flex items-center gap-1 text-sm text-gray-700">
    <li>
      <a href="#" class="block transition-colors hover:text-gray-900"> Home </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 20.247 6-16.5" />
      </svg>
    </li>

    <li>
      <a href="#" class="block transition-colors hover:text-gray-900"> Category </a>
    </li>

    <li class="rtl:rotate-180">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="m9 20.247 6-16.5" />
      </svg>
    </li>

    <li>
      <a href="#" class="block transition-colors hover:text-gray-900"> Product </a>
    </li>
  </ol>
</nav>`;

  return (
    <>
      <ComponentHighlight sourceCode={code} title="Breadcrumb Components" />
      <ComponentHighlight sourceCode={code1} title="" />
    </>
  );
};

export default Breadcrumbs;
