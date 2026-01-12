interface ErrorMessageProps {
  message: string;
}

/**
 * Composant pour afficher les messages d'erreur
 */
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Erreur : </strong>
        <span className="block sm:inline">{message}</span>
      </div>
    </div>
  );
};
