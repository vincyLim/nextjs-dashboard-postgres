import SideNav from '@/app/ui/dashboard/sidenav';

// in next.js any file inside a folder with layout.tsx, the layout.tsx will auto wrap all the pages with the layout.
// unless deeper subfolder defines its own layout.tsx to override it. 
export default function Layout({children}:{children: React.ReactNode}){
    return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}