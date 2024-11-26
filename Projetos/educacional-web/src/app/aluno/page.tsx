import React from 'react';
import Link from 'next/link';

const AlunoButton = () => {
  return (
    <div className="flex flex-col gap-4 items-center text-center border rounded-lg p-6">
      <h3 className="text-xl font-bold sm:text-2xl">Área do Aluno</h3>
      <ul className="grid gap-3 text-sm text-muted-foreground">
        <li>📚 Pesquisar aulas disponíveis</li>
        <li>📖 Ver informações detalhadas</li>
        <li>⭐ Favoritar aulas</li>
      </ul>
      <Link href="/aluno">
        <button className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-foreground">
          Acessar como Aluno
        </button>
      </Link>
    </div>
  );
};

export default AlunoButton;
