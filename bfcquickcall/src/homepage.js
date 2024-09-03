import React from 'react';
import './App.css'; 
import axios from 'axios';
import { useEffect,useState } from 'react';
import ethers from 'ethers';
import { getTokenBalance, getBnbBalance, transferBnb, transferToken, getTransaction } from './MetaMaskService';



function HomePage({ onNavigate }) {

  const [toAddress, setToAddress] = useState("0x725e02D671AA828515e4080e97D0679eB3E867Ac");
const [quantity, setQuantity] = useState("");
 const [contract, setContract] = useState("0x8d008B313C1d6C7fE2982F62d32Da7507cF43551");
 const [error, setError] = useState('');
 const [wallet, setWallet] = useState('');
 const [groups, setGroups] = useState([]);
 const [selectedGroup, setSelectedGroup] = useState(null);
 const [chatId,setChatid] = useState('');

 useEffect(()  => {
 
  // Carregar grupos do Local Storage ao iniciar
  const savedGroups = JSON.parse(localStorage.getItem('groups')) || [];
  setGroups(savedGroups);
  const jsonData = localStorage.getItem('groups');
  if (jsonData) {
    setGroups(JSON.parse(jsonData));
  }
}, []);
 // Função para lidar com a seleção do grupo
 const handleGroupSelect = (groupId) => {
  const group = groups.find(g => g.id === groupId);
  if (group) {
    setSelectedGroup(group);
    setQuantity(group.valor); // Define a variável quantity com o valor correspondente
    setChatid(group.grupoid);
    console.log(quantity);
  }
};



 async function transfer() {
  if(quantity <= 0){
   sendMessage() ;
  }
    let result;
     
      result = await transferToken(toAddress, contract, quantity);
sendMessage();
   // setMessage(JSON.stringify(result));
    //handleSubmit();
  }

  const sendMessage = async () => {
    const token = '6777312253:AAHnEyhYfNPB8_t675-rdbYgE1xaXQYp8ho';
   
    const imageUrl = formData.produto;

    try {
      await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, 
        {
        chat_id: chatId,
        photo: imageUrl,
        caption: formData.hash
      });
      alert('Imagem e descrição enviadas com sucesso!');
    } catch (error) {
      alert('Erro ao enviar imagem e descrição');
      console.error('Erro ao enviar:', error);
    }
  };
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


  return (
    <div className='App'>
      <h1>Home Page</h1>
      <button onClick={onNavigate}>Ir para a Segunda Página</button>
      <header  className="App-header">
        <nav> <button onChange={login}>login</button>
        </nav>
        <h1>Selecione um Grupo</h1>
      <select onChange={(e) => handleGroupSelect(parseInt(e.target.value))}>
        <option value="">Selecione um grupo</option>
        {groups.map(group => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>

      {selectedGroup && (
        <div>
          <h2>Informações do Grupo</h2>
          <p>Grupo: {selectedGroup.name}</p>
          <p>Valor: {selectedGroup.valor}</p>
          <p>Grupo id :{selectedGroup.grupoid}</p>
          <p>Quantidade Selecionada: {quantity}</p>
        </div>
      )}
      
     <form >
     
     <label for="scales">Envie o link de uma imagem </label>

      <input
        type="text"
        name="produto"
        placeholder="Imagem"
        value={formData.produto}
        onChange={handleChange}
        font-size='10'
      />
      
       
      
      </form>
      <form>
        <p>
        <label for="scales">Descreva seu projeto </label>
                  </p>
     
      <textarea 
      name="hash"
      rows="10" 
      cols="50"
      value={formData.hash}
      onChange={handleChange}
      >Discriçao do seu projeto aqui</textarea> 
      </form>
      <button onClick={transfer}>Enviar Imagem e Descrição</button>
      </header>
    </div>
  );
}

export default HomePage;