import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import "./App.css";

const App = () => {
  const [data, setData] = useState([
    {
      nog: 1,
      entidad: "Beetlejuice",
      fecha: "1988",
      nit: "1988",
      nombre: "1988",
      description: "1988",
      monto: "1988",
      url: "https://www.guatecompras.gt/concursos/consultaConcurso.aspx?nog=",
    },
    {
      nog: 1,
      entidad: "Beetlejuice",
      fecha: "1988",
      nit: "1988",
      nombre: "1988",
      description: "1988",
      monto: "1988",
      url: "https://www.guatecompras.gt/concursos/consultaConcurso.aspx?nog=",
    },
    {
      nog: 1,
      entidad: "Beetlejuice",
      fecha: "1988",
      nit: "1988",
      nombre: "1988",
      description: "1988",
      monto: "1988",
      url: "https://www.guatecompras.gt/concursos/consultaConcurso.aspx?nog=",
    },
  ]);

  const columns = [
    {
      name: "NOG",
      selector: (row) => row.nog,
    },
    {
      name: "ENTIDAD",
      selector: (row) => row.entidad,
    },
    {
      name: "FECHA",
      selector: (row) => row.fecha,
    },
    {
      name: "NIT",
      selector: (row) => row.nit,
    },
    {
      name: "NOMBRE",
      selector: (row) => row.nombre,
    },
    {
      name: "DESCRIPCIÓN",
      selector: (row) => row.description,
    },
    {
      name: "MONTO",
      selector: (row) => row.monto,
    },
    {
      name: "URL",
      selector: (row) => row.url,
    },
  ];

  const getData = () => {
    const url = `http://desafiogt.aei.gt:8080/publicacion_id/_search?size=${process.env.REACT_APP_MAX_RETORNO}&q=${process.env.REACT_APP_BUSQUEDA}`;
    axios
      .get(url)
      .then((response) => {
        // handle success
        // console.log(response);
        response = JSON.parse(response);
        const temp = [];
        for (var i = 0; i < process.env.REACT_APP_MAX_RETORNO; i++) {
          var len = temp.length;
          temp[len] = {};
          temp[len]["_index"] = i["_index"];
          temp[len]["_id"] = i["_id"];
          temp[len]["_score"] = i["score"];
        }
        setData(...temp);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <DataTable columns={columns} data={data} />
    </div>
  );
};

export default App;
