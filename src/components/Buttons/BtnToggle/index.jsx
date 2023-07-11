export const BtnToggle = () => {
  return (
    <label className="relative inline-flex items-center cursor-pointer outline-none">
      <input type="checkbox" value="" className="sr-only peer outline-none" />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:light-green dark:peer-focus:light-green rounded-full peer dark:var(--strong-green) peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-strong-green"></div>
    </label>
  );
};
