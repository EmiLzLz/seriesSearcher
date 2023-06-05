import React, { useEffect, useState } from "react";

const initialForm = {
  series: "",
};

//*Formulario con variable de estado
function SeriesForm({ handleSearch }) {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //*validaciones
    if (!form.series) {
      alert("Datos incompletos");
      return;
    }

    //*envio de data a componente padre
    handleSearch(form);

    setForm(initialForm);
  };

  return (
    <div className="form container mx-auto py-5">
      <form onSubmit={handleSubmit} className="px-2 flex flex-col md:flex-row items-center justify-center gap-3">
        <input
          type="text"
          name="series"
          placeholder="series Name..."
          onChange={handleChange}
          value={form.series}
          className="text-white bg-transparent  border-b-2 w-full md:w-4/5 py-3 px-1 rounded-sm"
          autoFocus
        />
        <input
          id="searchBtn"
          type="submit"
          value="Search"
          className="w-28 font-bold border-0 py-2 px-2 rounded-sm"
        />
      </form>
    </div>
  );
}

export default SeriesForm;
