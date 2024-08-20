import React from 'react';
import {useState, useEffect} from 'react';
import axios from 'axios';

function SecondPage({ onNavigate }) {

  const [error, setError] = useState('');
const [groups, setGroups] = useState([]);

const [formData, setFormData] = useState({
  nome: '',
  endereco: '',
  cep: '',
  bairro: '',
});
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({ ...formData, [name]: value });

 
};
const handleAddGroup = () => {
  // Lógica para adicionar um novo grupo à lista
  const newGroup = { id: groups.length + 1, name: 'Novo Grupo',valor:4, grupoid:'@eletroexpresso'};
  const updatedGroups = [...groups, newGroup];
  setGroups(updatedGroups);
  localStorage.setItem('groups', JSON.stringify(updatedGroups));
};
const handleEditGroup = (groupId, newName,newvalor,newid) => {
  // Lógica para modificar o nome de um grupo existente
  const updatedGroups = groups.map(group =>
    group.id === groupId ? { ...group, name: newName , valor :newvalor, grupoid:newid} : group
  );
  setGroups(updatedGroups);
  localStorage.setItem('groups', JSON.stringify(updatedGroups));
};


useEffect(() => {
  (async () => {
    const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
    setGroups(savedGroups);
    
  })();
}, []);
  return (
    <div>
      <h1>Second Page</h1>
      <button onClick={onNavigate}>Voltar para Home</button>
      <h2>Lista de Grupos do Telegram</h2>
      <ul>
        {groups.map(group => (
          <li key={group.id}>
            {group.name}:{' '}
            {group.valor}:{}
            {group.grupoid}:{""}
            <input
        type="text"
        name="nome"
        placeholder="nome"
        value={formData.produto}
        onChange={handleChange}
        font-size='10'
      />
      <input
        type="text"
        name="endereco"
        placeholder="Valor"
        value={formData.endereco}
        onChange={handleChange}
        font-size='10'
      />
      <input
        type="text"
        name="cep"
        placeholder="grupoid"
        value={formData.cep}
        onChange={handleChange}
        font-size='10'
      />
            <button onClick={() => handleEditGroup(group.id, formData.nome,formData.endereco,formData.cep)}>
              Editar
            </button>
          </li>
        ))}
      </ul>
      <button onClick={handleAddGroup}>Adicionar Grupo</button>
    </div>
  );
}

export default SecondPage;