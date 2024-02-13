
export type MenuPageProps = {
  children: React.ReactNode
}

export default function MenuPage(props: MenuPageProps) {
  const { children } = props;

  return (
    <div data-testid="menu-page" className="mt-[7vh] h-[93vh] md:mt-[14vh] md:h-[86vh] z-40 shadow w-full backdrop-blur-sm absolute">
      <div className="mt-8 p-2 md:mx-24 lg:mx-60 shadow-md border flex flex-col  bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800">
        {children}
      </div>
    </div>
  );
}