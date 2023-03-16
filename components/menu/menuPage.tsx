
interface MenuPageProps {
  children: React.ReactNode
}

export default function MenuPage(props: MenuPageProps) {
  const { children } = props;

  return (
    <div className="blur-none flex flex-col z-40 shadow p-6 rounded-2xl w-full md:w-4/5 lg:w-2/3 mt-8 absolute bg-white text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300 dark:border dark:border-zinc-800">
      {children}
    </div>
  );
}