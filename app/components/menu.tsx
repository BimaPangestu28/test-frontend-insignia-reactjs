export default function Menu() {
  const menus = [
    "Videos",
    "People",
    "Documents",
    "Events",
    "Communites",
    "Favorites",
    "Channels",
  ];

  return (
    <div id="menu">
      <div className="hidden md:block menu__links flex items-center py-4">
        {menus.map((menu, index) => (
          <a href="#" key={index} className="font-size-16 color-base">
            {menu}
            {index !== menus.length - 1 && <span className="mx-8">/</span>}
          </a>
        ))}
      </div>
    </div>
  );
}
