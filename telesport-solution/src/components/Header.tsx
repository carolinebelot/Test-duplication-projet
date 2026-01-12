import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="container mx-auto px-4 py-6">
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <h1 className="text-3xl font-bold">{title}</h1>
        </Link>
      </div>
    </header>
  );
};
