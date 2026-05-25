import { useState } from 'react'
import './App.css'

function App() {
  const [list, setList]=useState([])

  const handleSubmit =(e) =>{
    e.preventDefault();

    const elementInput = e.target.elements;

    const listValue = {
      title : elementInput.title.value,
      nominal : new Intl.NumberFormat("id-ID").format(elementInput.nominal.value),
      date : new Intl.DateTimeFormat(["id"]).format(new Date(elementInput.date.value)),
      jenis : elementInput.jenis.value,
    }
    
    setList([...list,listValue])
    e.target.reset()
  }
  const handleDelete = (id)=>{
    setList(list.filter((items, index)=> index!=id))
  }
  return (
    <>
      <h1>Personal Finance Management</h1>
      <form className='form-input' action="" onSubmit={handleSubmit} >
        <input className='title' name='title' type="text" placeholder='Judul Aktivitas Transaksi'/>
        <input className='nominal' name="nominal" type="number" placeholder='Nominal'/>
        <input className='date' type="date" placeholder='Tanggal' name='date'/>
        <select name="jenis" >
          <option value="">Jenis</option>
          <option value="masuk">Pemasukan</option>
          <option value="keluar">Pengeluaran</option>
        </select>
        <button className='button-save' type='submit'>Simpan</button>
      </form>
      <h3>List Finance</h3>
      <ol>
        {list.length===0 && <span>List Finance masih kosong</span>}

        {list.map((lists,index) => <li className={`list-finance ${lists.jenis ==="masuk"? "pemasukan" : "pengeluaran"}`}   key={index}>{index+1}. {lists.title} - Rp.{lists.nominal} - {lists.date}<button className='delBut' onClick={()=>handleDelete(index)}>Delete</button></li>)}

      </ol>
    </>
  )
}

export default App
