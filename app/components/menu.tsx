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
      <div className="menu__links flex items-center py-4">
        {menus.map((menu, index) => (
          <a href="#" key={index} className="font-size-16">
            {menu}
            {index !== menus.length - 1 && <span className="mx-3">/</span>}
          </a>
        ))}
      </div>
    </div>
  );
}
