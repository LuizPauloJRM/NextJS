import React from 'react';
import Link from 'next/link';

const ProfessorButton = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center border rounded-lg p-6">
      <h3 className="text-xl font-bold sm:text-2xl">Área do Professor</h3>
      <ul className="grid gap-3 text-sm text-muted-foreground">
        <li>✏️ Cadastrar novas aulas</li>
        <li>🗂️ Gerenciar aulas cadastradas</li>
        <li>📩 Receber inscrições</li>
      </ul>
      <Link href="/professor">
        <button className="px-6 py-3 bg-secondary text-white rounded-md hover:bg-secondary-foreground">
          Acessar como Professor
        </button>
      </Link>
    </div>
  );
};

export default ProfessorButton;
