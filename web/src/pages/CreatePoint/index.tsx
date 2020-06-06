import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint = () => {
  return (
    <div id="page-create-point">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta" />

          <Link to="/">
            <FiArrowLeft />
          Voltar para a home
        </Link>
        </header>

        <form>
          <h1>Cadastro do <br /> ponto de coleta</h1>

          <fieldset>
            <legend>
              <h2>Dados</h2>
            </legend>

            <div className="field">
              <label htmlFor="name">Nome da Entidade</label>
              <input
                type="text"
                name="name"
                id="name" />
            </div>

            <div className="field-group">
              <div className="field">
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email" />
              </div>

              <div className="field">
                <label htmlFor="whatsapp">Whatsapp</label>
                <input
                  type="text"
                  name="whatsapp"
                  id="whatsapp" />
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Endereços</h2>
              <span>Selectione um endereço no mapa</span>
            </legend>

            <div className="field-group">
              <div className="field">
                <label htmlFor="uf">Estado</label>
                <select name="uf" id="uf">
                  <option value="0">Selecione uma UF</option>
                </select>
              </div>

              <div className="field">
                <label htmlFor="city">Cidade</label>
                <select name="city" id="city">
                  <option value="0">Selecione uma cidade</option>
                </select>
              </div>
            </div>
          </fieldset>

          <fieldset>
            <legend>
              <h2>Ítens de coleta</h2>
              <span>Selectione um ou mais itens abaixo</span>
            </legend>

            <ul className="items-grid">
              <li>
                <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                <span>Óleo de cozinha</span>
              </li>
              <li className="selected">
                <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                <span>Óleo de cozinha</span>
              </li>
              <li>
                <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                <span>Óleo de cozinha</span>
              </li>
              <li>
                <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                <span>Óleo de cozinha</span>
              </li>
              <li>
                <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                <span>Óleo de cozinha</span>
              </li>
              <li>
                <img src="http://localhost:3333/uploads/oleo.svg" alt="Teste"/>
                <span>Óleo de cozinha</span>
              </li>              
            </ul>
          </fieldset>

          <button type="submit">
              Cadastrar Ponto de Coleta
            </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePoint;