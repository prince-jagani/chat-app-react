// components/Sidebar.tsx
interface SidebarProps {
    pages: { id: string; icon: React.ReactNode }[];
    activePage: string;
    onChangePage: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ pages, activePage, onChangePage }) => {
    const activePageIndex = pages.findIndex((page) => page.id === activePage);
    const linePosition = activePageIndex * (3);

    return (
        <div className="relative h-screen p-4 shadow-[0_6px_12px_3px_rgba(0,0,0,0.3)]">
            {pages.map((page, index) => (
                <div
                    key={page.id}
                    className={`flex items-center p-2 cursor-pointer transition-transform ${activePage === page.id ? 'bg-blue-500 text-white' : 'hover:bg-blue-200'
                        }`}
                    onClick={() => onChangePage(page.id)}
                    style={{
                        borderRadius: '0.5rem',
                        margin: '0.5rem 0',
                        transform: activePageIndex === index ? 'translateX(5px)' : 'none',
                    }}
                >
                    {page.icon}
                </div>
            ))}
            <div
                className="absolute top-7 left-0 h-8 bg-blue-500 w-1 transition-transform"
                style={{ position: 'absolute', transform: `translateY(${linePosition}rem)` }}
            >
                <div className="absolute top-1/2 left-full w-0 h-0 border-t-1 border-r-1 border-transparent border-blue-500 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
            </div>
        </div>
    );
};

export default Sidebar;
