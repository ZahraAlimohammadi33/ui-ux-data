import UserProfileMenu from "@/components/layout/UserProfileMenu";

export default function UserProfileLayout({ children }) {

  
return (
  <div className="min-h-screen bg-[#F8FAFC] pt-24 pb-10 px-2 sm:px-4">
    <div
      className="
        w-full
        max-w-7xl
        mx-auto
        flex
        flex-col
        lg:flex-row-reverse
        items-start
        gap-5
        lg:gap-8
      "
    >
      {/* سایدبار */}
      <aside className="w-full lg:w-64 xl:w-72 shrink-0">
        <UserProfileMenu />
      </aside>

      {/* محتوای صفحه */}
      <main className="w-full min-w-0 flex-1">
        {children}
      </main>
    </div>
  </div>
);
}