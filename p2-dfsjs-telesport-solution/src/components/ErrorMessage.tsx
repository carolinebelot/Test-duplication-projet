interface ErrorMessageProps {
  message: string;
}

/**
 * Composant ErrorMessage
 * Affiche un message d'erreur stylisé
 */
export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
        <h2 className="font-bold text-xl mb-2">Erreur</h2>
        <p>{message}</p>
      </div>
    </div>
  );
};
