import { atom, useRecoilState } from "recoil";

const sidebarState = atom({
  key: "sidebarState",
  default: true,
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useRecoilState(sidebarState);

  return (
    <div className={`bg-gray-900 text-white h-screen p-5 transition-all duration-300 ${isOpen ? "w-64" : "w-20"}`}>
      <button
        className="text-white mb-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <nav className="flex flex-col space-y-4">
        <NavItem icon="🏠" text="Home" link="/home" />
        <NavItem icon="👤" text="Profile" link="/profile" />
        <NavItem icon="⚙️" text="Settings" link="/settings" />
      </nav>
    </div>
  );
}

function NavItem({ icon, text, link }) {
  const [isOpen] = useRecoilState(sidebarState);
  return (
    <button 
      className="flex items-center space-x-3 p-3 hover:bg-gray-700 rounded-lg cursor-pointer w-full text-left"
      onClick={() => window.location.href = link}
    >
      <span>{icon}</span>
      {isOpen && <span>{text}</span>}
    </button>
  );
}

